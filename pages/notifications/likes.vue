<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4">
          <my-aside></my-aside>
        </div>
        <div class="main col-8">
          <div class="menu">收到的喜欢和赞</div>
          <!--没有内容-->
          <div class="find-nothing" v-if="false">
            <img src="../../static/no.png" alt="">
            <div>这里还木有内容哦~</div>
          </div>
          <!--有内容-->
           <ul class="like-list">
             <li>
               <nuxt-link to="/u/123" class="avatar">
               <img src="../../static/89731766ca20.jpg" alt="">
               </nuxt-link>
                <div class="info">
                 <nuxt-link to="/u/123" class="user">
                 薛文诚
                 </nuxt-link>
                 <span>喜欢了你的文章</span>
                 <a href="javascript:void(0)">《使用简书》</a>
                 <div class="time">2018.02.05 12:13</div>
               </div>
             </li>
              <li>
               <nuxt-link to="/u/123" class="avatar">
               <img src="../../static/89731766ca20.jpg" alt="">
               </nuxt-link>
                <div class="info">
                 <nuxt-link to="/u/123" class="user">
                 薛文诚
                 </nuxt-link>
                 <span>赞了你的文章</span>
                 <a href="javascript:void(0)"> 测试评论</a>
                 <div class="time">2018.02.05 12:13</div>
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
import MyAside from '~/components/MyAside';
export default {
  name: "likes",
    mounted(){
   let dom1=document.querySelector('.aside ul li:nth-of-type(4)');
   dom1.className="asideActive";
  },
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style scoped>
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
.notification .main .find-nothing{
  margin-top: 150px;
  text-align: center;
}
.notification .main .find-nothing img{
  width: 100px;
  vertical-align: middle;
}
.notification .main .find-nothing div{
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .like-list li{
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  line-height: 20px;
}
.notification .main .like-list .avatar{
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 5px;
}
.notification .main .like-list .info{
  display: inline-block;
  vertical-align: middle;
}
.notification .main .like-list .info .user{
  margin: 0 5px 0 0;
  color: #333!important;
}
.notification .main .like-list .info a{
  color: #3194d0!important;
}
.notification .main .like-list .time{
  margin-top: 2px;
  font-size: 12px;
  color:#969696;
}
</style>
