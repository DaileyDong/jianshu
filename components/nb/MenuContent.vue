<template>
  <div id="list-container">
   <ul class="nost-list">
      <li :class="book.src==''?'':haveImg" v-for="(book,index) in bookmark" :key="index" @mouseover="is_mark=index" @mouseout="is_mark=null">
                       <nuxt-link to="/p/123" class="wrap-img" v-if="book.src==''?false:true">
                       <img :src="book.src" alt="" >
                       </nuxt-link>
                    <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="~assets/img/user.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">{{book.nickname}}</nuxt-link>
                                   <span class="time">02.07 03:00</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                          {{book.title}}
                          </nuxt-link>
                          <p class="abstract">
                           {{book.abstract}}
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> {{book.eye}}
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> {{book.comments}}
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> {{book.heart}}
                              </span>
                            <span v-show="is_mark==index?true:false" class="quxiao">
                                 取消喜欢
                               </span>
                          </div>
                      </div>
                  </li>
   </ul>
  </div>
</template>
<script>
export default {
  name: "MenuContent",
  data() {
    return {
      bookmark: [
        {
          src: "",
          nickname: "朱庇特的白银时代",
          title: "《戏说网恋》",
          abstract:
            " 打开视频两两望， 小心堕入千重浪。 烟花易冷江湖上， 人生大事需思量。 露水红颜祸水当， 风花雪月云烟往。 隐姓埋名尽伪装， 甜言蜜语耍计量。 情话连篇暖心房， 海誓山盟指月...",
          eye: 55,
          comments: 888,
          heart: 410
        },
        {
          src: require("~/static/shou1.jpg"),
          nickname: "朱庇特的白银时代",
          title: "此景只应天上有",
          abstract:
            "在岛上工作，每天上下班，坐车坐船至少要花去三个小时，好在“福利”好，每天路上总有惊喜。两周前的一天，我经历的一个惊喜，要是不分享一下，感觉就是犯罪。 那天清晨，坐渡轮上岛。 ...",
          eye: 65,
          comments: 666,
          heart: 10
        }
      ],
      haveImg: "have-img",
      is_mark: null
    };
  }
};
</script>
<style scoped>
.nost-list li {
  position: relative;
  width: 100%;
  margin: 0 0 17px;
  padding: 0 2px 17px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.nost-list .author {
  margin-bottom: 7px;
  font-size: 13px;
}
.nost-list .author .avatar {
  display: inline-block;
  margin-right: 5px;
}
.nost-list .author .info {
  display: inline-block;
  vertical-align: middle;
}
.nost-list .author .info span {
  padding-left: 3px;
  color: #969696;
}
.nost-list .content .title {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
}
.nost-list .content .title:hover {
  text-decoration: underline !important;
}
.nost-list .abstract {
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 24px;
}
.nost-list .meta {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;
}
.nost-list .meta a {
  margin-right: 10px;
}
.nost-list .meta a:hover {
  color: #787878 !important;
}
.nost-list .meta span {
  margin-right: 10px;
}
.nost-list li.have-img {
  min-height: 140px;
}
.nost-list .have-img .wrap-img {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -68px;
  width: 150px;
  height: 120px;
}
.nost-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.nost-list .have-img > div {
  padding-right: 160px;
}
.quxiao{
  cursor: pointer!important;
}
.quxiao:hover{
  color: #787878!important;
}
</style>



