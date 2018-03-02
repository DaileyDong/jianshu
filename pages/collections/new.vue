<template>
  <div>
    <my-header></my-header>
    <div class="new my-container">
      <div class="row">
        <div class="main">
          <h3>新建专题</h3>
           <table>
             <tbody>
               <tr>
                 <td>
                   <div class="avatar-collection">
                     <img src="~static/new.png" alt="">
                   </div>
                 </td>
                 <td>
                   <a href="javascript:void(0)" class="btn-hollow">
                     <input type="file" class="hide">
                      上传专题封面
                   </a>
                 </td>
               </tr>
               <tr>
                 <td>
                   名称
                 </td>
                 <td>
                   <input type="text" placeholder="填写名称，不超过50字">
                 </td>
               </tr>
               <tr>
                 <td class="top-line">描述</td>
                 <td>
                  <textarea placeholder="填写描述"></textarea>
                 </td>
               </tr>
               <tr>
                 <td>其他管理员</td>
                 <td>
                   <input type="text" placeholder="输入用户名">
                 </td>
               </tr>
               <tr>
                 <td>是否允许投稿</td>
                 <td>
                   <input type="radio" name="yijian" id="" checked>
                   允许
                   <input type="radio" name="yijian" id="look">
                   不允许
                 </td>
               </tr>
               <tr>
                 <td>投稿是否需要审核</td>
                 <td>
                   <input type="radio" name="need" id="" checked>
                   需要
                   <input type="radio" name="need" id="look">
                   不需要
                 </td>
               </tr>
             </tbody>
           </table>
           <button>创建专题</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from '~/components/MyHeader'
export default {
  name:'new',
  components:{
    MyHeader
  }
}
</script>
<style scoped>
 .new .main{
  width: 680px;
  padding-top: 20px;
  margin-left: 12.5%;
  margin-bottom: 60px;
 }
 .new .main h3{
   margin: 10px 0 20px;
   font-size: 21px;
   font-weight: 700;
   color: #333;
 }
.new .main table{
  width:100%;
}
.new .main table td{
  padding: 16px 0;
  font-size: 15px;
}
.top-line{
  display: inline-block;
  vertical-align: top;
}
.new .main table .avatar-collection{
  width: 100px;
  height: 100px;
}
.avatar-collection img{
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.main .btn-hollow{
   font-size: 14px;
   color: #42c02e!important;
   border: 1px solid #42c02e;
   padding: 4px 12px;
   width: 82px;
   border-radius: 40px;
   background: none;
}
.main .hide{
 position: absolute;
 width: 82px;
 opacity: 0;
}
table tr td:first-child{
  color: #969696;
  font-size: 15px;
  width: 150px;
}

input[type="text"]{
  background-color: #f8f8f8;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  width: 100%;
}
textarea{
  background-color: #f8f8f8;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  padding: 10px 15px;
  width: 100%;
  height: 100px;
  resize: none;
  outline: none;
}
#look{
  margin-left: 55px;
}
 .new .main>button{
    margin:20px 0 50px;
    padding:8px 22px;
    border: 1px solid #42c02e;
    border-radius: 20px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    background-color: #42c02e;
    cursor: pointer;
 }
</style>
