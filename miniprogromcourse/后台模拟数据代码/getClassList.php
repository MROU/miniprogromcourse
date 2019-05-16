 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据


    $bookitem[0]=array(
               'categoryCode'=>"1009",
               'categoryName'=>"文艺",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1498875457244/thumb_Sat_Jul_01_2017.jpg"          
              );
    $bookitem[1]=array(
               'categoryCode'=>"1008",
               'categoryName'=>"历史",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1499677631932/thumb_Mon_Jul_10_2017.jpg"            
              );
    $bookitem[2]=array(
               'categoryCode'=>"1007",
               'categoryName'=>"小说",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1502434784015/thumb_Fri_Aug_11_2017.jpg"            
              );
    $bookitem[3]=array(
               'categoryCode'=>"1006",
               'categoryName'=>"读客",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1502434922369/thumb_Fri_Aug_11_2017.jpg"            
              );
    $bookitem[4]=array(
               'categoryCode'=>"1005",
               'categoryName'=>"新经典",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1506302001464/thumb_Mon_Sep_25_2017.jpg"            
              );
    $bookitem[5]=array(
               'categoryCode'=>"1004",
               'categoryName'=>"磨铁",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1506691129549/thumb_Fri_Sep_29_2017.jpg"            
              );
    $bookitem[6]=array(
               'categoryCode'=>"1003",
               'categoryName'=>"中信出版",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1507540834077/thumb_Mon_Oct_09_2017.jpg"            
              );
    $bookitem[7]=array(
               'categoryCode'=>"1002",
               'categoryName'=>"理想国",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508134789613/thumb_Mon_Oct_16_2017.jpg"            
              );
   $bookitem[8]=array(
               'categoryCode'=>"1001",
               'categoryName'=>"上海译文",
               'categoryImg'=>"http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508723813381/thumb_Mon_Oct_23_2017.jpg"            
              );



      $books=array(
               'total'=>8,
               'list'=>$bookitem      
              );

      Response::show(200,'查询成功',$books);
?>




