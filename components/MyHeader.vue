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
     <!--如果用户登录了，那么显示用户头像-->
     <div class="user"  @mouseover="userShow=true" @mouseleave="userShow=false">
         <div class="drop-down">
             <nuxt-link to="/users" class="avatar">
             <img src="../assets/img/user.jpg" alt="user">
             </nuxt-link>
         </div>
         <div class="drop-menu" v-show="userShow">
             <ul>
                 <li><nuxt-link to="/">
                 <i class="fa fa-user"></i>我的主页
                 </nuxt-link></li>
                    <li><nuxt-link to="/">
                 <i class="fa fa-bookmark"></i>收藏的文章
                 </nuxt-link></li>
                    <li><nuxt-link to="/">
                 <i class="fa fa-heart"></i>喜欢的文章
                 </nuxt-link></li>
                    <li><nuxt-link to="/">
                 <i class="fa fa-cog"></i>设置
                 </nuxt-link></li>
                    <li><nuxt-link to="/">
                 <i class="fa fa-sign-out"></i>退出
                 </nuxt-link></li>
               
             </ul>
         </div>
     </div>
     <!--导航-->
     <div class="container">
         <ul class="nav-list">
             <li class="active">
             <nuxt-link to="/" >
            <i class="fa fa-compass"></i>
             <span>发现</span>
             </nuxt-link>
             </li>
                 <li>
             <nuxt-link to="/">
            <i class="fa fa-book"></i>
             <span>关注</span>
             </nuxt-link>
             </li>
                 <li>
             <nuxt-link to="/">
            <i class="fa fa-bell-o"></i>
             <span>消息</span>
             </nuxt-link>
             </li>
             <li>
             <form action="" method="post">
                 <input type="text" class="search-input" placeholder="搜索" @focus="getData" @blur="toData">
                 <i class="fa fa-search"></i>
                 <div id="navbar-search-tips"></div>
             </form>
            </li>
         </ul>
     </div>
 </div>
 </nav>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "MyHeader",
  data() {
    return {
      userShow: false
    };
  },
  methods:{
      getData(){
        $('.search-input').removeClass('outActive')
        $('.search-input').addClass('searchActive')
        $(' nav .nav-list li form i').addClass('searchIcon');
      },
      toData(){
         $('.search-input').removeClass('searchActive')
         $(' nav .nav-list li form i').removeClass('searchIcon');
         $(".search-input").addClass('outActive');
       
      }
  }
};
</script>
<style scoped>
    nav {
        width: 100%;
        height: 56px;
        }

    .navbar {
        padding: 0;
        border-bottom: 1px solid #e7e7e7;
        margin-bottom: 20px;
        background-color: white;
     }

    .nav-fixed-top {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
     }

    nav .width-limit {
        min-width: 768px;
        width: 1440px;
        margin: 20px auto 0;
     }

    nav .nav-logo {
        float: left;
        height: 56px;
        padding: 0;
     }

    nav .nav-logo img {
        height: 100%;
     }

    nav a.write-btn {
        float: right;
        width: 100px;
        height: 40px;
        margin: 7px 15px 0;
        line-height: 24px;
        font-size: 16px;
        background: #ea6f5a;
        color: #fff!important;
        border-radius: 20px;
     }

    nav a.write-btn:hover {
        background-color: #ec6149!important;
     }
    nav .user {
        position: relative;
        float: right;
     }
    nav .user:hover {
        background: #f5f5f5;
     }
    nav .user .avatar {
        position: relative;
        width: 40px;
        height: 40px;
        display: block;
        margin: 8px 28px 8px 20px;
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
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 1px solid #ccc;
     }

    nav .user .drop-menu {
        min-width: 160px;
        position: absolute;
        left: 0;
        box-shadow: 0 0 8px rgba(0, 0, 0, .1);
        font-size: 15px;
     }

    nav .user .drop-menu ul {
        padding: 10px 0;
        margin: 0;
     }

    nav .user .drop-menu ul li a {
        padding: 10px 20px;
        display: block;
     }

    nav .user .drop-menu ul li a:hover {
        background: #f5f5f5;
     }

    nav .user .drop-menu ul li i {
        margin-right: 15px;
        color: #ea6f5a;
        font-size: 18px;
     }

    nav .nav-list {
       overflow: hidden;
        zoom: 1;
     }

    nav .nav-list li {
        float: left;
     }

    nav .nav-list li a {
        display: block;
        height: 56px;
        padding:15px;
        margin-right: 10px;
        font-size: 17px;
     }
    nav .nav-list li a i{
        font-size: 22px;
        margin-right: 7px;
     }
    nav .nav-list li.active{
        color: #ea6f5a;
     }
    nav .nav-list li form{
        position: relative;
        height: 56px;
        line-height:50px;
     }
    nav .nav-list li form .search-input{
       border-radius: 20px;
       border:1px solid #eee;
       height:38px;
       width:160px;
       line-height: 38px;
       font-size: 14px;
       padding: 5px 15px; 
       background-color: #eee;
     }
    nav .nav-list li form i{
         position: absolute;
         top: 12px;
         padding: 5px;
         right:8px;
     }
    .searchActive{
         animation:bh .5s ease forwards;
     }
    .outActive{
         animation: fh .5s ease forwards;
     }
    .searchIcon{
         color: #fff;
         background: #969696;
        border-radius: 50%;
     }
    @keyframes bh {
         from{
             width:160px;
         }
         to{
             width: 250px;
         }
     }
    @keyframes fh {
         from{
             width:250px;
         }
         to{
             width: 160px;
         }
     }
    @media (max-width:1440px){
        nav .nav-list li a i {
            display: none;
        }
     }
    @media (max-width:1080px){
        nav .nav-list li a i {
            display: block;
        }
        nav .nav-list li a span {
            display: none;
        }
     }

</style>
