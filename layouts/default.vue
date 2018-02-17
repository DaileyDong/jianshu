<template>
  <div id="default-template">
    <nuxt/>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);  
Vue.filter('formateDate',function(value){
      let now = new Date(value);
      let year = now.getFullYear();
      let month = (now.getMonth() + 1).toString().padStart(2, 0);
      let date = now.getDate().toString().padStart(2, 0);
      let hour = now.getHours().toString().padStart(2, 0);
      let minute = now.getMinutes().toString().padStart(2, 0);
      return `${year}.${month}.${date} ${hour}:${minute}`;
});
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/font-awesome.css'
import '../assets/css/animate.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {

}
</script>

