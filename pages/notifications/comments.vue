<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4" >
          <my-aside></my-aside>
        </div>
        <div class="main col-8">
          <div class="menu">收到的评论</div>
          <ul class="comment-list">
            <li v-for="(notification,index) in notifications" :key="index">
              <nuxt-link to="/u/123" class="avatar">
              <img :src="notification.source.user.avatar_source" alt="">
              </nuxt-link>
              <div class="info">
                  <nuxt-link to="/u/123" class="user">{{notification.source.user.nickname}}</nuxt-link>
                  <span class="comment-slogan">在文章</span>
                  <nuxt-link to="/p/123">《{{notification.source.note.title}}》</nuxt-link>
                   <span class="comment-slogan">的评论中提到了你</span>
                <div class="time">{{notification.created_at | formateDate}}</div>
              </div>
              <p v-html="notification.source.compiled_content">
              </p>
              <div class="meta">
                <a href="javascript:void(0)" class="function-btn">
                  <i class="fa fa-comment-o"></i>
                  <span>回复</span>
                </a>
                 <nuxt-link to="/p/123" class="function-btn">
                 <i class="fa fa-share"></i>
                 <span>查看对话</span>
                 </nuxt-link>
              </div>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import MyAside from "~/components/MyAside";
export default {
  name: "comments",
  data() {
    return {
      activeIndex: [],
      emojiIndex: [],
      notifications:[
        {
          id:230306867,
          is_read:true,
          created_at:"2018-02-05T15:32:01.000+08:00",
          source:{
            id:20332501,
            user_id:3106924,
            parent_id:20152283,
            compiled_content:'<a href="/users/b673ad6d3088" class="maleskine-author" target="_blank" data-user-slug="b673ad6d3088">@朱庇特的白银时代</a> 谢谢',
            note:{
              id:23397978,
              title:"冬季里看花",
            },
            user:{
              id:3106924,
              nickname:"月儿上山了",
              avatar_source:"/1d2d4fe929e5.jpg",
            },
          },
        },

         {
          id:230306867,
          is_read:true,
          created_at:"2018-02-07T10:09:01.000+08:00",
          source:{
            id:20332501,
            user_id:3106924,
            parent_id:20152283,
            compiled_content:'<a href="/users/b673ad6d3088" class="maleskine-author" target="_blank" data-user-slug="b673ad6d3088">@朱庇特的白银时代</a> 非常赞同',
            note:{
              id:23397978,
              title:"神秘巨星",
            },
            user:{
              id:3106924,
              nickname:"薛文诚",
              avatar_source:"/89731766ca20.jpg",
            },
          },
        },
      ]
    };
  },
  mounted(){
   let dom1=document.querySelector('.aside ul li:nth-of-type(1)');
   dom1.className="asideActive";
  },
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style>

.notification .aside {
  margin-top: 30px;
  padding: 0 0 30px;
  max-width: 280px;
  overflow: auto;
}
.notification .main {
  margin-top: 30px;
  padding-left: 30px;
}
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .comment-list li {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
}
.notification .main .comment-list .avatar {
  width: 40px;
  height: 40px;
  display: inline-block;
}
.notification .main .comment-list .info {
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
  vertical-align: middle;
}
.notification .main .comment-list .info .user {
  margin-right: 5px;
  color: #333 !important;
}
.notification .main .comment-list .info a {
  color: #3194d0 !important;
}
.notification .main .comment-list .info .time {
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}
.notification .main .comment-list p {
  margin-top: 10px;
  font-size: 15px;
}
.notification .main .comment-list p .maleskine-author {
  color: #3194d0 !important;
}
.notification .main .comment-list .meta {
  margin-top: 10px;
  height: 20px;
}
.notification .main .comment-list .meta .function-btn {
  float: left;
  margin-right: 30px;
  font-size: 13px;
  color: #969696 !important;
}
.notification .main .comment-list .meta .function-btn i {
  margin-right: 5px;
  font-size: 15px;
  vertical-align: middle;
}
.notification .main .comment-list .meta .function-btn span{
  vertical-align: middle;
}
</style>

