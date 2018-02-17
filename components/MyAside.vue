<template>
  <div>
    <ul>
        <li v-for="(nav,index) in navs" :key="index" ref="aside_ref">
            <nuxt-link :to="nav.url"><i :class="nav.icon"></i><span>{{nav.title}}</span></nuxt-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'myAside',
    data() {
    return {
      navs: [
        {url:"/notifications/comments",icon: "fa fa-comment-o", title: "评论" },
        {url:"/notifications/chats",icon: "fa fa-envelope-o", title: "简信" },
        {url:"/notifications/requests",icon: "fa fa-upload", title: "投稿要求" },
        {url:"/notifications/likes",icon: "fa fa-heart-o", title: "喜欢和赞" },
        {url:"/notifications/follows",icon: "fa fa-user-plus", title: "关注" }
      ]
    };
},

}
</script>
<style scoped>
.notification .aside ul li{
  line-height: 20px;
}
.notification .aside ul li.active a{
  background-color: #f0f0f0;
  border-radius: 4px;
}
.notification .aside ul a{
  height: auto;
  padding: 10px 25px;
  line-height: 30px;
  display: block;
}
.notification .aside ul i{
 margin-right: 15px;
 font-size: 24px;
 color: #ea6f5a;
 vertical-align: middle;
}
.notification .aside ul li:hover{
  background-color: #f0f0f0;
  border-radius: 4px;
}

.notification .aside ul span{
  font-size: 15px;
  vertical-align: middle;
}
</style>
