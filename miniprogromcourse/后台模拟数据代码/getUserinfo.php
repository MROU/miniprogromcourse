 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据
//输出数据
$user_id = $_REQUEST['userid'];
if($user_id=="123456"){
  $books=array(
             'imgurl'=>"http://lf3-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_428476_1",
               'nickname'=>"小麦君",
               'desc'=>"热爱生活，喜欢挑战"         
              );
   Response::show(200,'查询成功',$books);
}else{
   $books=array();
   Response::show(202,'查询不到用户信息',$books);
}


 
?>




