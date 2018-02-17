<template>
  <div>
   <my-header></my-header>
   <div class="setting my-container">
       <div class="row">
           <div class="aside col-4">
            <my-setting></my-setting>
           </div>
           <div class="main col-8">
               <img src="../../static/weibo-auth.png" class="weibo-auth-img" alt="">
               <div class="certification">
                   <div class="title">简书新浪微博联合认证</div>
                   <span>简书推荐作者</span>
                   <ul>
                       <li><i class="fa fa-check"></i>简书帐号注册超过 30 天</li>
                       <li><i class="fa fa-minus"></i>简书帐号绑定新浪微博帐号</li>
                       <li><i class="fa fa-check"></i>绑定手机号码</li>
                       <li><i class="fa fa-minus"></i>在简书发表文章字数达到 20000 字</li>
                       <li><i class="fa fa-minus"></i>在简书收获喜欢数达到 2000 个</li>
                   </ul>
               </div>
               <div class="certification">
                         <div class="title">简书新浪微博联合认证</div>
                   <span>简书专题运营者</span>
                   <ul>
                       <li><i class="fa fa-check"></i>简书帐号注册超过 30 天</li>
                       <li><i class="fa fa-minus"></i>简书帐号绑定新浪微博帐号</li>
                       <li><i class="fa fa-check"></i>绑定手机号码</li>
                       <li><i class="fa fa-minus"></i>在简书参与编辑的专题收获订阅总数达到 1000 个</li>
                   </ul>
               </div>
           </div>
       </div>
   </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import MySetting from "~/components/MySetting";
export default {
  name:'basic',
   mounted(){
   let dom1=document.querySelector('.aside ul li:nth-of-type(3)');
   dom1.className="asideActive";
  },
  components:{
      MyHeader,
      MySetting
  }
}
</script>
<style scoped>
.setting .main .weibo-auth-img{
    margin: 0 0 30px -12px;
    width: 450px;
    height: 216px;
}
.setting .main .certification{
    margin-bottom: 40px;
}
.setting .main .certification .title{
    font-size: 15px;
    font-weight: 700;
    display: inline-block;
}
.setting .main .certification span{
    font-size: 15px;
    color: #969696;
    margin: 0 20px 0 6px;
}
.setting .main .certification ul{
    margin: 15px 0!important;
}
.setting .main .certification ul li{
    font-size: 15px;
    line-height: 30px;
}
.setting .main .certification .fa-check{
  margin-right: 5px;
  color: #42c02e;
}
.setting .main .certification .fa-minus{
    margin-right: 5px;
    color: #969696;
}
</style>
