<template>
  <div>
    <div class="comment-list" id="comment-list">
      <!--提交的留言表单-->
      <form class="new-comment">
        <nuxt-link to="/u/123" class="avatar">
        <img src="../assets/img/user.jpg" alt="">
        </nuxt-link>
        <textarea placeholder="写下你的评论..." @focus="send_one=true"></textarea>
          <transition name="fade">
                  <div class="write-function-block clearfix" v-if="send_one">
          <div class="emoji-modal-wrap">
          <a href="javascript:void(0)" class="emoji" @click="showEmoji=!showEmoji">
             <i class="fa fa-smile-o"></i>
          </a>
            <transition name="fade">
            <!--图标-->
           <div class="emoji-modal arrow-top" id="emoji-modal" v-if="showEmoji">
   
           </div>
            </transition>
          </div>
          <div class="hint">Ctrl+Enter 发表</div>
          <a class="btn btn-send">发送</a>
          <a class="cancel" @click="send_one=false">取消</a>
        </div>
          </transition>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "myComment",
  data() {
    return {
      send_one: false,
      showEmoji: false
    };
  }
};
</script>
<style scoped>
.note .post .comment-list {
  padding-top: 20px;
  margin-bottom: 500px; /*???????????*/
}
.note .post .comment-list .new-comment {
  position: relative;
  margin-left: 48px;
  margin-bottom: 20px;
}
.note .post .comment-list .avatar {
  width: 38px;
  height: 38px;
  display: inline-block;
  margin-right: 5px;
}
.note .post .comment-list .new-comment .avatar {
  position: absolute;
  left: -48px;
}
.note .post .comment-list .new-comment textarea {
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: inline-block;
  outline-style: none;
  /*禁止缩放*/
  resize: none;
  vertical-align: top;
  background-color: #f8f8f8;
}
.note .post .comment-list .new-comment .emoji-modal-wrap {
  position: relative;
}
.note .post .comment-list .new-comment .emoji {
  float: left;
  margin-top: 14px;
}
.note .post .comment-list .new-comment .emoji i {
  color: #969696;
  font-size: 25px;
}
.note .post .comment-list .new-comment .hint {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: #969696;
}
.note .post .comment-list .new-comment .cancel {
  float: right;
  font-size: 16px;
  margin: 18px 30px 0 0;
  color: #969696 !important;
  cursor: pointer;
}
.note .post .comment-list .new-comment .btn-send {
  float: right;
  width: 78px;
  margin: 10px 0;
  padding: 8px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: #fff !important;
  cursor: pointer;
  outline: none;
  display: block;
  background-color: #42c02e;
}
.note .post .comment-list .new-comment .emoji i:hover,
.note .post .comment-list .new-comment .cancel:hover {
  color: #2f2f2f !important;
}
.note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal {
  position: absolute;
  top: 50px;
  left: -48px;
  width: 360px;
  height: 240px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10001;
}
.arrow-top::before {
  position: absolute;
  left: 49px;
  top: -1px;
  content: "";
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-left: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(45deg);
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -5%, 0);
  -webkit-transform: translate3d(0, -5%, 0);
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
</style>
