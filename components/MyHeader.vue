<template>
  <div>
 <nav class="navbar navbar-default nav-fixed-top">
 <div class=" width-limit">
     <!--logo-->
     <nuxt-link to="/" class="nav-logo" >
         <img src="../assets/img/nav-logo.png"  alt="logo">
     </nuxt-link>
     <!--写文章-->
     <nuxt-link to="/create" class="btn write-btn" >
         <i class="fa fa-paint-brush "></i> 写文章
     </nuxt-link>
     <!--未登录-->
      <nuxt-link to="/sign-up" class="btn sign-up" style="display:none">注册</nuxt-link>
      <nuxt-link to="/sign-in" class="btn sign-in" style="display:none">登录</nuxt-link>
     <!--如果用户登录了，那么显示用户头像-->
     <div  class="user"  @mouseover="userShow=true" @mouseleave="userShow=false">
         <div class="drop-down">
             <nuxt-link to="/users" class="avatar">
             <img src="../assets/img/user.jpg" alt="user">
             </nuxt-link>
         </div>
         <div class="drop-menu" v-show="userShow">
             <ul>
                 <li><nuxt-link to="/u/123">
                 <i class="fa fa-user"></i>我的主页
                 </nuxt-link></li>
                    <li><nuxt-link to="/bookmarks">
                 <i class="fa fa-bookmark"></i>收藏的文章
                 </nuxt-link></li>
                    <li><nuxt-link to="/u/liked_notes">
                 <i class="fa fa-heart"></i>喜欢的文章
                 </nuxt-link></li>
                    <li><nuxt-link to="/settings/basic">
                 <i class="fa fa-cog"></i>设置
                 </nuxt-link></li>
                    <li><nuxt-link to="/">
                 <i class="fa fa-sign-out"></i>退出
                  </nuxt-link></li>
               
             </ul>
         </div>
     </div>
     
     <!--导航-->
     <div class="my-container">
         <ul class="nav-list" ref="nav_refs">
             <li >
             <nuxt-link to="/" >
            <i class="fa fa-compass"></i>
             <span>发现</span>
             </nuxt-link>
             </li>
             <li>
             <nuxt-link to="/subscriptions/timeline">
            <i class="fa fa-book"></i>
             <span>关注</span>
             </nuxt-link>
             </li>
            <li class="notify" @mouseover="userShow2=true" @mouseleave="userShow2=false">
             <nuxt-link to="/notifications/comments">
            <i class="fa fa-bell-o"></i>
             <span>消息</span>
             </nuxt-link>
             <ul class="drop-menu" v-show="userShow2">
                 <li><nuxt-link to="/notifications/comments"><i class="fa fa-comment-o"></i><span>评论</span></nuxt-link></li>
                 <li><nuxt-link to="/notifications/chats"><i class="fa fa-envelope-o"></i><span>简信</span></nuxt-link></li>
                 <li><nuxt-link to="/notifications/requests"><i class="fa fa-upload"></i><span>投稿要求</span></nuxt-link></li>
                 <li><nuxt-link to="/notifications/likes"><i class="fa fa-heart-o"></i><span>喜欢和赞</span></nuxt-link></li>
                 <li><nuxt-link to="/notifications/follows"><i class="fa fa-user-plus"></i><span>关注</span></nuxt-link></li>
             </ul>
             </li>

            <li class="search">
                <form action="" method="post">
                    <input type="text" placeholder="搜索" @focus="bgShow=true" @blur="bgShow=false">
                    <nuxt-link to="/search" class="search-btn" :class="{active:bgShow}">
                      <i class="fa fa-search"></i>
                    </nuxt-link>
                </form>
            </li>
         </ul>
     </div>
 </div>
 </nav>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      userShow: false,
      userShow2:false,
      bgShow:false,
    };
  },

};
</script>
<style scoped>
    nav{
        width: 100%;
        height: 56px;
     }
    .navbar{
        padding: 0;
        border-bottom: 1px solid #e7e7e7;
        margin-bottom: 20px;
        background-color: white;
     }
    .nav-fixed-top{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        /*解决fixed抖动问题*/
        -webkit-transform: translateZ(0);
     }
    nav .width-limit{
        min-width:768px;
        width:1440px;
        margin: 0 auto;
     }
    nav .nav-logo{
        float: left;
        height: 56px;
        padding: 0;
     }
    nav .nav-logo img{
        height: 100%;
     }
    nav a.write-btn{
        float: right;
        width: 100px;
        height: 40px;
        margin:7px 15px 0;
        line-height: 24px;
        font-size: 15px;
        background: #ea6f5a;
        color: #fff!important;
        border-radius: 20px;
     }
    nav a.sign-up{
        float: right;
        width: 80px;
        height: 40px;
        color: #ea6f5a!important;
        margin: 7px 6px 0 10px;
        font-size: 15px;
        line-height: 24px;
        border: 1px solid #ea6f5a;
        border-radius: 20px;
     }
    nav a.sign-up:hover{
        background-color: #fef7f6;
     }
    nav a.sign-in{
        float: right;
        width: 80px;
        height: 40px;
        color: #969696!important;
        margin: 7px 6px 0 0;
        font-size: 15px;
        line-height: 24px;
     }
    nav .user {
        float:right;
        position:relative;
     }
    nav .user .avatar {
        position:relative;
        width:40px;
        height:40px;
        display:block;
        margin:8px 28px 8px 20px;
     }
    nav .user:hover {
        background:#f5f5f5;
     }
    nav .user .avatar::before {
        content: "";
        position: absolute;
        top: 18px;
        right: -14px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #999;
     }
    nav .user .avatar img {
        width:100%;
        height:100%;
        border-radius: 50%;
        border:1px solid #ccc;
     }
    nav .user .drop-menu {
        position:absolute;
        left:0;
        min-width:160px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        font-size:15px;
        z-index:999;
        background-color: #fff;
     }
    nav .user .drop-menu ul {
        padding:10px 0;
        margin:0;
     }
    nav .user .drop-menu ul li a {
        padding:10px 20px;
        display:block;
     }
    nav .user .drop-menu ul li a:hover {
        background:#f5f5f5;
     }
    nav .user .drop-menu ul li i {
        margin-right:15px;
        color:#ea6f5a;
        font-size:18px;
     }
    nav .nav-list::after{
        content: "";
        height: 0;
        display: block;
        clear: both;
        visibility:hidden;
     }
    nav .nav-list {
        zoom:1;
        padding: 0!important;
        margin: 0 -15px!important;
     }
    nav .nav-list>li {
        float:left;
        margin-right:10px;
     }
 
    nav .nav-list>li:hover {
        background:#f5f5f5;
     }
    nav .nav-list .form:hover{
        background: none;
     }
    nav .nav-list>li>a {
        display:block;
        height:55px;
        padding:15px;
        font-size:17px;
     }
    nav .nav-list>li>a>i {
        font-size:20px;
        margin-right:7px;
        text-align:center;
        margin-top: 5px;
     }
     nav .nav-list .notify{
       position: relative;
     }
    nav .nav-list .notify .drop-menu{
        position: absolute;
        left: 0;
        top: 56px;
        min-width:160px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        font-size:15px;
         z-index:999;
        background-color: #fff;
     }
    nav .nav-list .notify .drop-menu li a {
        padding:10px 20px;
        display:block;
      }
    nav .nav-list .notify .drop-menu li a:hover {
        background:#f5f5f5;
      }
    nav  .nav-list .notify .drop-menu li a i {
        margin-right:15px;
        color:#ea6f5a;
        font-size:18px;
     }
    nav .nav-list .search form input:focus{
        width: 320px;
     }
    nav .nav-list .search:hover{
         background: #fff;
     }
    nav .nav-list .search form{
        margin-top: 10px;
        position: relative;
    }
    nav .nav-list .search form a.search-btn{
        display: block;
        position: absolute;
        right: 7px;
        top: 4px;
        width: 30px;
        height: 30px;

     }
    nav .nav-list .search form input{
        width: 240px;
        height: 38px;
        border: none;
        font-size: 15px;
        background-color: #eee;
        border-radius: 20px;
        padding:0 30px 0 20px;
        transition:width .4s ease-in;
    }
    nav .nav-list .search form a.active{
        background: #969696;
        border-radius: 50%;
        color: #fff!important;
    }
    nav .nav-list .search form a.search-btn i{
        position: absolute;
        right:6px;
        top:7px;
        font-size: 18px;
    }
    @media (max-width:1440px) {
        nav .nav-list>li>a i {
            display:none;
        }
        nav .nav-list .search form input{
           width: 150px;
        }
        nav .nav-list .search form input:focus{
            width: 240px;
        }
    }
    @media (max-width:1080px) {
        nav .nav-list>li>a i {
            display:block;
        }
        nav .nav-list>li>a span {
            display:none;
        }
           nav .nav-list .search form input{
           width: 150px;
        }
            nav .nav-list .search form input:focus{
            width: 150px;
        }
    }
    @media (max-width:786px){
      nav .nav-list{
            display: none;
        }
    }
</style>
