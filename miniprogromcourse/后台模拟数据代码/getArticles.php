 <?php
header("Content-type: text/html; charset=utf-8");
require('response.php'); //封装返回数据
//输出数据
$pageIndex = $_REQUEST['pageIndex'];
 // 输出数据
if($pageIndex==0){
   $bookitem[0]=array(
               "authimg"=>'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512437530&di=d57274148c9872a69442c4a61940a8b7&imgtype=jpg&er=1&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etdfyy3lf1g20b4069e81.jpg', 
               "authName"=>'上海译文', 
               "isauth"=>true, 
               "articleimg"=>'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1509946683146/thumb_Mon_Nov_06_2017.jpg',
               "tag"=>1, 
               "articledesc"=>"只有爱，才是终极哲学，才是我们活下去的理由", 
               "articlecontent"=>"过去一周，外面的世界纷扰不断，加之，又被胃和肠胃炎困扰，小编直接躺倒，可谓是...", 
               "clicknum"=>112, 
               "booknum"=>2, 
               "likenum"=>131, 
               "islike"=>true         
              );
     $bookitem[1]=array(
               "authimg"=>'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508723960363/thumb_Mon_Oct_23_2017.jpg', 
               "authName"=>'豆皮小麦君',
               "isauth"=>true, 
               "articleimg"=>'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508134789613/thumb_Mon_Oct_16_2017.jpg',
               "tag"=>2,
               "articledesc"=>"寻梦环游记：对死亡，它开出了世上最好的止痛药", 
               "articlecontent"=>"人死之后，将去何方？是灰飞烟灭。还是栖息宗教所描述的另一个空间？", 
                "clicknum"=>112, 
                "booknum"=> 2, 
                "likenum"=>141, 
                "islike"=>true            
              );
}else if($pageIndex==1){
   $bookitem[0]=array(
               "authimg"=>'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512437530&di=d57274148c9872a69442c4a61940a8b7&imgtype=jpg&er=1&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etdfyy3lf1g20b4069e81.jpg', 
               "authName"=>'小明', 
               "isauth"=>true, 
               "articleimg"=>'http://img3.imgtn.bdimg.com/it/u=64921975,2682589322&fm=26&gp=0.jpg',
               "tag"=>1, 
               "articledesc"=>"海贼王，路飞越来越强大", 
               "articlecontent"=>"在海贼王早期，路飞和老沙对战的时候，老沙说过，恶魔果实会随着使用方法不同而发挥出强大的威力...", 
               "clicknum"=>112, 
               "booknum"=>2, 
               "likenum"=>131, 
               "islike"=>true         
              );
     $bookitem[1]=array(
               "authimg"=>'http://img0.imgtn.bdimg.com/it/u=3214072313,266671357&fm=27&gp=0.jpg', 
               "authName"=>'乐君',
                "isauth"=>true, 
                "articleimg"=>'http://i0.hdslb.com/bfs/article/e0afd6b4632a113dfb9fcdc6096e741ca363bd10.jpg',
                "tag"=>2,
                "articledesc"=>"海贼王：创作海贼故事是尾田荣一郎长久以来的梦想", 
                "articlecontent"=>"只知道有《北海小英雄》这部动画。他认为男孩长到某个年纪后应该就会想要出海寻宝才对。尾田从小就很想看海贼的漫画？", 
                "clicknum"=>112, 
                "booknum"=> 2, 
                "likenum"=>141, 
                "islike"=>true            
              );
}else{
  $bookitem=array();
}

      $books=array(
               'total'=>4,
               'list'=>$bookitem      
              );

      Response::show(200,'查询成功',$books);
?>




