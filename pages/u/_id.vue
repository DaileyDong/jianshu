<template>
  <div>
    <my-header></my-header>
    <div class="person my-container">
      <div class="row">
          <div class="col-8 main" >
             <div class="main-top">
                 <nuxt-link to="/u/123" class="avatar">
                 <img src="../../static/89731766ca20.jpg" alt="">
                 </nuxt-link>
                 <div class="title" >
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
                     <li  v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index,trigger.name)" >
                        <a href="javascript:void(0)">
                            <i :class="trigger.icon"></i>
                            {{trigger.title}}
                        </a>
                     </li>
                 </ul>
                 <div id="list-container">
                     <!--缓冲动画-->
                      <div class="buffer" v-if="false">
                        <div class="info">
                          <div class="avatar"></div>
                          <div class="title"></div>
                        </div>
                        <div class="line-one"></div>
                         <div class="line-two"></div>
                         <div class="line-three"></div>
                         <div class="line-four"></div>
                         <div class="comment">
                          <i class="fa fa-eye"></i><span></span>
                           <i class="fa fa-comment"></i><span></span>
                          <i class="fa fa-heart"></i><span></span>
                         </div>
                         <div class="pic"></div>
                      </div>
                      <!--*****************************************动态组件****************************************-->
                     <keep-alive>
                     <component :is="is_component"></component>
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
import MyArticle from '~/components/menu/MyArticle';
import MyDynamic from '~/components/menu/MyDynamic';
import MyHot from '~/components/menu/MyHot';
import MyNewComment from '~/components/menu/MyNewComment';
import MyIntrodaction from '~/components/MyIntrodaction'
export default {
  data() {
    return {
      triggers: [
        {
          icon: "fa fa-file-text",
          title: "文章",
          name:'MyArticle'
        },
        {
          icon: "fa fa-snapchat-ghost",
          title: "动态",
          name:'MyDynamic'
        },
        {
          icon: "fa fa-comments ",
          title: "最新评论",
          name:'MyNewComment'
        },
        {
          icon: "fa fa-fire",
          title: "热门",
          name:'MyHot'
        }
      ],
      proFileEdit: false,
      iconName: "fa fa-plus",
      buttonClass: "btn-hollow",
      textAreaContent:'',
      textDisplay:false,
      is_component:'MyArticle'
    };
  },
  methods: {
    dhClick(i,name) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      this.is_component=name;
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
    },
  },
  mounted() {
    this.$refs.triggers[0].className = "trigger_active";
  },
  components: {
    MyHeader,
    MyArticle,
    MyDynamic,
    MyHot,
    MyNewComment,
    MyIntrodaction
  }
};
</script>

<style scoped>
.buffer {
  color: #eaeaea;
}
.buffer .info .avatar {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: #eaeaea;
  border-radius: 50%;
}
.buffer .info .title {
  position: relative;
  top: -7px;
  width: 100px;
  height: 15px;
  margin-left: 5px;
  display: inline-block;
  background-color: #eaeaea;
}
.buffer .line-one {
  width: 200px;
  height: 18px;
  background-color: #eaeaea;
  margin-bottom: 10px;
}
.buffer .line-two {
  width: 250px;
  height: 15px;
  background-color: #eaeaea;
  margin-bottom: 10px;
  animation: lengthActive1 0.5s ease alternate-reverse infinite;
}
.buffer .line-three {
  width: 400px;
  height: 15px;
  background-color: #eaeaea;
  margin-bottom: 10px;
  animation: lengthActive2 0.5s ease alternate infinite;
}
.buffer .line-four {
  height: 14px;
  width: 100px;
  background-color: #eaeaea;
  animation: lengthActive3 0.5s ease alternate infinite;
}
.buffer .comment i {
  font-size: 15px;
  vertical-align: middle;
  margin-right: 5px;
}
.buffer .comment span {
  width: 50px;
  height: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  background-color: #eaeaea;
}
.buffer .pic {
  float: right;
  width: 150px;
  height: 100px;
  margin-top: -140px;
  background-color: #eaeaea;
  border-radius: 4px;
}
@keyframes lengthActive1 {
  0% {
    width: 250px;
  }
  100% {
    width: 300px;
  }
}
@keyframes lengthActive2 {
  0% {
    width: 300px;
  }
  100% {
    width: 400px;
  }
}
@keyframes lengthActive3 {
  0% {
    width: 200px;
  }
  100% {
    width: 100px;
  }
}
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
.person .main .main-top .simpleMail{
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
  padding: 7px 0px;
  width: 90px;
  font-size: 15px;
  border-radius: 40px;
  background-color: #42c02e;
  color: #fff;
  border: 1px solid #42c02e;
  cursor: pointer;
}
.person .main .main-top .btn-active {
  float: right;
  margin-top: -60px;
  outline: none;
  width: 90px;
  padding: 7px 0;
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

</style>
