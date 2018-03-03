<template>
  <div>
    <a href="javascript:void(0)" class="all" @click="downBtn"  @blur="is_focus=false;pgone='';">全部关注 <i class="fa fa-chevron-circle-down"></i></a>
    <nuxt-link to="/subscriptions/recommendation" class="add"><i class="fa fa-user-plus"></i><span>添加关注</span></nuxt-link>
     <ul class="modai" v-if="is_focus">
         <li>全部关注</li>
          <li>只看作者</li>
           <li>只看专题</li>
            <li>只看文集</li>
             <li>只看推送更新</li>
     </ul>
     <ul class="users">
         <li v-for="(user,index) in users" :key="index">
           <nuxt-link :to="user.url" class="father">
            <div class="avatar">
               <img :src="user.src" alt="">
           </div>
           <div  class="title">
               {{user.name}}
           </div>
           </nuxt-link>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: "subaside",
  data() {
    return {
      pgone: "",
      is_focus: false,
      users: [
        {
          url: "/subscriptions/timeline",
          src: "/friend.png",
          name: "简友圈"
        },
        {
          url: "/subscriptions/7415/outing",
          src: "/outing.png",
          name: "旅行·在路上"
        },
        {
          url: "/subscriptions/25753/user",
          src: "/89731766ca20.jpg",
          name: "朱庇特的白银时代"
        }
      ]
    };
  },
  methods: {
    downBtn() {
      if (this.pgone == "pgone") {
        this.is_focus = false;
        this.pgone = "";
      } else {
        this.is_focus = true;
        this.pgone = "pgone";
      }
    }
  }
};
</script>
<style scoped>
.all {
  font-size: 15px;
  margin-left: 10px;
  color: #333;
}
.all i {
  font-size: 15px;
  color: #c8c8c8;
}
.add {
  float: right;
  margin-top: 7px;
  font-size: 13px;
  color: #333;
  margin-right: 10px;
}
.add i {
  margin-right: 5px;
  color: #333;
}
.modai {
  position: absolute;
  top: 40px;
  left: 19px;
  z-index: 1000;
  font-size: 14px;
  text-align: center;
  border: 1px solid #f0f0f0;
  width: 130px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.modai::after {
  position: absolute;
  top: -8px;
  transform: rotate(45deg);
  left: 57.5px;
  content: "";
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-right: none;
  border-bottom: none;
}
.modai li {
  padding: 10px 20px;
  cursor: pointer;
}
.modai li:first-child {
  position: relative;
  z-index: 999;
}
.modai li:hover {
  background-color: #f5f5f5;
}
.users {
  position: relative;
  z-index: 1;
  margin-top: 10px !important;
  border-top: 1px solid #f0f0f0;
}
.users li {
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
}
.users li:hover {
  background-color: #f5f5f5;
}

.users li .father{
  display: inline-block;
  width: 260px;
}
.users .avatar {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: inline-block;
}
.users li:last-child .avatar img{
  border-radius: 50%;
}
.users .avatar img {
  border: none;
  border-radius: 4px;
}

.users .title {
  display: inline-block;
  vertical-align: middle;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

