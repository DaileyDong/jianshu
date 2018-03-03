<template>
  <div class="recommend">
   <ul class="user-list">
       <li v-for="(user,index) in users" :key="index" ref="followsProject">
          <nuxt-link to="/u/123" class="avatar">
          <img src="~assets/img/user.jpg" alt="">
          </nuxt-link>
          <div class="info">
              <nuxt-link class="name" to="/u/123">{{user.nickname}}</nuxt-link>
              <div class="meta">
                <span>{{user.jianjie}}</span>
              </div>
              <div class="metas">
                 <i class="fa fa-file-text"></i>
                 {{user.it}}
                 <i class="fa fa-file-text"></i>
                 {{user.its}}
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
  name: "FollowUsers",
  data() {
    return {
      users:[
          {nickname:'水清衣',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
          {nickname:'去年的茶',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
          {nickname:'燕公子',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
          {nickname:'一笑作春风',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
          {nickname:'老鹰ly',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
          {nickname:'三尺晴',jianjie:'曾在千亿级A股上市公司任IT高管，现任某创业公司合伙人兼CTO，...',it:'写在简书推出付费订阅之...',its:'2018春节自驾游云南...'},
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
           this.$refs.followsProject[value].lastChild.className = "is_follow btnBgColor";
        this.$refs.followsProject[value].lastChild.firstChild.className ="fa fa-times";
      }
    },
    follow_out(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
           this.$refs.followsProject[value].lastChild.className = "is_follow";
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
    margin-right: 10px;
    vertical-align: top;
}
.user-list .info{
    display: inline-block;
}
.user-list .info .name{
   display:inline-block;
   vertical-align: top;
    font-weight:700;
    font-size: 15px;
    margin-right: 5px;
}
.user-list .info i{
    font-size: 12px;
}
.recommend .user-list .meta{
    font-size: 12px;
    max-width: 380px;
    color:#969696;
    margin-top: -5px;
}
.recommend .user-list .metas{
 font-size: 12px;
 width: 380px;
 color: #969696;
}
.recommend .user-list .metas i:last-child{
  margin-left: 5px;
}
.btnBgColor{
  background-color: #f8f8f8;
}
</style>


