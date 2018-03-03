<template>
  <div class="recommend">
    <my-header></my-header>
     <div class="sub my-container">
       <div class="row">
         <div class="aside col-4" >
            <sub-aside></sub-aside>
         </div>
         <div class="main col-8">
                   <div id="outer-container">
            <ul class="trigger-menu">
              <li  v-for="(trigger,index) in triggers" ref="triggers" :key="index" @click="dhClick(index,trigger.name)" >
                <a href="javascript:void(0)">
                  <i :class="trigger.icon"></i>
                   {{trigger.title}}
                </a>
              </li>
            </ul>
            <keep-alive>
              <component :is="is_component"></component>
            </keep-alive>
         </div>
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
import AllRecommend from "~/components/timeline/recommend/AllRecommend";
import RecommendUser from "~/components/timeline/recommend/RecommendUser";
import RecommendSubject from "~/components/timeline/recommend/RecommendSubject";
export default {
  name: "recommendation",
  data() {
    return {
      num: 0,
      triggers: [
        { icon: "", title: "全部推荐", name: "AllRecommend" },
        { icon: "fa fa-user", title: "推荐作者", name: "RecommendUser" },
        { icon: "fa fa-th-large", title: "推荐专题", name: "RecommendSubject" }
      ],
      is_component: "AllRecommend"
    };
  },
  methods: {
    dhClick(i, name) {
      this.$refs.triggers.forEach(function(value) {
        value.className = "";
      });
      this.$refs.triggers[i].className = "trigger_active";
      this.num = i;
      this.is_component = name;
    }
  },
  mounted() {
    this.$refs.triggers[this.num].className = "trigger_active";
    document.querySelector(".nav-list li:nth-of-type(2) a").className =
      "headerActive";
  },
  components: {
    MyHeader,
    SubAside,
    AllRecommend,
    RecommendUser,
    RecommendSubject
  }
};
</script>
<style scoped>
.trigger-menu {
  margin-bottom: 20px !important;
  border-bottom: 1px solid #f0f0f0;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  color: #969696;
  margin-bottom: -1px;
}
.trigger_active {
  color: #646464 !important;
  border-bottom: 2px solid #646464;
}
/*切换动画*/
.trigger-menu li::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  bottom: 0px;
  width: 0;
  transition: all ease 0.3s;
  opacity: 0;
  border-bottom: 2px solid #b4b4b4;
}
.trigger-menu li:hover {
  color: #646464 !important;
}
.trigger-menu li:hover::after {
  left: 0%;
  width: 100%;
  opacity: 1;
  border-bottom: 2px solid #646464;
}
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
}
.trigger-menu i {
  margin-right: 5px;
  font-size: 17px;
}
</style>
