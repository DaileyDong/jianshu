<template>
<div class="error">
    <nuxt-link class="logo" to="/">
    <img src="../assets/img/404-logo.png" alt="logo">
    </nuxt-link>
     <div class="container">
          <div class="photo">
      <img src="../assets/img/404.gif" alt="404">
    </div>
     <div class="msg">
           <h4>您要找的页面不存在！</h4>
    <h6>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</h6>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
         返回 [简书] 首页
    </nuxt-link>
     </div>
     </div>
</div>


</template>
<script>
export default {
  props: ["error"]
};
</script>

<style scoped>

.logo img {
  position: relative;
  top: 50px;
  margin-left: 50px;
  width: 300px;
}
.container{
  position: relative;
    top: 20px;
  text-align: center;
}
.photo {
  margin: 50px auto 0;
  width:700px;
  box-sizing: border-box;
  text-align: center;
}
.photo img{
  width:100%;
}
h6 {
  margin: 30px;
  font-size: 14px;
}
.button {
  margin: 5px auto;
  border-radius: 40px;
  font-size: 15px;
  color: #fff !important;
  width: 200px;
  padding: 13px;
  background-color: #42c02e;
}
@media (max-width:768px) {
  .logo{
    display: none;
  }
  .photo{
      width:330px;
  }
}
</style>
