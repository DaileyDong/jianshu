<template>
  <div>
    <my-header></my-header>
    <div class="person my-container">
        <div class="row">
            <div class="col-8 main">
                      <div class="main-top">
                 <nuxt-link to="/u/123" class="avatar">
                 <img src="~static/89731766ca20.jpg" alt="">
                 </nuxt-link>
                 <div class="title">
                  <nuxt-link to="/u/123" class="name">朱庇特的白银时代</nuxt-link>
                 </div>
                 <div class="info">
                  <ul>
                      <li>
                          <div class="meta-block">
                              <nuxt-link to="/users/123/following">
                              <p>6</p>
                              关注
                              <i class="fa fa-angle-right "></i>
                              </nuxt-link>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <nuxt-link to="/users/123/followers">
                              <p>4</p>
                              粉丝
                              <i class="fa fa-angle-right "></i>
                              </nuxt-link>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <nuxt-link to="/u/123">
                              <p>1</p>
                              文章
                              <i class="fa fa-angle-right "></i>
                              </nuxt-link>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <p>6</p>
                              字数
                              <i class="fa fa-angle-right "></i>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <p>2</p>
                              收获喜欢
                          </div>
                      </li>
                  </ul>
                 </div>
                   <button class="simpleMail">发简信</button>
                 <button :class="buttonClass"  @mouseover="followOver1" @mouseout="followOut1" @click="followBtn1"><i :class="iconName"></i><span ref="buttons">关注</span></button>
             </div>
             <div id="outer-container">
                      <ul class="trigger-menu">
                     <li v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index,trigger.name)" >
                        <a href="javascript:void(0)">
                            {{trigger.title}}
                        </a>
                     </li>
                 </ul>
                  <div id="list-container">
                      <keep-alive>
                      <component :is="followComponent"></component>
                      </keep-alive>
                  </div>
             </div>
            </div>
            <my-introdaction></my-introdaction>
        </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import FollowUsers from "~/components/FollowUsers";
import Fans from "~/components/Fans";
import MyIntrodaction from '~/components/MyIntrodaction'
export default {
  name: "following",
  data() {
    return {
      num: 0,
      iconName: "fa fa-plus",
      buttonClass: "btn-hollow",
      triggers: [{title:"关注用户 6",name:"FollowUsers"},{ title:"粉丝 4",name:'Fans'}],
      followComponent: "FollowUsers",
    };
  },
  methods: {
    dhClick(i,name) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      this.num = i;
      this.followComponent=name;
    },
    followBtn1() {
      if (this.$refs.buttons.innerHTML == "取消关注") {
        this.$refs.buttons.innerHTML = "关注";
        this.iconName = "fa fa-plus";
        this.buttonClass = "btn-hollow";
      } else if (this.$refs.buttons.innerHTML == "关注") {
        this.iconName = "fa fa-check";
        this.$refs.buttons.innerHTML = "已关注";
        this.buttonClass = "btn-active";
      }
    },
    followOver1() {
      if (this.$refs.buttons.innerHTML == "已关注") {
        this.iconName = "fa fa-times";
        this.$refs.buttons.innerHTML = "取消关注";
      }
    },
    followOut1() {
      if (this.$refs.buttons.innerHTML == "取消关注") {
        this.iconName = "fa fa-check";
        this.$refs.buttons.innerHTML = "已关注";
      }
    }
  },
  mounted(){
     this.$refs.triggers[this.num].className = "trigger_active";
  },
  components: {
    MyHeader,
    FollowUsers,
    Fans,
    MyIntrodaction
  }
};
</script>
<style scoped>
.person {
  overflow-x: hidden;
}
.person .row {
  padding-top: 30px;
}
.person .main .main-top {
  margin-bottom: 20px;
}
.person .main .main-top .avatar {
  float: left;
  width: 80px;
  height: 80px;
  margin-left: -2px;
}
.person .main .main-top .title {
  padding: 5px 0 0 100px;
}
.person .main .main-top .title .name {
  font-size: 21px;
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;
}
.person .main .main-top .info {
  margin-top: 5px;
  padding-left: 100px;
  font-size: 14px;
}
.person .main .main-top .info ul li {
  display: inline-block;
}
.person .main .main-top .info ul .meta-block {
  font-size: 12px;
  margin: 0 7px 6px 0;
  padding: 0 7px 0 0;
  border-right: 1px solid #f0f0f0;
  color: #969696;
}
.person .main .main-top .info ul li:last-of-type .meta-block {
  border: none;
}
.person .main .main-top .info ul p {
  margin-bottom: -3px;
  font-size: 15px;
  color: #333;
}
.person .main .main-top .info ul .meta-block i {
  margin-left: 3px;
}
.person .main .main-top .simpleMail {
  float: right;
  margin-top: -60px;
  margin-right: 100px;
  outline: none;
  padding: 7px 15px;
  font-size: 15px;
  color: #42c02e;
  border-radius: 40px;
  background-color: #fff;
  border: 1px solid #42c02e;
  cursor: pointer;
}
.person .main .main-top .btn-hollow {
  float: right;
  margin-top: -60px;
  outline: none;
  width: 90px;
  padding: 7px 0px;
  font-size: 15px;
  border-radius: 40px;
  background-color: #42c02e;
  color: #fff;
  border: 1px solid #42c02e;
  cursor: pointer;
}
.btn-active {
  float: right;
  margin-top: -60px;
  outline: none;
  padding: 7px 0;
  width: 90px;
  font-size: 15px;
  border-radius: 40px;
  background-color: #fff;
  color: #8c8c8c;
  border: 1px solid #c1c1c1;
  cursor: pointer;
}
.person .main .main-top button i {
  margin-right: 5px;
}
.trigger-menu {
  margin-bottom: 20px !important;
  border-bottom: 1px solid #f0f0f0;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  color: #969696;
  margin-bottom: -1px;
}
.trigger_active {
  color: #646464 !important;
  border-bottom: 2px solid #646464;
}
/*切换动画*/
.trigger-menu li::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  bottom: 0px;
  width: 0;
  transition: all ease 0.3s;
  opacity: 0;
  border-bottom: 2px solid #b4b4b4;
}
.trigger-menu li:hover {
  color: #646464 !important;
}
.trigger-menu li:hover::after {
  left: 0%;
  width: 100%;
  opacity: 1;
  border-bottom: 2px solid #646464;
}
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
}
.trigger-menu i {
  margin-right: 5px;
  font-size: 17px;
}
/********************右侧样式**************************/
.person .aside .title {
  float: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
}
.person .aside .profile-edit{
  margin: 0 0 20px;
  display:block;
}
.person .aside .profile-edit textarea{
    margin-bottom: 5px;
    width: 100%;
    height: 125px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    resize: none;
    outline: none;
}
.person .aside .profile-edit button{
  padding: 0;
  margin: 0;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 40px;
  color: #42c02e;
  background-color: #fff;
 border: 1px solid rgba(59,194,29,.7);
  outline: none;
  cursor: pointer;
}
.person .aside .profile-edit a{
  margin-left: 10px;
  font-size: 14px;
  color: #969696!important;
}
.person .aside .profile-edit a:hover{
  color: #000!important;
}
.person .aside .function-btn {
  float: right;
  font-size: 13px;
  color: #969696 !important;
}
.person .aside .function-btn:hover {
  color: #333 !important;
}
.person .aside .description {
  position: relative;
  margin: 32px 0 16px 0;
  padding: 0 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
.textDisplay{
  font-size: 14px;
}
.person .aside .user-dynamic {
  padding-bottom: 6px !important;
  margin-bottom: 16px !important;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .user-dynamic li {
  margin-bottom: 10px;
}
.person .aside .user-dynamic i {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.person .aside .user-dynamic span {
  font-size: 14px;
  line-height: 30px;
}
.person .aside .new-collection-block {
  position: relative;
  margin-bottom: 16px;
  padding: 0 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .new-collection-btn {
  font-size: 13px;
  color: #42c02e !important;
}
.person .aside .new-collection-btn i {
  padding-right: 2px;
}
.person .aside .change {
  float: none;
}
.person .aside .list {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px !important;
}
.person .aside .list li a {
  color: #969696 !important;
  margin-right: 5px;
  vertical-align: middle;
}
.person .aside .list li a.name {
  font-size: 14px;
  color: #333 !important;
}
</style>
