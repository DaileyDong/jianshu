<!-- 组件的模板 -->
<template>
    <div>
        <my-header></my-header>
       <b-container>
           <b-row>
               <b-col>
                 啊撒的发生
               </b-col>
                 <b-col>
                   阿斯顿发生
               </b-col>
           </b-row>
       </b-container>
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