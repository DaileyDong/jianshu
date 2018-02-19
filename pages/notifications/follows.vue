<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4">
          <my-aside></my-aside>
        </div>
        <div class="main col-8">
          <div class="menu">全部关注</div>
          <ul class="follow-list">
            <li v-for="(follow,index) in follows" :key="index">
              <nuxt-link to="/u/123" class="avatar">
              <img :src="follow.source.avatar_source" alt="">
              </nuxt-link>
              <div class="info" >
                <nuxt-link to="/u/123" class="user">{{follow.source.nickname}}</nuxt-link>
                <span>关注了你</span>
                <div class="time">{{follow.created_at |formateDate}}</div>
              </div>
              <a href="javascript:void(0)" ref="followsProject" class="is_follow"  @click="follow_click(index)"  @mouseover="follow_over(index)"  @mouseout="follow_out(index)">
                <i class="fa fa-check" ></i>
                 <span :ref="'a'+index">已关注</span>
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
import MyAside from "~/components/MyAside";
export default {
  name: "follows",
  data() {
    return {
      follows: [
        {
          id: 230259561,
          is_read: true,
          created_at: "2018-02-05T12:09:13.000+08:00",
          followed: false,
          source: {
            id: 9498139,
            nickname: "薛文诚",
            avatar_source: "/89731766ca20.jpg"
          }
        }
      ]
    };
  },
  methods: {
    follow_click(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "关注";
        this.$refs.followsProject[0].className = "no_follow";
        this.$refs.followsProject[0].firstChild.className =
          "fa fa-plus";
      } else if (this.$refs["a" + value][0].innerHTML == "关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[0].className = "is_follow";
        this.$refs.followsProject[0].firstChild.className =
          "fa fa-check";
      }
    },
    follow_over(value) {
      if (this.$refs["a" + value][0].innerHTML == "已关注") {
        this.$refs["a" + value][0].innerHTML = "取消关注";
        this.$refs.followsProject[0].firstChild.className =
          "fa fa-times";
      }
    },
    follow_out(value) {
      if (this.$refs["a" + value][0].innerHTML == "取消关注") {
        this.$refs["a" + value][0].innerHTML = "已关注";
        this.$refs.followsProject[0].firstChild.className =
          "fa fa-check";
      }
    }
  },
  mounted() {
    let dom1 = document.querySelector(".aside ul li:nth-of-type(5)");
    dom1.className = "asideActive";
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
.notification .main .follow-list li {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
}
.notification .main .follow-list .avatar {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: inline-block;
}
.notification .main .follow-list .info {
  max-width: 420px;
  display: inline-block;
  vertical-align: top;
}
.notification .main .follow-list .info .user {
  font-size: 15px;
  color: #333;
  margin: 0 5px 0 0;
}
.notification .main .follow-list .time {
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}
.btn {
  padding: 0;
}
.no_follow {
  float: right;
  border-color: #42c02e;
  background-color: #42c02e;
  color: #fff !important;
  border-radius: 40px;
  outline: none;
  padding: 5px 20px;
  cursor: pointer;
}
.is_follow {
  float: right;
  outline: none;
  background-color: #fff;
  color: #8c8c8c !important;
  font-size: 15px !important;
  padding: 5px 6px !important;
  border-radius: 40px;
  cursor: pointer;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
}
span {
  margin-left: 2px;
}
</style>
