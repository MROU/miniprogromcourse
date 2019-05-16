<?php

class Response{
    const JSON = 'json';
    //封装的综合方法,默认的数据类型为json
    public static function show($code,$message,$data,$type = self::JSON){
        
        if(!is_numeric($code)){
            return '';
        }
        //供测试数组使用
        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data
        );
        //通过get参数判断通信数据类型
        $typelist = array('json','xml','array'); // array为测试使用
        if(isset($_GET['type'])){
            if(in_array(strtolower($_GET['type']),$typelist)){
                $type = strtolower($_GET['type']);
            }else{
                $type = self::JSON;
            }
        }else{
            $type = self::JSON;
        }

        if($type == 'json'){
            self::json($code,$message,$data);
        }else if($type == 'xml'){
            self::xml($code,$message = '',$data);
        }else if($type == 'array'){
            var_dump($result);    //仅供测试
        }
    }

    /**
    * 按json方式输出通信数据
    * @param integer $code 状态码
    * @param string $message 提示信息
    * @param array $data 数据
    * return string
    */
    //设置静态方法
    public static function json($code,$message = '',$data = array()){
        if(!is_numeric($code)){
            return '';
        }
        //状态码、信息、数据组成的新数组
        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data
        );

        echo json_encode($result);
        exit();
    }

    /**
    * 按 xml 方式输出通信数据
    * @param integer $code 状态码
    * @param string $message 提示信息
    * @param array $data 数据
    * return string
    */
    public static function xml($code,$message,$data){

        if(!is_numeric($code)){
            return '';
        }

        $result = array(
            'code' => $code,
            'message' => $message,
            'data' => $data
        );

        //修改 http 头信息
        header("Content-Type:text/xml");
        //xml头信息
        $xml = "<?xml version='1.0' encoding='utf-8'?>";
        //根节点开始标签
        $xml .= "<root>";

        $xml .= self::xmlToEncode($result);

        //根节点结束标签
        $xml .= "</root>";

        echo $xml;
        exit();
    }

    //解析$result至xml
    public static function xmlToEncode($data){
        $xml = $attr = "";
        foreach($data as $k=>$v){
            //如果$k是数字(data(code,message,data中的data)数据里面还含有索引数组),要进行如下判断
            if(is_numeric($k)){
                $attr = "id='{$k}'";
                $k = 'item ';
            }

            $xml .= "<{$k}{$attr}>";
            //如果$v是数组，则递归调用该方法
            if(is_array($v)){
                $xml .= self::xmlToEncode($v);
            }else{
                $xml .= $v;
            }
            $xml .= "</{$k}>";
        }

        return $xml;
    }
}