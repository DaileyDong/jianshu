<template>
  <div>
      <my-header></my-header>
       <div class="note">
           <!--文章区域-->
           <div class="post">
               <!--正文-->
               <div class="article">
                   <h1 class="title">我失败的程序员生涯</h1>
                   <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                        <img src="../../assets/img/user.jpg" alt="">
                        </nuxt-link>
                        <div class="info">
                            <span class="name">测试用户</span>
                            <a href="javascript:void(0)" class="btn-sm" :class="followObj" @click="bjclick" @mouseover="bjover"  @mouseout="bjout" ref="gz">
                                <i class="fa" :class="iconObj" ref="icon"></i>
                                 <span ref="guanzhu">关注</span>
                            </a>
                        <div class="meta">
                            <span>2018.01.23 16:09</span>
                            <span>字数 3273</span>
                            <span>阅读 5550</span>
                            <span>评论 55</span>
                            <span>喜欢 34</span>
                        </div>
                        </div>
                       
                    </div>
                    <!--文章内容-->
                   <div data-note-content="" class="show-content">
                    <p>我，一个普普通通的人。普通本科毕业，来到北京成为了一个普通的程序员。</p>
                    <p>2013年，我本科毕业，然后就踏上了北漂的征程。</p>
                    <p>来之前想的很清楚。北京技术发达先进。我可以在这里工作三四年，学习成长自己的技术，然后回二三线城市，找家公司做个小主管啥的，应该是可以的。</p>
                    <p>但是呢，现在马上都要五年了，考虑到老家的就业机会，工资福利待遇，也还是一直没有勇气回去。</p>
                    <p>时间快的有点让人感觉喘不过气来，回首自己这几年的工作经历，那真可谓是失败啊。</p>
                    <p>说起失败，我都不知道从何说起，那就从刚毕业找工作聊起吧。</p>
                    <h1>一</h1>
                    <p>刚毕业来北京，住宿条件差就不用说了。每天是拿着简历到处跑。现在想想，那还真是年轻不怕累，现在让我一天面俩公司，我都感觉特别累。</p>
                    <p>还记得当时有一天面试俩公司。上午是面试久其软件，在北京的南四、五环上了吧。下午是面试用友软件，在中关村软件园。</p>
                    <p>由于跟久其的面试官聊得有些久了，一结束面试，就向地铁站飞奔。因为当时觉着，用友软件还是大公司，名牌公司，尽量不要错过了机会。</p>
                    <p>出了中关村软件园附近的地铁站，按照我没钱的习惯，能跑步就别坐车，那时也还没有共享单车。但一看时间又相当紧迫，于是就打了个摩的。</p>
                    <p>到现在，我都不知道中关村软件园有几个，怎么划分的。当时摩的师傅把放到软件园就走了，我甚至不确定那个软件园是不是用友所在的软件园。</p>
                    <p>无奈之下只好拿出我的智能手机不停的，一边导航一边走。</p>
                    <blockquote>
                    <p>还记得那个手机型号是ME525，哈哈。或许有朋友也听说过吧。</p>
                    </blockquote>
                    <p>手机卡的不行不说，定位总是有偏差。眼瞅着时间到了，只好给用友人事打电话，并同意给延迟半个小时。</p>
                    <p>找啊找啊找啊找，到最后干脆放弃了。但是又不舍得错过大公司。于是又一次打电话给用友，希望争取到明天面试。但是用友告诉我：原定的面试已经结束了。</p>
                    <p>哎，就这么错过了，自己当时心目中的大公司。或许也对，自己毕竟是没有好的学历背景，也没丰富的工作背景，能有大公司的面试已经十分侥幸了。</p>
                    <p>这真的是我，最辛苦而又最失落的一次面试。</p>
                    <p>找个好的公司，然后坚持努力下去。</p>
                    <p>找一个好的股票，然后坚持持有下去。</p>
                    <p>找一个好的媳妇，然后坚持一起走下去。</p>
                    <p>等等。。。</p>

                   </div>
               </div>
               <div class="show-foot">
                   <nuxt-link to="/nb/123" class="notebook">
                   <i class="fa fa-book"></i>
                   <span>我的文集</span>
                   </nuxt-link>
                   <div class="copyright">
                       © 著作权归作者所有
                   </div>
               </div>
               <div class="follow-detail">
                <div class="info">
                  <nuxt-link class="avatar" to="/u/123">
                  <img src="../../assets/img/user.jpg" alt="">
                   </nuxt-link>          
                   <a class="btn btn-success followb" href="javascript:void(0)" :class="followObj" @click="bjclick" @mouseover="bjover"  @mouseout="bjout" ref="gz">
                       <i class="fa" :class="iconObj" ref="icon2"></i>
                       <span ref="guanzhu2">关注</span></a>
                   <nuxt-link class="title" to="/u/123">清仁</nuxt-link>
                   <i class="fa fa-mars ic-man"></i>
                   <p>写了 13138 字，被 27 人关注，获得了 29 个喜欢</p>
                </div>
                <div class="signature">曾经的阿里猿，现在的自由人。</div>
                </div>
               <div class="meta-bottom clearfix">
                 <div class="like"> 
                    <div class="btn" :class="likeObj" @click="likeOk"> 
                        <div class="btn-like">
                            <a class="fontLike"><i class="fa fa-heart-o"></i>
                            喜欢
                            </a>
                        </div>
                        <div class="modal-wrap">
                            <a class="fontNum">{{number}}</a>
                        </div>
                    </div>
                 </div>
                 <div class="share-group">
                        <b-tooltip  target = "Button1" title = "分享到微信"></b-tooltip >
                        <b-tooltip  target = "Button2" title = "分享到微博"></b-tooltip >
                        <b-tooltip  target = "Button3" title = "分享到QQ"></b-tooltip >
                     <a href="javascript:void(0)" id = "Button1"  variant = "outline-success">
                         <i class="fa fa-weixin weixin"></i>
                       </a>
                          <a href="javascript:void(0)" id = "Button2"  variant = "outline-success">
                         <i class="fa fa-weibo weibo"></i>
                     </a>
                          <a href="javascript:void(0)" id = "Button3"  variant = "outline-success">
                         <i class="fa fa-qq qq"></i>
                     </a>
                     <div class="btn more-share" @click.stop="moreBtn" id="ms" ref="mode">
                         更多分享
                     </div>
                     <div class="motai" v-show="mk">
                          <div class="content">
                          <ul>
                              <li><i class="fa fa-star"></i><span>分享到QQ空间</span></li>
                              <li><i class="fa fa-twitter"></i><span>分享到Twitter</span></li>
                              <li><i class="fa fa-facebook-official"></i><span>分享到FaceBook</span></li>
                              <li><i class="fa fa-google-plus"></i><span>分享到Google+</span></li>
                              <li><i class="fa fa-bug"></i><span>分享到豆瓣</span></li>
                         </ul>
                          </div>
                         <div class="san"></div>
                     </div>
                 </div>
               </div>
              <!--留言-->
              <myComment></myComment>
           </div>

           <!--悬浮的操作框-->
           <div class="side-bar"></div>
           <!--对应的推荐阅读-->
           <div class="note-bottom"></div>
       </div>
  </div>
</template>
<script>
import myHeader from "~/components/MyHeader";
import myComment from "~/components/MyComment";
import $ from 'jquery';
export default {
  data() {
    return {
      number: 26,
      mk:false,
      followObj: {
        follow: true,
        followed: false
      },
      iconObj: {
        "fa-plus": true,
        "fa-check": false
      },
      likeObj: {
        "like-group": true,
        likeActive: false
      },

    };
  },
  methods: {
    bjclick() {
      this.followObj.follow = !this.followObj.follow;
      this.followObj.followed = !this.followObj.followed;
      this.iconObj["fa-plus"] = !this.iconObj["fa-plus"];
      this.iconObj["fa-check"] = !this.iconObj["fa-check"];
      let word = this.$refs.guanzhu.innerHTML;
      this.$refs.guanzhu.innerHTML = word == "关注" ? "已关注" : "关注";
      this.$refs.guanzhu2.innerHTML = word == "关注" ? "已关注" : "关注";
    },
    bjover() {
      let word = this.$refs.guanzhu.innerHTML;
      if (word == "已关注") {
        this.$refs.icon.className = "fa fa-times";
        this.$refs.icon2.className = "fa fa-times";
        this.$refs.guanzhu.innerHTML = "取消关注";
        this.$refs.guanzhu2.innerHTML = "取消关注";
        this.$refs.gz.style.background = "#f8f8f8";
      }
    },
    bjout() {
      let word = this.$refs.guanzhu.innerHTML;
      if (word == "取消关注") {
        this.$refs.icon.className = "fa fa-check";
        this.$refs.icon2.className = "fa fa-check";
        this.$refs.gz.style.background = "";
        this.$refs.guanzhu.innerHTML = "已关注";
        this.$refs.guanzhu2.innerHTML = "已关注";
      }
    },
    likeOk() {
      if(this.likeObj["likeActive"]==true){
          //不喜欢
        --this.number;
      }else{
         //喜欢
        ++this.number;
      }
      this.likeObj["like-group"] = !this.likeObj["like-group"];
      this.likeObj["likeActive"] = !this.likeObj["likeActive"];
    },
    //阻止事件传播
    moreBtn(ev){
        this.mk=true;
    },
    //使用refs和target判断id值
    // handleBodyClick(ev){
    //     let con=this.$refs.mode.id;
    //      let add=ev.target.id;
    //      if(con!=add){
    //        this.mk=false;
    //      }
    // },

    handleBodyClick(ev){
      this.mk=false;
    }
  },
mounted () {
  document.addEventListener('click', this.handleBodyClick);
},
  components: {
    myHeader,
    myComment
  }
};
</script>

<style scoped>

</style>
