<template>
  <div>
  <ul class="note-list" >
         <li :class="book.src==''?'':haveImg" v-for="(book,index) in bookmark" :key="index" @mouseover="is_mark=index" @mouseout="is_mark=null">
                       <nuxt-link to="/p/123" class="wrap-img" v-if="book.src==''?false:true">
                       <img :src="book.src" alt="" >
                       </nuxt-link>
                    <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="~static/89731766ca20.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">{{book.nickname}}</nuxt-link>
                                   <span class="time">喜欢了文章 · 02.07 03:00</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                          {{book.title}}
                          </nuxt-link>
                          <p class="abstract">
                           {{book.abstract}}
                          </p>
                          <div class="meta">
                            <div class="origin-author">
                                            <nuxt-link to="/u/123">清仁</nuxt-link>
                                        </div>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> {{book.eye}}
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> {{book.comments}}
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> {{book.heart}}
                              </span>
                          </div>
                      </div>
                  </li>
  </ul>
  </div>
</template>
<script>
export default {
  name: "my-main",
    data() {
    return {
      bookmark: [
           {
          src: "",
          nickname: "朱庇特的白银时代",
          title: "我失败的程序员生涯",
          abstract:
            " 我，一个普普通通的人。普通本科毕业，来到北京成为了一个普通的程序员。 2013年，我本科毕业，然后就踏上了北漂的征程。 来之前想的很清楚。北京技术发达先进。我可以在这里工作三...",
          eye: 85,
          comments: 488,
          heart: 460
        },
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
          src:"/shou1.jpg",
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
.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 17px;
  padding: 0 2px 17px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.note-list .author {
  margin-bottom: 5px;
  font-size: 13px;
}
.note-list .author .avatar {
  display: inline-block;
  vertical-align: middle;
}
.note-list .author .info {
  display: inline-block;
  vertical-align: middle;
  color: #333;
}
.note-list .author .info .nickname {
  vertical-align: middle;
}
.note-list .author .info em {
  vertical-align: middle;
}
.note-list .author .info span {
  display: inline-block;
  vertical-align: middle;
  color: #969696;
  padding-left: 3px;
}
.note-list .comment {
  font-size: 15px;
  line-height: 1.7;
}
.note-list blockquote {
  margin-bottom: 0;
  color: #969696;
  padding: 10px 20px;
  font-size: 17.5px;
  border-left: 3px solid #d9d9d9;
}
.note-list blockquote .origin-author {
  font-size: 12px;
  color: #969696;
}
.note-list .origin-author a {
  margin-right: 10px;
  color: #3194d0 !important;
}
.note-list blockquote .title {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
  color: #333 !important;
}
.note-list .meta {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .origin-author {
  display: inline;
}
.note-list .meta > a {
  margin-right: 10px;
  color: #b4b4b4 !important;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4 !important;
}
.note-list .meta a:hover {
  color: #787878 !important;
}
.note-list .liketitle {
  margin: -7px 0 4px;
  display: inline;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #333 !important;
}
.note-list .follow-detail {
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
  background-color: #f7f7f7;
}
.note-list .follow-detail .avatar-collection {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  display: block;
}
.note-list .follow-detail .avatar-collection img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
  vertical-align: middle;
}

.note-list .follow-detail .info .title {
  font-size: 17px;
  font-weight: 400;
}
.note-list .follow-detail .info p {
  color: #969696;
  margin-bottom: 10px;
}
.note-list .follow-detail .creater {
  color: #3194d0 !important;
}
.note-list .follow-detail .signature {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
