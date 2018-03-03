<template>
  <div class="recommend">
    <my-header></my-header>
     <div class="sub my-container">
       <div class="row">
         <div class="aside col-4" >
            <sub-aside></sub-aside>
         </div>
         <div class="main col-8">
          <my-main></my-main>
             <a href="javascript:void(0)" class="find-more">
              阅读更多
            </a>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import SubAside from "~/components/timeline/SubAside";
import MyMain from "~/components/timeline/MyMain";
export default {
  name: "timeline",
  mounted() {
   document.querySelector('.users li:first-child').className='asideActive';
    document.querySelector(".nav-list li:nth-of-type(2) a").className =
      "headerActive";
  },
  components: {
    MyHeader,
    SubAside,
    MyMain
  }
};
</script>

