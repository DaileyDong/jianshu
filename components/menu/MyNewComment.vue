<template>
  <div>
       <ul class="note-list">
                       <li>
                         <div class="content">
                           <div class="author">
                             <nuxt-link to="/u/123" class="avatar">
                             <img src="../../static/89731766ca20.jpg" alt="">
                             </nuxt-link>
                             <div class="info">
                               <nuxt-link to="/u/123" class="nickname">
                               朱庇特的白银时代
                               </nuxt-link>
                               <span class="time">02.05 11:48</span>
                             </div>
                           </div>
                           <nuxt-link to="/p/123" class="title">
                           使用简书
                           </nuxt-link>
                           <p class="abstract">写一篇美文!</p>
                           <div class="meta">
                               <nuxt-link to="/p/123">
                                        <i class="fa fa-eye"></i>
                                        6
                                        </nuxt-link>
                                        <nuxt-link to="/p/123">
                                        <i class="fa fa-comment"></i>
                                        4
                                        </nuxt-link>
                                        <span class="heart">
                                            <i class="fa fa-heart"></i>
                                            2
                                        </span>
                           </div>
                         </div>
                       </li>
                     </ul>
  </div>
</template>
<script>
export default {
  name:'MyNewComment'
}
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
  margin-bottom: 14px;
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
  margin-right: 5px;
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