 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据
//输出数据
$pageIndex = $_REQUEST['pageIndex'];
 // 输出数据
if($pageIndex==0){
   $bookitem[0]=array(
               'imgurl'=>"http://lf3-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_428476_1",
               'nickname'=>"小麦君",
               'desc'=>"热爱生活，喜欢挑战"          
              );
     $bookitem[1]=array(
               'imgurl'=>"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3285069079,2167968554&fm=27&gp=0.jpg",
               'nickname'=>"小花花",
               'desc'=>"花花可爱多"            
              );
   $bookitem[2]=array( 
               'imgurl'=>"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4056045885,1319110248&fm=26&gp=0.jpg",
               'nickname'=>"小乐乐",
               'desc'=>"我是萌宝一枚"          
              );
   $bookitem[3]=array( 
               'imgurl'=>"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4056045885,1319110248&fm=26&gp=0.jpg",
               'nickname'=>"小笑笑",
               'desc'=>"笑笑萌宝一枚"          
              );
   $bookitem[4]=array( 
               'imgurl'=>"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4056045885,1319110248&fm=26&gp=0.jpg",
               'nickname'=>"小呜呜",
               'desc'=>"呜呜萌宝一枚"          
              );
}else if($pageIndex==1){
  $bookitem[0]=array(
               'imgurl'=>"http://img0.imgtn.bdimg.com/it/u=3727652844,4213668352&fm=26&gp=0.jpg",
               'nickname'=>"小里里",
               'desc'=>"里里喜欢挑战"          
              );
     $bookitem[1]=array(
               'imgurl'=>"http://img3.imgtn.bdimg.com/it/u=1667605687,2328465980&fm=26&gp=0.jpg",
               'nickname'=>"小来来",
               'desc'=>"来来可爱多"            
              );
   $bookitem[2]=array( 
               'imgurl'=>"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4056045885,1319110248&fm=26&gp=0.jpg",
               'nickname'=>"小乖乖",
               'desc'=>"乖乖萌宝一枚"          
              );
}else{
  $bookitem=array();
}

      $books=array(
               'total'=>8,
               'list'=>$bookitem      
              );

      Response::show(200,'查询成功',$books);
?>




