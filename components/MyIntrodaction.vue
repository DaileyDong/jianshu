<template>
         <div class="col-4 aside clearfix" >
              <div class="title">个人介绍</div>
                    <a href="javascript:void(0)" class="function-btn" @click="proFileEdit=true;textDisplay=false">
                  <i class="fa fa-pencil"></i>
                  编辑
              </a>
              <form action="javascript:void(0)" class="profile-edit" v-if="proFileEdit">
                <textarea v-model="textAreaContentModel">
                </textarea>
                <button @click="saveBtn">保存</button>
                <a href="javascript:void(0)" @click="proFileEdit=false;textDisplay=true">取消</a>
              </form>
              <div class="description clearfix">
                <div v-if="textDisplay" class="textDisplay">{{textAreaContent}}</div>
              </div>
              <ul class="user-dynamic">
                  <li>
                      <nuxt-link  to="/users/123/subscriptions">
                      <i class="fa fa-th-large"></i>
                      <span>我关注的专题/文集/连载</span>
                      </nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="/users/123/liked_notes">
                      <i class="fa fa-heart-o"></i>
                      <span>我喜欢的文章</span>
                     </nuxt-link>
                  </li>
              </ul>
              <!--专题和文集-->
               <div class="clearfix">
                 <div class="title change" >我创造的专题</div>
                 <nuxt-link to="/collections/new" class="btn-float"> 
                 <i class="fa fa-plus"></i>
                 <span>新建专题</span>
                 </nuxt-link>
                <ul class="user-list">
                    <li>
                      <div class="info">
                        <nuxt-link to="/c/123">
                        <img src="~static/time.jpeg" alt="">
                        </nuxt-link>
                        <nuxt-link to="/c/123" class="textContent">让时间产生价值</nuxt-link>
                      </div>
                    </li>
                </ul>
               </div>
               <div>
                      <div class="title change" >我的文集</div>
                       <ul class="list">
                           <li>
                               <nuxt-link to="/nb/123">
                                 <i class="fa fa-book"></i>
                               </nuxt-link>
                               <nuxt-link to="/nb/123" class="name">
                                日记本
                               </nuxt-link>
                           </li>
                       </ul>
               </div>
          </div>
</template>
<script>
export default {
  name: "MyIntrodaction",
  data() {
    return {
      proFileEdit: false,
      textDisplay: true,
      textAreaContent:'珍惜时间',
      textAreaContentModel:'珍惜时间'
    };
  },
  methods:{
    saveBtn(){
      this.textAreaContent=this.textAreaContentModel;
      this.proFileEdit=false;
      this.textDisplay=true;
    }
  }
};
</script>
<style scoped>
.person .aside .title {
  float: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
}
.person .aside .profile-edit {
  margin: 0 0 20px;
  display: block;
}
.person .aside .profile-edit textarea {
  margin-bottom: 5px;
  width: 100%;
  height: 125px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  resize: none;
  outline: none;
}
.person .aside .profile-edit button {
  padding: 0;
  margin: 0;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 40px;
  color: #42c02e;
  background-color: #fff;
  border: 1px solid rgba(59, 194, 29, 0.7);
  outline: none;
  cursor: pointer;
}
.person .aside .profile-edit a {
  margin-left: 10px;
  font-size: 14px;
  color: #969696 !important;
}
.person .aside .profile-edit a:hover {
  color: #000 !important;
}
.person .aside .function-btn {
  float: right;
  font-size: 13px;
  color: #969696 !important;
}
.person .aside .function-btn:hover {
  color: #333 !important;
}
.person .aside .description {
  position: relative;
  margin: 32px 0 16px 0;
  padding: 0 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
.textDisplay {
  font-size: 14px;
}
.person .aside .user-dynamic {
  padding-bottom: 6px !important;
  margin-bottom: 16px !important;
  border-bottom: 1px solid #f0f0f0;
}
.person .aside .user-dynamic li {
  margin-bottom: 10px;
}
.person .aside .user-dynamic i {
  margin-right: 10px;
  font-size: 20px;
  vertical-align: middle;
}
.person .aside .user-dynamic span {
  font-size: 14px;
  line-height: 30px;
}
.person .aside .btn-float {
  float: right;
  font-size: 13px;
  color: #42c02e!important;
}
.person .aside .btn-float i{
  margin-right: 5px;
}
.person .aside .user-list {
 width: 300px;
 vertical-align: middle;
 display: inline-block;
 margin-bottom: 10px!important;
padding-bottom: 30px!important;
cursor: pointer;
border-bottom: 1px solid #f0f0f0;
}
.person .aside .user-list .info a {
  width: 32px;
  height: 32px;
  display: inline-block;
}
.person .aside .user-list .info a img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.person .aside .user-list .info .textContent {
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  width: 200px;
  display: inline-block;
}
.person .aside .new-collection-btn {
  font-size: 13px;
  color: #42c02e !important;
}
.person .aside .new-collection-btn i {
  padding-right: 2px;
}
.person .aside .change {
  float: left;
}
.person .aside .list {
  width: 300px;
  display: inline-block;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 16px !important;
}
.person .aside .list li a {
  color: #969696 !important;
  margin-right: 5px;
  vertical-align: middle;
}
.person .aside .list li a.name {
  font-size: 14px;
  color: #333 !important;
}
</style>

