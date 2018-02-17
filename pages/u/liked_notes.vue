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
                 <div class="title">
                  <nuxt-link to="/u/123" class="name">朱庇特的白银时代</nuxt-link>
                 </div>
                 <div class="info">
                  <ul>
                      <li>
                          <div class="meta-block">
                              <nuxt-link to="/u/123/following">
                              <p>1</p>
                              关注
                              <i class="fa fa-angle-right "></i>
                              </nuxt-link>
                          </div>
                      </li>
                          <li>
                          <div class="meta-block">
                              <nuxt-link to="/u/123/followers">
                              <p>0</p>
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
             </div>
             <div id="outer-container">
                 <ul class="trigger-menu">
                     <li v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index)" >
                        <a href="javascript:void(0)">
                            {{trigger}}
                        </a>
                     </li>
                 </ul>
                 <div id="list-container">
                   <!--喜欢文章列表-->
                  <ul class="nost-list" v-if="like">
                    <li>
                      <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="../../assets/img/user.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">草根女王的简爱</nuxt-link>
                                   <span class="time">前天 15:31</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                          《戏说网恋》
                          </nuxt-link>
                          <p class="abstract">
                            打开视频两两望， 小心堕入千重浪。 烟花易冷江湖上， 人生大事需思量。 露水红颜祸水当， 风花雪月云烟往。 隐姓埋名尽伪装， 甜言蜜语耍计量。 情话连篇暖心房， 海誓山盟指月...
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> 84
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> 5
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> 30
                              </span>
                              <a href="javascript:void(0)" class="cancel">取消喜欢</a>
                          </div>
                      </div>
                    </li>
                    <li class="have-img">
                       <nuxt-link to="/p/123" class="wrap-img">
                       <img src="../../static/shou1.jpg" alt="" >
                       </nuxt-link>
                      <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="../../assets/img/user.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">关土</nuxt-link>
                                   <span class="time">02.07 03:00</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                          此景只应天上有
                          </nuxt-link>
                          <p class="abstract">
                           在岛上工作，每天上下班，坐车坐船至少要花去三个小时，好在“福利”好，每天路上总有惊喜。两周前的一天，我经历的一个惊喜，要是不分享一下，感觉就是犯罪。 那天清晨，坐渡轮上岛。 ...
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> 184
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> 56
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> 730
                              </span>
                              <a href="javascript:void(0)" class="cancel">取消喜欢</a>
                          </div>
                      </div>
                   </li>
                  </ul>
                  <!--关注的专题-->
                   <ul class="user-list" v-if="followed">
                     <li v-for="(note,index) in notes" :key="index" ref="followsProject">
                       <nuxt-link to="/u/123" class="avatar-collection">
                       <img :src="note.src" alt="">
                       </nuxt-link>
                       <div class="info">
                         <nuxt-link to="c/123" class="title">{{note.title}}</nuxt-link>
                         <div class="meta">
                           <nuxt-link to="/u/123">
                           简书
                           </nuxt-link>
                           收录了41887篇文章，1222222人关注
                         </div>
                       </div> 
                       <a href="javascript:void(0)" class="is_follow"  @click="follow_click(index)"  @mouseover="follow_over(index)"  @mouseout="follow_out(index)" >
                         <i class="fa fa-check" ></i>
                         <span :ref="'a'+index">已关注</span>
                       </a>
                     </li>
                   </ul>
                 </div>
             </div>
          </div>
          <div class="col-4 aside clearfix" >
              <div class="title">个人介绍</div>
              <a href="javascript:void(0)" class="function-btn">
                  <i class="fa fa-pencil"></i>
                  编辑
              </a>
              <div class="description">
              </div>
              <ul class="user-dynamic">
                  <li>
                      <nuxt-link to="/u/123/subscription">
                      <i class="fa fa-th-large"></i>
                      <span>我关注的专题/文集/连载</span>
                      </nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="/u/123/liked_notes">
                      <i class="fa fa-heart-o"></i>
                      <span>我喜欢的文章</span>
                      </nuxt-link>
                  </li>
              </ul>
              <!--专题和文集-->
               <div>
                 <div class="title change" >我创造的专题</div>
                 <div class="new-collection-block">
                     <nuxt-link to="/collections/new" class="new-collection-btn">
                     <i class="fa fa-plus"></i>
                     <span>创建一个新专题</span>
                     </nuxt-link>
                 </div>
               </div>
               <div>
                      <div class="title change" >我的文集</div>
                       <ul class="list">
                           <li>
                               <nuxt-link to="/nb/123">
                                 <i class="fa fa-book"></i>
                               </nuxt-link>
                               <nuxt-link to="/nb/123" class="name">
                                日记本
                               </nuxt-link>
                           </li>
                       </ul>
               </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
export default {
  name: "liked_notes",
  data() {
    return {
      like: false,
      followed: false,
      triggers: ["关注的专题/文集/连载 6", "喜欢的文章 4"],
      notes: [
        {
          src: require("../../assets/img/user.jpg"),
          title: "历史"
        },
        {
          src: require("../../assets/img/user.jpg"),
          title: "摄影"
        }
      ],
    };
  },
  methods: {
    dhClick(i) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      if (i == 0) {
        this.followed = true;
        this.like = false;
      } else if (i == 1) {
        this.followed = false;
        this.like = true;
      }
    },
    follow_click(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "关注";
        this.$refs.followsProject[value].lastChild.className = "no_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-plus";
      } else if (this.$refs["a" + value][0].innerHTML == "关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.className = "is_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-check";
      }
    }, 
    follow_over(value) {
      if (this.$refs["a" + value][0].innerHTML == "已关注") {
        this.$refs["a" + value][0].innerHTML = "取消关注";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-times";
      }
    },
    follow_out(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-check";
      }
    }
  },
  mounted() {
    this.like = true;
    this.$refs.triggers[1].className = "trigger_active";
  },
  components: {
    MyHeader
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
.person .main .main-top .info ul p {
  margin-bottom: -3px;
  font-size: 15px;
  color: #333;
}
.person .main .main-top .info ul .meta-block i {
  margin-left: 3px;
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
/************文章列表***************/
.main .nost-list li {
  position: relative;
  width: 100%;
  margin: 0 0 17px;
  padding: 0 2px 17px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.main .nost-list .author {
  margin-bottom: 7px;
  font-size: 13px;
}
.main .nost-list .author .avatar {
  display: inline-block;
  margin-right: 5px;
}
.main .nost-list .author .info {
  display: inline-block;
  vertical-align: middle;
}
.nost-list .author .info span {
  padding-left: 3px;
  color: #969696;
}
.nost-list .content .title {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
}
.nost-list .abstract {
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 24px;
}
.nost-list .meta {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;
}
.nost-list .meta a {
  margin-right: 10px;
}
.nost-list .meta span {
  margin-right: 10px;
}
.nost-list li.have-img {
  min-height: 140px;
}
.nost-list .have-img .wrap-img {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -68px;
  width: 150px;
  height: 120px;
}
.nost-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.nost-list .have-img > div {
  padding-right: 160px;
}
/*****************关注专题*******************/
.user-list .avatar-collection {
  width: 52px;
  height: 52px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-block;
}
.user-list .avatar-collection img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.user-list li {
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.user-list .info {
  vertical-align: middle;
  display: inline-block;
  max-width: 450px;
}
.user-list .info a {
  font-size: 15px;
  font-weight: 700;
  color: #333;
}
.user-list .meta {
  padding-top: 2px;
  font-size: 12px;
  color: #969696;
}
.user-list .meta a {
  margin-right: 3px;
  font-size: 12px;
  font-weight: 400;
  color: #3194d0 !important;
}

.no_follow {
  float: right;
  margin-top: 8px;
  border-color: #42c02e;
  background-color: #42c02e;
  color: #fff !important;
  border-radius: 40px;
  outline: none;
  padding: 5px 20px;
  cursor: pointer;
}
.is_follow {
  float: right;
  outline: none;
  margin-top: 8px;
  background-color: #fff;
  color: #8c8c8c !important;
  font-size: 15px;
  padding: 5px 6px;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
}
.user-list li a > span {
  margin-left: 2px;
}
/********************右侧样式**************************/
.person .aside .title {
  float: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
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
  color: #333 !important;
}
</style>
