<template>
  <div> 
    <recommend-subject></recommend-subject>
    <recommend-user></recommend-user>
  </div>
</template>
<script>
import RecommendSubject from "~/components/timeline/recommend/RecommendSubject";
import RecommendUser from "~/components/timeline/recommend/RecommendUser";
export default {
  name: "allrecommend",
  components: {
    RecommendSubject,
    RecommendUser
  }
};
</script>

