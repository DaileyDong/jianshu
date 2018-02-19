<template>
  <div>
    <my-header></my-header>
      关注
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
export default {
  name:'timeline',
  mounted(){
     document.querySelector('.nav-list li:nth-of-type(2) a').className="headerActive";
  },
   components:{
    MyHeader
  }
}
</script>
<style scoped>

</style>
