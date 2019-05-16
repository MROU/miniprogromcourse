 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据
//输出数据
$title = $_REQUEST['title'];
$desc = $_REQUEST['desc'];
$books=array();
Response::show(200,'提交成功',$books);



 
?>




