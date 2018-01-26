<!-- 组件的模板 -->
<template>
    <div>
        <my-header></my-header>
         <div class="index my-container" >
             <div class="row">
                 <div class="col-8 main">
                     <!--banner-->
                    <div class="banner">
                     <nuxt-link to="/">
                     <img src="../assets/img/banner1.jpg" alt="">
                     </nuxt-link>
                    </div>
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
                  </div>  
             </div>
         </div>
    </div>
</template>

<!-- 组件的模型 -->
<script>
  import MyHeader from '~/components/MyHeader'
    import $ from 'jquery'
    export default {
        // 组件的名称
        name: "Index",
        data() {
            return {
            }
        },
        components:{
            MyHeader
        },
    }
</script>

<!-- 组件的样式 -->
<style>

</style>