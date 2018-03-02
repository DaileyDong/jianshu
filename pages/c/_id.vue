<template>
  <div class="subject">
   <my-header></my-header>
    <div class="my-container">
      <div class="row">
       <div class="col-8">
        <div class="main-top">
            <a href="javascript:void(0)" class="nbpic">
             <img src="~static/time.jpeg" alt="">
           </a>
         <div class="info">
          <div class="title">让时间产生价值</div>
           <div class="it">收录了16228篇文章 · 1022人关注</div>
         </div>
           <button :class="buttonClass"  @mouseover="followOver1" @mouseout="followOut1" @click="followBtn1"><i :class="iconName"></i>
           <span ref="buttons">关注</span></button>
           <button class="simpleMail">收录</button>
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
         </div>
      </div>

        <!--右侧-->
        <div class="col-4">
            <div class="notice">
              <p>专题公告</p>
              <div class="textContent">一生太短</div>
            </div>
            <div class="share">
              <span>分享到</span>
              <a href="javascript:void(0)"><i class="fa fa-weibo"></i></a>
               <a href="javascript:void(0)"><i class="fa fa-weixin"></i></a>
                <a href="javascript:void(0)" @click.stop="moreBtn"><i class="fa fa-ellipsis-h"></i></a>
                  <div class="motai" v-show="mk">
                    <div class="san"></div>
                          <div class="content">
                          <ul>
                              <li><i class="fa fa-star"></i><span>分享到QQ空间</span></li>
                              <li><i class="fa fa-twitter"></i><span>分享到Twitter</span></li>
                              <li><i class="fa fa-facebook-official"></i><span>分享到FaceBook</span></li>
                              <li><i class="fa fa-google-plus"></i><span>分享到Google+</span></li>
                              <li><i class="fa fa-bug"></i><span>分享到豆瓣</span></li>
                         </ul>
                          </div>
                     </div>
                </div>
            <p>管理员</p>
              <ul class="someBody">
                    <li>
                      <div class="author">
                          <nuxt-link to="/u/123" class="avatar">
                          <img src="~assets/img/user.jpg" alt="">
                          </nuxt-link>
                          <nuxt-link to="/u/123" class="name">朱庇特的白银时代</nuxt-link>
                          <span class="sign">创建者</span>
                      </div>
                    </li>
                 </ul>
              <div class="operate">
                 <span>编辑专题</span>
                 ·
                 <span>删除专题</span>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import NewRelease from "~/components/nb/NewRelease";
import NewComments from "~/components/nb/NewComments";
import MyHot from "~/components/menu/MyHot";
export default {
  data() {
    return {
      num:0,
      mk:false,
      iconName: "fa fa-plus",
      buttonClass: "btn-hollow",
      triggers:[
        {icon:'fa fa-comments',title:'最新评论',name:'NewComments'},
        {icon:'fa fa-file-text',title:'最新收录',name:'NewRelease'},
        {icon:'fa fa-fire',title:'热门',name:'MyHot'},
      ],
      is_component:'NewRelease'
    };
  },
  methods: {
       dhClick(i,name) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      this.num = i;
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
        this.buttonClass = "btn-active btnBgColor";
        this.$refs.buttons.innerHTML = "取消关注";
      }
    },
    followOut1() {
      if (this.$refs.buttons.innerHTML == "取消关注") {
        this.iconName = "fa fa-check";
        this.buttonClass = "btn-active";
        this.$refs.buttons.innerHTML = "已关注";
      }
    },
        moreBtn(ev){
        this.mk=true;
    },

    handleBodyClick(ev){
      this.mk=false;
    }
  },
  mounted(){
    document.addEventListener('click',this.handleBodyClick)
    this.$refs.triggers[this.num].className = "trigger_active";
  },
  components: {
    MyHeader,
    NewRelease,
    NewComments,
    MyHot
  }
};
</script>
<style scoped>
.my-container {
  margin-top: 30px;
}
.main-top .nbpic {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  display: inline-block;
}
.main-top .nbpic img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.subject .main-top .title {
  font-size: 21px;
  width: 300px;
  font-weight: 700;
  cursor: pointer;
}
.main-top .info {
  display: inline-block;
  vertical-align: middle;
}
.subject .main-top .it {
  font-size: 14px;
  width: 300px;
  display: inline-block;
  vertical-align: middle;
  color: #969696;
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
.main-top .simpleMail{
  width: 90px;
  color: #42c02e;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #42c02e;
}
.main-top .btn-hollow {
  background-color: #42c02e;
  color: #fff;
  border: 1px solid #42c02e;
}
.main-top .btn-active {
  background-color: #fff;
  color: #8c8c8c;
  border: 1px solid #c1c1c1;
}
.main-top button i {
  margin-right: 5px;
}
.btnBgColor{
  background-color: #f8f8f8!important;
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
/*******右侧*****/
.notice .textContent{
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 10px;
}
.share{
  position: relative;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.share span{
  font-size: 14px;
}
.share a i{
  margin-left: 10px;
  font-size: 20px;
 vertical-align: middle;
}
.share a .fa-weibo:hover{
  color:#ea6f5a;
}
.share a .fa-weixin:hover{
  color:#42c02e;
}
.share a .fa-ellipsis-h:hover{
  color: #c1c1c1;
}
.motai .san{
    position: absolute;
    top: 0;
    left: 75px;
    height: 15px;
    width: 15px;
    transform: rotate(45deg);
    border: 1px solid #b5b5b5;
    border-bottom: none;
    border-right: none;
    background: #fff;
    z-index: 3;
}
 .motai{
    position: absolute;
    left: 40px;
    height: 160px;
    width: 150px;
}
 .motai .content{
    position: absolute;
    bottom: 2px;
    left: 5px;
    height: 150px;
    width: 150px;
    border: 1px solid #b5b5b5;
    background-color: #fff;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 0 2px 8px 2px #b5b5b5;
}
 .motai .content ul{
   font-size: 12px;
}
 .motai .content ul li{
  position: relative;
  z-index: 3;
  height: 29.5px;
  line-height: 29.5px;
  border-radius: 10px;
}
 .motai .content ul li:hover{
   border-radius: 0;
    background-color: #f0f0f0;
}
.motai .content ul li:first-child:hover{
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
}
.motai .content ul li:last-child:hover{
 border-bottom-right-radius: 10px;
 border-bottom-left-radius: 10px;
}

.motai .content ul li i{
 margin-right:10px;
 margin-left: 10px;
 vertical-align: middle;
 font-size: 20px;
}
 .motai .content ul li:nth-child(1) i{
    color: #fec801;
}
 .motai .content ul li:nth-child(2) i{
  color: #00aaec;
}
 .motai .content ul li:nth-child(3) i{
   color: #4460a0;
}
 .motai .content ul li:nth-child(5) i{
  color: #388c26;
}
 .motai .content ul li:nth-child(4) i{
    margin-right:2px;
    color: #fa3f2d;
}
p{
  font-size: 14px;
  color: #969696;
  margin-bottom: 10px;
}
.someBody{
  padding-bottom: 20px!important;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 10px!important;
}
.author .avatar{
  display: inline-block;
    margin-right: 10px;
}
.author .name{
  font-size: 14px;
  color: #2f2f2f;
  display: inline-block;
}
.author .sign{
    padding: 1px 3px;
    margin-left: 5px;
    border-radius: 3px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #969696;
}
.operate span{
  font-size: 13px;
  color: #969696;
  cursor: pointer;
}
.operate span:hover{
  color: #2f2f2f;
}
</style>



