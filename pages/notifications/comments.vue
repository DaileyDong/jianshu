<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row boss">
        <div class="aside col-4" >
          <my-aside></my-aside>
        </div>
        <div class="main col-8">
          <div class="menu">收到的评论</div>
          <ul class="comment-ul">
            <li v-for="(notification,index) in notifications" :key="index">
              <nuxt-link to="/u/123" class="avatar">
              <img :src="notification.source.user.avatar_source" alt="">
              </nuxt-link>
              <div class="info">
                  <nuxt-link to="/u/123" class="user">{{notification.source.user.nickname}}</nuxt-link>
                  <span class="comment-slogan">在文章</span>
                  <nuxt-link to="/p/123">《{{notification.source.note.title}}》</nuxt-link>
                   <span class="comment-slogan">的评论中提到了你</span>
                <div class="time">{{notification.created_at | formateDate}}</div>
              </div>
              <p v-html="notification.source.compiled_content">
              </p>
              <div class="meta">
                <a href="javascript:void(0)" class="function-btn">
                  <i class="fa fa-comment-o"></i>
                  <span @click="showSubCommentForm(index,notification.source.user_id,notification.source.user.nickname)">回复</span>
                </a>
                 <nuxt-link to="/p/123" class="function-btn">
                 <i class="fa fa-share"></i>
                 <span>查看对话</span>
                 </nuxt-link>
              </div>
                  <!--评论框组件-->
              <div class="repeat" >
                    <transition :duration="200" name="fade">
                         <form class="new-comment" v-if="activeIndex.includes(index)">
                       <textarea v-focus="commentFormState[index]" @blur="commentFormState[index]=false" placeholder="写下你的评论..." v-model="subCommentList[index]" ref="textareaContent" ></textarea>
                         <div class="write-function-block clearfix">
                          <div class="emoji-modal-wrap">
                          <a class="emoji" @click="showSubEmoji(index)">
                          <i class="fa fa-smile-o"></i>
                          </a>
                    <transition :duration="200" name="fade">
                      <!--图标-->
                        <div class="emoji-modal arrow-top" v-if="emojiIndex.includes(index)">
                         <vue-emoji @select="selectSubEmoji"></vue-emoji>
                         </div>
                    </transition>
                         </div>
                            <div class="hint">Ctrl+Enter 发表</div>
                            <a class="btn btn-send" @click="sendSubCommentData(index)">发送</a>
                               <a class="cancel" @click="closeSubComment(index)">取消</a>
                                 </div>
                          </form>
                       </transition>
              </div>
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
import vueEmoji from "~/components/VueEmoji";
import Vue from "vue";
export default {
  name: "comments",
  data() {
    return {
      activeIndex: [],
      emojiIndex: [],
      notifications:[
        {
          id:230306867,
          is_read:true,
          created_at:"2018-02-05T15:32:01.000+08:00",
          source:{
            id:20332501,
            user_id:3106924,
            parent_id:20152283,
            compiled_content:'<a href="/users/b673ad6d3088" class="maleskine-author" target="_blank" data-user-slug="b673ad6d3088">@朱庇特的白银时代</a> 谢谢',
            note:{
              id:23397978,
              title:"冬季里看花",
            },
            user:{
              id:3106924,
              nickname:"月儿上山了",
              avatar_source:"/1d2d4fe929e5.jpg",
            },
          },
        },

         {
          id:230306867,
          is_read:true,
          created_at:"2018-02-07T10:09:01.000+08:00",
          source:{
            id:20332501,
            user_id:3106924,
            parent_id:20152283,
            compiled_content:'<a href="/users/b673ad6d3088" class="maleskine-author" target="_blank" data-user-slug="b673ad6d3088">@朱庇特的白银时代</a> 非常赞同',
            note:{
              id:23397978,
              title:"神秘巨星",
            },
            user:{
              id:3106924,
              nickname:"薛文诚",
              avatar_source:"/89731766ca20.jpg",
            },
          },
        },
      ],
      commentId: [],
      commentFormState: [],
      nameArr: [],
      subCommentList: [],
    };
  },
  methods:{
    //添加图标到文本框
    selectSubEmoji(code) {
      //当前下标
      let index = this.emojiIndex[0];
      //将表情所代表的code值放入表单中
      if (this.subCommentList[index] == null) {
        this.subCommentList[index] = "";
      }
      this.subCommentList[index] += code;
      //关掉表情
      this.emojiIndex = [];
      //聚焦一下
      let aa = this.activeIndex.indexOf(index);
      this.$refs.textareaContent[aa].focus();
    },
        //回复
    showSubCommentForm(index, id, name) {
      let ID = id.toString();
      if (this.commentId[index] == ID) {
        //点两次
        this.activeIndex.splice(this.activeIndex.indexOf(index), 1);
        this.commentId[index] = "";
      } else {
        //点一次
        //清除表单内容
        this.subCommentList[index] = "";
        //表情关掉
        this.emojiIndex = [];
        if (!this.activeIndex.includes(index)) {
          this.activeIndex.push(index);
        }
        // 判断用户名是否存在，如果存在添加
        if (name != "") {
          this.subCommentList[index] = `@${name} `;
        }
        //存一下上一个回复列表对应点击的按钮
        this.commentId[index] = ID;
        this.commentFormState[index] = true;
      }
    },
    //发送
    sendSubCommentData(value) {
      this.activeIndex.splice(this.activeIndex.indexOf(value), 1);
      this.commentId[value] = "";
      this.emojiIndex = [];
    },
    //取消
    closeSubComment(value) {
      this.activeIndex.splice(this.activeIndex.indexOf(value), 1);
      this.commentId[value] = "";
      this.emojiIndex = [];
      this.subCommentList[value] = "";
    },
    //图标显示
    showSubEmoji(value) {
      if (this.emojiIndex.includes(value)) {
        let index = this.emojiIndex.indexOf(value);
        this.emojiIndex.splice(index, 1);
      } else {
        this.emojiIndex.push(value);
      }
    },

  },
    //自定义指令
  directives: {
    // 对纯 DOM 元素进行底层操作
    focus: {
      inserted: function(el, { value }) {
        if (value) {
          el.focus();
        }
      },
      update: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  },
  mounted(){
   let dom1=document.querySelector('.aside ul li:nth-of-type(1)');
   dom1.className="asideActive";
 document.querySelector('.nav-list li:nth-of-type(3) a').className="headerActive";
  },
  components: {
    MyHeader,
    MyAside,
    vueEmoji
  }
};
</script>
<style>

.notification{
  position: relative;
}
.notification .aside {
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 86px;
  padding: 0 0 30px;
  max-width: 280px;
  overflow: auto;
}

.notification .main {
  position: absolute;
  right: 35px;
  margin-top: 30px;
  max-width: 625px;
}

.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .comment-ul li {
  padding:20px 0;
  border-top: 1px solid #f0f0f0;
}
.notification .main .comment-ul .avatar {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  display: inline-block;
}
.notification .main .comment-ul .info {
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
  vertical-align: middle;
}
.notification .main .comment-ul .info .user {
  margin-right: 5px;
  color: #333 !important;
}
.notification .main .comment-ul .info a {
  color: #3194d0 !important;
}
.notification .main .comment-ul .info .time {
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}
.notification .main .comment-ul p {
  margin-top: 10px;
  font-size: 15px;
}
.notification .main .comment-ul p .maleskine-author {
  color: #3194d0 !important;
}
.notification .main .comment-ul .meta {
  margin-top: 10px;
  height: 20px;
}
.notification .main .comment-ul .meta .function-btn {
  float: left;
  margin-right: 30px;
  font-size: 13px;
  color: #969696 !important;
}
.notification .main .comment-ul .meta .function-btn:hover{
  color: #333!important;
}
.notification .main .comment-ul .meta .function-btn i {
  margin-right: 5px;
  font-size: 15px;
  vertical-align: middle;
}
.notification .main .comment-ul .meta .function-btn span{
  vertical-align: middle;
}
.repeat .new-comment {
  margin: 30px 0 0;
}
 .new-comment {
  position: relative;
  margin-left: 48px;
  margin-bottom: 20px;
}
 .new-comment textarea {
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
 .new-comment .emoji-modal-wrap {
  position: relative;
}
 .new-comment .emoji {
  float: left;
  margin-top: 14px;
}
 .new-comment .emoji i {
  color: #969696;
  font-size: 25px;
}
 .new-comment .hint {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: #969696;
}
 .new-comment .cancel {
  float: right;
  font-size: 16px;
  margin: 18px 30px 0 0;
  color: #969696 !important;
  cursor: pointer;
}
 .new-comment .btn-send {
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
 .new-comment .emoji i:hover,
 .new-comment .cancel:hover {
  color: #2f2f2f !important;
}
 .new-comment .emoji-modal-wrap .emoji-modal {
  position: absolute;
  top: 50px;
  left: -48px;
  width: 402px;
  padding: 10px;
  height: 210px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
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

