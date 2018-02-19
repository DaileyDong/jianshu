<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4">
          <my-aside></my-aside>
        </div>
        <div class="main col-8">
          <div class="menu">全部投稿请求</div>
          <ul class="push-list">
            <li>
              <nuxt-link to="" class="wrap">
                <div class="all-push">
                  <i class="fa fa-upload"></i>
                </div>
                <div class="name">全部未处理请求</div>
              </nuxt-link>
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
  name: "requests",
    mounted(){
   let dom3=document.querySelector('.aside ul li:nth-of-type(3)');
   dom3.className="asideActive";
   document.querySelector('.nav-list li:nth-of-type(3) a').className="headerActive";
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
.notification .main .push-list li{
  border-top: 1px solid #f0f0f0;
}
.notification .main .push-list .wrap{
  padding: 20px;
  display: block;
}
.notification .main .push-list .all-push{
  position: relative;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  text-align: center;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}
.notification .main .push-list .all-push i{
  margin-top: 14px;
  font-size: 25px;
  color: #ea6f5a;
  display: block;
}
.notification .main .push-list .name{
  display: inline-block;
  font-size: 15px;
  vertical-align: middle;
  max-width: 500px;
}
</style>
