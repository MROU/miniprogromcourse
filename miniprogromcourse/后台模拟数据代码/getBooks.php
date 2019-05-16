 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据

 // 输出数据
   $bookitem[0]=array(
               "imgurl"=>'http://0img.hitv.com/preview/sp_images/2017/zongyi/318221/4127813/20171007213207255.jpg', 
               "bookname"=>'斜杆青年：如何开启你的多...'      
              );
     $bookitem[1]=array(
               "imgurl"=>'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556784020393&di=e00b51bad1f08aa6ea6a1619c6217ef6&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2Fshaitu%2F20130119%2F1956%2F50fa89e1b60d9.jpg', 
               "bookname"=>'海贼王：克比和贝鲁梅伯的奋斗日记...'         
              );
    $bookitem[2]=array(
               "imgurl"=>'http://4img.mgtv.com/preview/cms_icon/2017/07/20170708201844963.jpg', 
               "bookname"=>'我的鲜肉我做主'      
              );
      $books=array(
               'total'=>4,
               'list'=>$bookitem      
              );

      Response::show(200,'查询成功',$books);
?>




