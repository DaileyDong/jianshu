<template>
  <div>
    <div class="comment-list" id="comment-list">
      <!--提交的留言表单-->
      <form class="new-comment">
        <nuxt-link to="/u/123" class="avatar">
        <img src="../assets/img/user.jpg" alt="">
        </nuxt-link>
        <textarea placeholder="写下你的评论..." @focus="send=true" v-model="value"></textarea>
          <transition name="fade">
          <div class="write-function-block clearfix" v-if="send">
          <div class="emoji-modal-wrap">
          <a href="javascript:void(0)" class="emoji" @click="showEmoji=!showEmoji">
             <i class="fa fa-smile-o"></i>
          </a>
            <transition name="fade">
            <!--图标-->
           <div class="emoji-modal arrow-top" id="emoji-modal" v-if="showEmoji">
             <vue-emoji @select="selectEmoji"></vue-emoji>
           </div>
            </transition>
          </div>
          <div class="hint">Ctrl+Enter 发表</div>
          <a class="btn btn-send" @click="sendData">发送</a>
          <a class="cancel" @click="send=false">取消</a>
        </div>
          </transition>
      </form>
      <!--留言列表-->
         <div class="normal-comment-list" id="normal-comment-list">
            <div class="top-title">
              <span>54条评论</span>
              <a href="javascript:void(0)" class="author-only">只看作者</a>
              <div class="pull-right" ref="sorts">
                <a href="javascript:void(0)" class="active" >按喜欢排序</a>
                  <a href="javascript:void(0)" >按时间正序</a>
                    <a href="javascript:void(0)">按时间倒序</a>
              </div>
            </div>
             <!--留言动画-->
          <div class="comment-placeholder" style="display:none">
  					<div class="author">
  							<div class="avatar"></div>
  							<div class="info">
  								<div class="name"></div>
  								<div class="meta"></div>
  							</div>
  					</div>
  					<div class="title"></div>
  					<div class="title animated-delay "></div>
  					<div class="tool-group">
  						<i class="fa fa-thumbs-up"></i>
  						<div class="zan"></div>
  						<i class="fa fa-comment "></i>
  						<div class="zan"></div>
  					</div>
  			  </div>
          <div class="comment" :id="'comment-'+comment.id" v-for="(comment,index) in comments" :key="index">
               <div class="comment-content">
                 <div class="author">
                      <nuxt-link to="/u/123" class="avatar">
                      <img :src="comment.user.avatar" alt="">
                      </nuxt-link>
                   <div class="info">
                     <nuxt-link to="/u/123" class="name">
                     {{comment.user.nickname}}
                     </nuxt-link>
                     <div class="meta">
                       <span>{{comment.floor}}楼·{{comment.created_at |formDate}}</span>
                     </div>
                   </div>
                 </div>
                 <div class="comment-wrap"></div>
               </div>
               <div class="sub-comment-list"></div>
          </div>

  	</div>

    </div>
  </div>
</template>
<script>
import vueEmoji from '~/components/VueEmoji'
export default {
  name: "myComment",
  data() {
    return {
      send: false,
      showEmoji: false,
      value:'',
      comments:[
        {
          id:19979655,
          floor:2,
          liked:false,
          likes_count:0,
          note_id:23153564,
          compiled_content:"坚持，加油！",
          children_count:1,
          created_at:"2018-01-26T14:27:50.000+08:00",
          user_id:4360841,
          user:{
            avatar:"/1d2d4fe929e5.jpg",
            id:4360841,
            is_author:false,
            nickname:"呵呵哒哒呵1024",
            badge:null,
            slug:"fd1f8978b326"
               },
          children:[
            {id:19979746,
            compiled_content:"<a href='/users/fd1f8978b326' class='maleskine-author' target='_blank' data-user-slug='fd1f8978b326'>@呵呵哒哒呵1024</a> 谢谢，一起加油<img src='//static.jianshu.io/assets/emojis/blush.png' alt=':blush:' title=':blush:' class='emoji' width='20' height='20'>",
            created_at:"2018-01-26T14:31:22.000+08:00",
            parent_id:19979655,
            user_id:3663279,
            user:{
              id:3663279,
              nickname:"清仁",
                 }}
                   ]
        },
        {
          id:20007534,
          floor:3,
          liked:false,
          likes_count:0,
          note_id:23153564,
          compiled_content:"大佬，你现在在哪里工作呀",
          children_count:6,
          created_at:"2018-01-27T10:18:23.000+08:00",
          children:[
           {
           compiled_content:'<a href="/users/55ad42207ef6" class="maleskine-author" target="_blank" data-user-slug="55ad42207ef6">@LinxsCoding</a> 一家b轮的互联网做金融的公司。自己对金融投资也比较有兴趣，就打算在这个行业里沉淀了。朋友一起加油吧',
           created_at:"2018-01-27T10:58:42.000+08:00",
           id:20008821,
           parent_id:20007534,
           user_id:3663279,
           user:{
                 id:3663279,
                 nickname:"清仁",
                 }
           },
           {
            compiled_content:'<a href="/users/da5c47edb40d" class="maleskine-author" target="_blank" data-user-slug="da5c47edb40d">@_清泉_</a> 杭州还是北京？',
            created_at:"2018-01-27T11:06:53.000+08:00",
            id:20009062,
            parent_id:20007534,
            user_id:2107853,
            user:{
              id:2107853,
              nickname:"LinxsCoding",
              slug:"55ad42207ef6"
                 }
           },
           {
            compiled_content:'<a href="/users/55ad42207ef6" class="maleskine-author" target="_blank" data-user-slug="55ad42207ef6">@LinxsCoding</a> 北京',
            created_at:"2018-01-27T11:13:43.000+08:00",
            id:20009275,
            parent_id:20007534,
            user_id:3663279,
            user:{
                  id:3663279,
                  nickname:"清仁",
                 }
           }],

          user_id:2107853,
          user:{
            avatar:"/89731766ca20.jpg",
            id:2107853,
            is_author:false,
            nickname:"LinxsCoding",
            badge:null,
            slug:"55ad42207ef6"
               }
        },
        {
          id:20051467,
          floor:4,
          liked:false,
          likes_count:0,
          note_id:23153564,
          compiled_content:"坚持 加油 程序员中最会写文章就数你了 哈哈 还以为你在杭州勒 看评论你在帝都了 不然。。",
          children_count:2,
          created_at:"2018-01-28T15:43:19.000+08:00",
          children:[
            {
             id:20052501,
             parent_id:20051467,
             created_at:"2018-01-28T16:21:25.000+08:00",
             compiled_content:'谢谢鼓励<img src="//static.jianshu.io/assets/emojis/blush.png" alt=":blush:" title=":blush:" class="emoji" width="20" height="20">',
             user:[{
             id:3663279,
             nickname:"清仁",
             }],
             user_id:3663279,
             },
           {
            id:20153718,
            created_at:"2018-01-31T12:37:06.000+08:00",
            parent_id:20051467,
            user_id:1828346,
            user:{
              id:1828346,
              nickname:"calary",
              slug:"59392c33df1f"
            },
            compiled_content:"不然你就打算做他女朋友了对不对",
           }
           ],
          user_id:653128,
          user:{
            avatar:"/13-394c31a9cb492fcb39c27422ca7d2815.jpg",
            id:653128,
            is_author:false,
            nickname:"蓝雨Min",
            badge:null,
            slug:"dbf16d07498e"
          }
        },
      ]
    };
  },
  methods:{
    selectEmoji(code){
       this.showEmoji=false;
       this.value+=code;
    },
    sendData(){
    
    },
   is_sort(){
   
   }
  },
  components:{
    vueEmoji
  },
  filters:{
    formDate(value){
      let now=new Date(value);
      let year=now.getFullYear();
      let month=(now.getMonth()+1).toString().padStart(2,0);
      let date=now.getDate().toString().padStart(2,0);
      let hour=now.getHours().toString().padStart(2,0);
      let minute=now.getMinutes().toString().padStart(2,0);
      return `${year}.${month}.${date} ${hour}:${minute}`
    }
  }
  
};
</script>
<style scoped>
.note .post .comment-list {
  padding-top: 20px;
}
.note .post .comment-list .new-comment {
  position: relative;
  margin-left: 48px;
  margin-bottom: 20px;
}
.note .post .comment-list .avatar {
  width: 38px;
  height: 38px;
  display: inline-block;
  margin-right: 5px;
}
.note .post .comment-list .new-comment .avatar {
  position: absolute;
  left: -48px;
}
.note .post .comment-list .new-comment textarea {
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: inline-block;
  outline-style: none;
  /*禁止缩放*/
  resize: none;
  vertical-align: top;
  background-color: #f8f8f8;
}
.note .post .comment-list .new-comment .emoji-modal-wrap {
  position: relative;
}
.note .post .comment-list .new-comment .emoji {
  float: left;
  margin-top: 14px;
}
.note .post .comment-list .new-comment .emoji i {
  color: #969696;
  font-size: 25px;
}
.note .post .comment-list .new-comment .hint {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: #969696;
}
.note .post .comment-list .new-comment .cancel {
  float: right;
  font-size: 16px;
  margin: 18px 30px 0 0;
  color: #969696 !important;
  cursor: pointer;
}
.note .post .comment-list .new-comment .btn-send {
  float: right;
  width: 78px;
  margin: 10px 0;
  padding: 8px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: #fff !important;
  cursor: pointer;
  outline: none;
  display: block;
  background-color: #42c02e;
}
.note .post .comment-list .new-comment .emoji i:hover,
.note .post .comment-list .new-comment .cancel:hover {
  color: #2f2f2f !important;
}
.note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal {
  position: absolute;
  top: 50px;
  left: -48px;
  width: 402px;
  padding: 10px;
  height: 210px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  z-index: 10001;
}
.arrow-top::before {
  position: absolute;
  left: 49px;
  top: -1px;
  content: "";
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-left: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -5%, 0);
  -webkit-transform: translate3d(0, -5%, 0);
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
.note .post .comment-list .normal-comment-list{
  margin-top: 30px;
}
.note .post .comment-list .top-title{
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.note .post .comment-list .top-title span{
  font-size: 17px;
  font-weight: 700;
}
.note .post .comment-list .top-title .author-only{
  font-size: 12px;
  padding: 4px 8px;
  margin-left: 10px;
  color: #969696!important;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
.note .post .comment-list .top-title .pull-right{
  float: right;
}
.note .post .comment-list .top-title .pull-right a{
  margin-left: 10px;
  font-size: 12px;
  color: #969696!important;
}
.note .post .comment-list .top-title .pull-right a.active{
  color: #2f2f2f!important;
}
.note .post .comment-list .comment{
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #f0f0f0;
}
.note .post .comment-list .info{
  display: inline-block;
  vertical-align: middle;
}
.note .post .comment-list .info .name{
  font-size: 15px;
}
.note .post .comment-list .info .meta{
  font-size: 12px;
  color: #969696;
}
</style>
