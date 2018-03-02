<template>
  <div id="list-container">
                   <!--关注的专题-->
                   <ul class="user-list">
                     <li v-for="(note,index) in notes" :key="index" ref="followsProject">
                       <nuxt-link to="/u/123" class="avatar-collection">
                       <img :src="note.src" alt="">
                       </nuxt-link>
                       <div class="info">
                         <nuxt-link to="c/123" class="title">{{note.title}}</nuxt-link>
                         <div class="meta">
                           <nuxt-link to="/u/123">
                           简书
                           </nuxt-link>
                           收录了41887篇文章，1222222人关注
                         </div>
                       </div> 
                       <a href="javascript:void(0)" class="is_follow"  @click="follow_click(index)"  @mouseover="follow_over(index)"  @mouseout="follow_out(index)" >
                         <i class="fa fa-check" ></i>
                         <span :ref="'a'+index">已关注</span>
                       </a>
                     </li>
                   </ul>
    </div>
</template>
<script>
export default {
  name: "MoreFollow",
  data() {
    return {
      notes: [
        {
          src: require("~/assets/img/user.jpg"),
          title: "历史"
        },
        {
          src: require("~/assets/img/user.jpg"),
          title: "摄影"
        }
      ]
    };
  },
  methods: {
    follow_click(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "关注";
        this.$refs.followsProject[value].lastChild.className = "no_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className =
          "fa fa-plus";
      } else if (this.$refs["a" + value][0].innerHTML == "关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.className = "is_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className =
          "fa fa-check";
      }
    },
    follow_over(value) {
      if (this.$refs["a" + value][0].innerHTML == "已关注") {
        this.$refs["a" + value][0].innerHTML = "取消关注";
        this.$refs.followsProject[value].lastChild.className = "is_follow btnBgColor";
        this.$refs.followsProject[value].lastChild.firstChild.className =
          "fa fa-times";
      }
    },
    follow_out(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[value].lastChild.className = "is_follow";
        this.$refs.followsProject[value].lastChild.firstChild.className =
          "fa fa-check";
      }
    }
  }
};
</script>
<style scoped>
.user-list .avatar-collection {
  width: 52px;
  height: 52px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-block;
}
.user-list .avatar-collection img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.user-list li {
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.user-list .info {
  vertical-align: middle;
  display: inline-block;
  max-width: 450px;
}
.user-list .info a {
  font-size: 15px;
  font-weight: 700;
  color: #333;
}
.user-list .meta {
  padding-top: 2px;
  font-size: 12px;
  color: #969696;
}
.user-list .meta a {
  margin-right: 3px;
  font-size: 12px;
  font-weight: 400;
  color: #3194d0 !important;
}

.no_follow {
  float: right;
  text-align: center;
  margin-top: 8px;
  font-size: 15px;
  width: 100px;
  border-color: #42c02e;
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
.user-list li a > span {
  margin-left: 2px;
}
.btnBgColor{
  background-color: #f8f8f8;
}
</style>

