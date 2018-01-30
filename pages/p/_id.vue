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
                                <i class="fa" :class="iconObj" ref="icon"></i>&nbsp;
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
               </div>
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
export default {
  data() {
    return {
       followObj:{
           follow:true,
           followed:false
       },
     iconObj:{
           'fa-plus':true,
           'fa-check':false
     }
    };
  },
  methods:{
      bjclick(){
           this.followObj.follow=!this.followObj.follow;
           this.followObj.followed=!this.followObj.followed;
           this.iconObj['fa-plus']=!this.iconObj['fa-plus'];
           this.iconObj['fa-check']=!this.iconObj['fa-check'];
           let word= this.$refs.guanzhu.innerHTML;
           this.$refs.guanzhu.innerHTML=word=='关注'?'已关注':'关注';
      },
      bjover(){
              let word= this.$refs.guanzhu.innerHTML;
           if(word=='已关注'){
             this.$refs.icon.className='fa fa-times';
             this.$refs.guanzhu.innerHTML='取消关注';
             this.$refs.gz.style.background='#f8f8f8';
           }
      },
      bjout(){
             let word= this.$refs.guanzhu.innerHTML;
           if(word=='取消关注'){
            this.$refs.icon.className='fa fa-check';
           this.$refs.gz.style.background='';
           this.$refs.guanzhu.innerHTML='已关注';
           }
      }
  },
  components: {
    myHeader
  }
};
</script>

<style scoped>

</style>
