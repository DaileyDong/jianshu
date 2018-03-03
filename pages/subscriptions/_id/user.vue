<template>
  <div class="recommend">
    <my-header></my-header>
           <div class="sub my-container">
       <div class="row">
         <div class="aside col-4" >
            <sub-aside></sub-aside>
         </div>
         <div class="main col-8">
            <div class="main-top">
            <a href="javascript:void(0)" class="nbpic">
             <img src="~static/89731766ca20.jpg" alt="">
           </a>
         <div class="info">
          <div class="title">朱庇特的白银时代</div>
           <div class="it">写了64646165个字，获得了24165161人喜欢</div>
         </div>
           <button class="btn-active">
           <nuxt-link to="/u/123" >个人主页 ></nuxt-link></button>
           <button class="simpleMail">发简信</button>
        </div>
        <div id="outer-container">
            <ul class="trigger-menu">
              <li  v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index,trigger.name)" >
                <a href="javascript:void(0)">
                  <i :class="trigger.icon"></i>
                   {{trigger.title}}
                </a>
              </li>
            </ul>
            <keep-alive>
              <component :is="is_component"></component>
            </keep-alive>
              <a href="javascript:void(0)" class="find-more">
              阅读更多
            </a>
         </div>
      </div>
     </div>
  </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import SubAside from "~/components/timeline/SubAside";
import NewRelease from "~/components/nb/NewRelease";
import NewComments from "~/components/nb/NewComments";
import MyHot from "~/components/menu/MyHot";
export default {
  name: "user",
  data() {
    return {
      num: 0,
      mk: false,
      iconName: "fa fa-plus",
      buttonClass: "btn-hollow",
      triggers: [
        { icon: "fa fa-file-text", title: "最新收录", name: "NewRelease" },
        { icon: "fa fa-comments", title: "最新评论", name: "NewComments" },
        { icon: "fa fa-fire", title: "热门", name: "MyHot" }
      ],
      is_component: "NewRelease"
    };
  },
  methods:{
    dhClick(i,name) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      this.num = i;
      this.is_component=name;
    },
  },
  mounted() {
    document.querySelector(".users li:nth-of-type(3)").className =
      "asideActive";
    document.querySelector(".nav-list li:nth-of-type(2) a").className =
      "headerActive";
       this.$refs.triggers[this.num].className = "trigger_active";
  },
  components: {
    MyHeader,
    SubAside,
    NewRelease,
    NewComments,
    MyHot
  }
};
</script>
<style scoped>
.main-top .nbpic {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  display: inline-block;
}
.main-top .nbpic img {
  width: 100%;
  height: 100%;
  border-radius:50%;
}
 .main-top .title {
  font-size: 21px;
  width: 300px;
  font-weight: 700;
  cursor: pointer;
}
.sub .main-top .info {
  display: inline-block;
  vertical-align: middle;
}
.sub .main-top .it {
  font-size: 14px;
  width: 300px;
  display: inline-block;
  vertical-align: middle;
  color: #969696;
}
.main-top .it a{
    color:#3194d0!important;
}
.main-top button {
  float: right;
  margin-top: 23.5px;
  width: 100px;
  padding: 7px 0px;
  outline: none;
  font-size: 15px;
  cursor: pointer;
  border-radius: 40px;
}
.main-top button:hover{
    background-color:#f8f8f8 ;
}
.main-top .simpleMail{
  width: 70px;
  color: #42c02e;
  margin-right: 15px;
  background-color: #fff;
  border: 1px solid #42c02e;
}
.main-top .btn-active {
  color: #42c02e;
  background-color: #fff;
  border: 1px solid #42c02e;
}
.trigger-menu {
  margin-top: 20px!important;
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
</style>


