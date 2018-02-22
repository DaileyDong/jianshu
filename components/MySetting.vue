<template>
<div>
     <ul>
      <li v-for="(setting,index) in settings" :key="index" ref="myset">
        <nuxt-link :to="setting.url">
        <div class="setting-icon">
         <i :class="setting.icon"></i>
        </div>
        <span>{{setting.title}}</span>
         </nuxt-link>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    name:'MySetting',
      data(){
      return{
          settings:[
              {url:'/settings/basic',icon:'fa fa-list-ul',title:'基础设置'},
              {url:'/settings/profile',icon:'fa fa-address-book-o',title:'个人资料'},
              {url:'/settings/weibo-auth',icon:'fa fa-lightbulb-o',title:'微博认证'},
              {url:'/settings/blacklist',icon:'fa fa-ban',title:'黑名单'},
              {url:'/settings/reward-setting',icon:'fa fa-yen',title:'赞赏设置'},
              {url:'/settings/misc',icon:'fa fa-cog',title:'账号管理'},
          ]
      }
  },
};
</script>
<style scoped>
 li{
    line-height: 20px;
}
 li:hover{
    background-color: #f0f0f0;
    border-radius: 4px;
}
a{
    padding: 10px 15px;
    font-size: 15px;
    display:block;
}
.setting-icon{
    margin-right: 15px;
    width: 32px;
    height: 32px;
    text-align: center;
    color: #fff;
    background-color: #a0a0a0;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
}
.setting-icon i{
    margin: 8px 0 0 1px;
    font-size: 18px;
    display: block;
}
span{
    vertical-align: middle;
}
</style>
