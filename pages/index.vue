<!-- 组件的模板 -->
<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <!--banner-->
                    <div v-swiper:mySwiper="swiperOption" class="banner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="banner in banners">
                                <img :src="banner">
                            </div>
                        </div>

                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                    </div>
                    <!--热门专题-->
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/1.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/2.jpg" alt="">
                            <span>手绘</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/3.jpg" alt="">
                            <span>读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/4.jpg" alt="">
                            <span>社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/5.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/3.jpg" alt="">
                            <span>读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/1.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/4.jpg" alt="">
                            <span>社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/5.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="more-hot-collection">
                            更多热门专题
                            <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                    </div>
                    <!--分割线-->
                    <div class="split-line"></div>
                        <!--文章列表-->
                        <div class="list-container">
                            <ul class="note-list">
                                <li class="have-img">
                                    <nuxt-link to="/p/123" class="wrap-img">
                                        <img src="../static/article/1.jpg" alt="">
                                    </nuxt-link>
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="" class="avatar"><img src="../assets/img/user.jpg" alt=""></nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/u/123" class="nickname">萌薇</nuxt-link>
                                                <span class="time">8小时前</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="/p/123">
                                            如何把书中的知识转化成能力？这是我见过最好回答
                                        </nuxt-link>
                                        <p class="abstract">
                                            随着知识经济的兴起，读书的重要性得到了大家的普遍认同，于是市场上出现很多读书方法，比如速度、多读、慢读、列读……不管你采用哪一种读书方法，最终都要回归到“行动”二字上，正如陆...
                                        </p>
                                        <div class="meta">
                                            <nuxt-link to="/collection/123" class="collection-tag">
                                                读书
                                            </nuxt-link>
                                            <nuxt-link to="/p/123" class="tag">
                                                <i class="fa fa-eye"> 579</i>
                                            </nuxt-link>
                                            <nuxt-link to="/p/123" class="tag">
                                                <i class="fa fa-comment"> 200</i>
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"> 546</i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                    
                                    <li class="have-img">
                                            <nuxt-link to="/p/123" class="wrap-img">
                                                <img src="../static/article/2.jpg" alt="">
                                            </nuxt-link>
                                            <div class="content">
                                                <div class="author">
                                                    <nuxt-link to="" class="avatar"><img src="../assets/img/user.jpg" alt=""></nuxt-link>
                                                    <div class="info">
                                                        <nuxt-link to="/u/123" class="nickname">衷曲无闻</nuxt-link>
                                                        <span class="time">7小时前</span>
                                                    </div>
                                                </div>
                                                <nuxt-link class="title" to="/p/123">
                                                   《神秘巨星》：“我才14岁，才不要嫁人”
                                                </nuxt-link>
                                                     <p class="abstract">
                                                    01 几天前，和一个女孩一起看完了电影《神秘巨星》，全程我有一半的时间都在看她，忽略了很多细节，后来又一个人再看一遍。 《神秘巨星》由素有“印度刘德华”之称的阿米尔·汗出品、...
                                                      </p>
                                                <div class="meta">
                                                    <nuxt-link to="/collection/123" class="collection-tag">
                                                        简书电影
                                                    </nuxt-link>
                                                    <nuxt-link to="/p/123" class="tag">
                                                        <i class="fa fa-eye"> 2874</i>
                                                    </nuxt-link>
                                                    <nuxt-link to="/p/123" class="tag">
                                                        <i class="fa fa-comment"> 47</i>
                                                    </nuxt-link>
                                                    <span>
                                                        <i class="fa fa-heart"> 106</i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                                <div class="content">
                                                    <div class="author">
                                                        <nuxt-link to="" class="avatar"><img src="../assets/img/user.jpg" alt=""></nuxt-link>
                                                        <div class="info">
                                                            <nuxt-link to="/u/123" class="nickname">M104</nuxt-link>
                                                            <span class="time">1小时前</span>
                                                        </div>
                                                    </div>
                                                    <nuxt-link class="title" to="/p/123">
                                                        Effective Java 第三版————24.优先考虑静态成员类
                                                    </nuxt-link>
                                                    <p class="abstract">
                                                            Tips《Effective Java, Third Edition》一书英文版已经出版，这本书的第二版想必很多人都读过，号称Java四大名著之一，不过第二版2009年出版，...
                                                          </p>
                                                    <div class="meta">
                                                        <nuxt-link to="/collection/123" class="collection-tag">
                                                            程序员
                                                        </nuxt-link>
                                                        <nuxt-link to="/p/123" class="tag">
                                                            <i class="fa fa-eye"> 579</i>
                                                        </nuxt-link>
                                                        <nuxt-link to="/p/123" class="tag">
                                                            <i class="fa fa-comment"> 200</i>
                                                        </nuxt-link>
                                                        <span>
                                                            <i class="fa fa-heart"> 546</i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                            </ul>
                        </div>
                        <!--阅读更多-->
                        <nuxt-link to="/" class="load-more">阅读更多</nuxt-link>   
                 <!--底部-->
                  <footer>
                     <ul class="about">
                      <li v-for="(a,index) in abouts" :key="index"><nuxt-link to="">{{a.name}}</nuxt-link></li>
                    </ul>
                  </footer>
                    </div>
                <div class="col-4 aside">
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/1.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/2.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/3.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/4.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/5.png" alt="">
                        </nuxt-link>
                    </div>
                    <!--下载-->     
                    <a href="javascript:void(0)" class="download" @mouseover="downMe" @mouseout="downOut">
                      <img src="../assets/img/about.png" alt="" class="qrcode">
                       <span>关于作者 <i class="fa fa-angle-right"></i></span>
                    </a>
                    <div class="suspend" v-show="downObj">
                    <div class="popover"></div>
                    <img src="../assets/img/me.png" alt="" class="me">
                    <div class="san"></div>
                    </div>
                    <!--推荐作者-->
                    <div class="recommend-author">
                        <div class="title">
                            <span>推荐作者</span>
                            <a class="page-change" href="javascript:void(0)" @click="rotate">
                                <i class="fa fa-refresh" ref="refresh"></i>
                                换一批
                            </a>
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">简宝玉</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">简宝玉</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">简宝玉</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">简宝玉</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">简宝玉</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                        </ul>
                        <a href="javascript:void(0)" class="find-more">
                             查看全部 <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        
        
        </div>
        
    </div>
</template>

<!-- 组件的模型 -->
<script>
import MyHeader from "~/components/MyHeader";
import $ from "jquery";
export default {
  // 组件的名称
  name: "Index",
  data() {
    return {
     downObj:false,
      banners: [
        "/banner1.jpg",
        "/banner2.jpg",
        "/banner3.jpg",
        "/banner4.jpg",
        "/banner5.jpg",
        "/banner6.jpg"
      ],
      abouts: [
        { name: "姓名：董邦军" },
        { name: "联系方式：13203878630" },
        { name: "GitHub账号: www.github.com/daileydong" }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        //disableOnInteraction,如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      deg: 360
    };
  },
  components: {
    MyHeader
  },
  methods: {
    rotate() {
      this.$refs.refresh.style.transform = `rotate(${this.deg}deg)`;
      this.deg = this.deg + 360;
    },
    downMe(){
      this.downObj=true;
    },
    downOut(){
      this.downObj=false;
    }
  }
};
</script>

<!-- 组件的样式 -->
<style>
.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.4) !important;
  border-radius: 4px;
}
</style>