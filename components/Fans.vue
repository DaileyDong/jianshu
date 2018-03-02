<template>
  <div>
   <ul class="user-list">
       <li v-for="(user,index) in users" :key="index" ref="followsProject">
          <nuxt-link to="/u/123" class="avatar">
          <img src="~assets/img/user.jpg" alt="">
          </nuxt-link>
          <div class="info">
              <nuxt-link class="name" to="/u/123">{{user.nickname}}</nuxt-link>
              <i :class="user.icon" ref="icons"></i>
              <div class="meta">
                <span>关注 {{user.followNum}}</span>
                <span>粉丝 {{user.fansNum}}</span>
                <span>文章 {{user.articleNum}}</span>
              </div>
              <div class="meta">
                 {{user.it}}
              </div>
          </div>
             <button class="is_follow" @click="follow_click(index)"  @mouseover="follow_over(index)"  @mouseout="follow_out(index)"><i class="fa fa-check"></i>
              <span :ref="'a'+index">已关注</span></button>
       </li>
   </ul>
  </div>
</template>
<script>
export default {
  name: "Fans",
  data() {
    return {
      users:[
          {nickname:'燕公子',icon:'fa fa-venus woman',followNum:456,fansNum:9876788,articleNum:456345843,it:'写了55511字，获得了5582456个喜欢'},
          {nickname:'一笑作春风',icon:'fa fa-mars man',followNum:877,fansNum:9376788,articleNum:35434534,it:'写了55511字，获得了5582456个喜欢'},
          {nickname:'老鹰ly',icon:'fa fa-mars man',followNum:7896,fansNum:76767889,articleNum:43453443,it:'写了55511字，获得了5582456个喜欢'},
          {nickname:'三尺晴',icon:'',followNum:3453,fansNum:6745348,articleNum:7896786,it:'写了55511字，获得了5582456个喜欢'},
      ]
    }
  },
  methods:{
        follow_click(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "关注";
        this.$refs.followsProject[value].lastChild.className = "no_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-plus";
      } else if (this.$refs["a" + value][0].innerHTML == "关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.className = "is_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-check";
      }
    }, 
    follow_over(value) {
      if (this.$refs["a" + value][0].innerHTML == "已关注") {
        this.$refs["a" + value][0].innerHTML = "取消关注";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-times";
      }
    },
    follow_out(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-check";
      }
    },
  }
};
</script>
<style scoped>
.no_follow {
  float: right;
  text-align: center;
  margin-top: 8px;
  font-size: 15px;
  width: 100px;
  border: 1px solid #42c02e;
  background-color: #42c02e;
  color: #fff !important;
  border-radius: 40px;
  outline: none;
  padding: 8px 0px;
  cursor: pointer;
}
.is_follow {
  float: right;
  outline: none;
  margin-top: 8px;
  width: 100px;
  text-align: center;
  background-color: #fff;
  color: #8c8c8c !important;
  font-size: 15px;
  padding: 8px 0px;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
}
button i {
  margin-right: 5px;
}
.user-list li{
   padding-bottom: 20px;
   margin-bottom: 20px;
   border-bottom: 1px solid #f0f0f0;
}
.user-list .avatar{
    width: 52px;
    height: 52px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
}
.user-list .info{
    display: inline-block;
    vertical-align: middle;
}
.user-list .info .name{
    font-weight:700;
    font-size: 15px;
     margin-right: 5px;
}
.user-list .info i{
    font-size: 15px;
}
.user-list .meta{
    font-size: 12px;
    color:#969696;
}
.user-list .meta span{
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #969696;
}
.user-list .meta span:last-child{
    border: none;
}
.man{
    color: #3194d0;
}
.woman{
    color: #ea6f5a;
}
</style>

