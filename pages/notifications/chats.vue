<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4" >
          <my-aside></my-aside>
        </div>
        <div class="main col-8" >
          <div class="menu">全部简书</div>
          <ul class="jianxin-list ">
            <li class="clearfix">
              <div class="pull-right">
                <span class="time">02.05 11:20</span>
                 <i class="fa fa-angle-down"></i>
              </div>
              <nuxt-link to="/u/123" class="avatar">
              <img src="../../static/89731766ca20.jpg" alt="">
              </nuxt-link>
               <div class="info">
                <nuxt-link to="/u/123" class="name">
                 薛文诚
              </nuxt-link>
              <a href="javascript:void(0)" class="wrap">
                <p>你现在在干嘛？</p>
              </a>
               </div>
            </li>
                <li>
              <div class="pull-right" >
                <span class="time">02.05 11:20</span>
                 <i class="fa fa-angle-down"></i>
              </div>
              <nuxt-link to="/u/123" class="avatar">
              <img src="../../static/89731766ca20.jpg" alt="">
              </nuxt-link>
                <nuxt-link to="/u/123" class="name">
                 薛文诚
              </nuxt-link>
              <a href="javascript:void(0)" class="wrap">
                <p>你现在在干嘛fgsadgfsdgsdgsdf功夫大使馆第三方dsafasdfasdfsaafasd公司的公司大股东是大哥大法官的轨道上 收水电费感受到法国大使馆</p>
              </a>
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
  name: "chats",
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
.notification .main .jianxin-list li{
position: relative;
border-top: 1px solid #f0f0f0;
}
.notification .main .jianxin-list .pull-right{
  margin: 20px 20px 0 0;
  font-size: 13px;
}
.notification .main .jianxin-list .pull-right .time{
  color:#9b9b9b;
}
.notification .main .jianxin-list .pull-right i{
  color: #9b9b9b;
  margin-left: 5px;
  cursor: pointer;
}
.notification .main .jianxin-list .avatar{
 float: left;
 width: 48px;
 height: 48px;
 margin: 20px 10px 20px 20px;
}
.notification .main .jianxin-list .name{
  position:absolute;
  top: 25px;
  font-size: 15px;
}
.notification .main .jianxin-list .wrap{
  display:block;
  padding: 20px 20px 20px 0;
  min-height:80px;
}
.notification .main .jianxin-list p{
  margin-top:28px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

</style>
