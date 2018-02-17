<template>
  <div>
   <my-header></my-header>
   <div class="setting my-container">
       <div class="row">
           <div class="aside col-4">
            <my-setting></my-setting>
           </div>
           <div class="main col-8">
              <div class="blacklist">
                  <div class="title">
                      你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你。
                  </div>
                  <ul>
                      <li>
                          <nuxt-link to="/u/123">鹏次奥刘</nuxt-link>
                           <a href="javascript:void(0)">从黑名单中移除</a>
                      </li>
                      <li>
                           <nuxt-link to="/u/123">雪莉旺旺</nuxt-link>
                           <a href="javascript:void(0)">从黑名单中移除</a>
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
import MySetting from "~/components/MySetting";
export default {
  name:'basic',
   mounted(){
   let dom1=document.querySelector('.aside ul li:nth-of-type(4)');
   dom1.className="asideActive";
  },
  components:{
      MyHeader,
      MySetting
  }
}
</script>
<style scoped>
.setting .main .blacklist .title{
    font-size: 12px;
    color: #969696;
}
.blacklist ul li{
    border-bottom: 1px solid #f0f0f0;
    font-size: 15px;
    color: #969696;
    padding: 20px 0 20px;
}
.blacklist ul li:hover{
    color: #333;
}
.blacklist ul li a:last-child{
    float: right;
}

</style>
