<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4">
          <my-aside></my-aside>
        </div>
        <div class="main col-8"></div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
import MyAside from '~/components/MyAside';
export default {
  name: "follows",
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style scoped>
.notification .aside{
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 86px 0 0;
  padding: 0 0 30px;
  width: 280px;
  overflow: auto;
}
</style>
