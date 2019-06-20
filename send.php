<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(dirname(dirname(__FILE__))) . '/vendor/weixin/Weixin.php';

class Send extends My_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->model('RedpackLog_model');
    }

    public function send()
    {
        $openid = $this->getWeixinInfo();
        if (!in_array($openid, array('obKkbt2mtAAmOMDAfwuj1YuhRXPA', 'obKkbt3IckXGjMXryGeiq_XEEdmE', 'obKkbt_j9jtwaQW9WMptPr5hTYcM'))) {
            return false;
        }

        $info = $this->RedpackLog_model->getSecret();

        $url = $this->sendRedPack($info['amount']);
        $this->RedpackLog_model->updateById(array('redpack_url' => $url), $info['id']);
        header('Location: '.$url);
    }

    protected function getWeixinInfo()
    {
        $wxConfig = config_item('weixin');
        $weixin = new Weixin($wxConfig['token'], $wxConfig['app_id'], $wxConfig['securet'], $this->db);
        $weixin->getAccessToken();
        $code = requestGetString('code');
        $openid = $weixin->getOpenidFromOauth20Code($code);
        
        return $openid;
    }

    protected function sendRedPack($amount)
    {
        $url = 'http://www.yaoyaola.cn/index.php/exapi/hbticket';

        $postData = array();
        $postData['uid'] = '26341';
        $postData['type'] = 0;
        $postData['money'] = $amount;
        $postData['orderid'] = time() . '-' . str_pad(rand(0, 10), 4, '0') ;
        $postData['reqtick'] = time();
        $postData['sign'] = md5($postData['uid'].$postData['type'].$postData['orderid'].$postData['money'].$postData['reqtick'].'PingAnJianAnWANGLUOJINDU');
        $postData['title'] = '破冰行动竞答活动红包';
        $postData['sendname'] = '平安静安';
        $postData['wishing'] = '平安静安';

        $o = "";
        foreach ( $postData as $k => $v ) 
        { 
            $o.= "$k=" . urlencode( $v ). "&" ;
        }
        $postData = substr($o,0,-1);
        $url = $url.'?'.$postData;
        $resJson = $this->post($url, '');
        $resArr = json_decode($resJson, true);
        if (!empty($resArr['ticket'])) {
            return 'http://www.yaoyaola.cn/index.php/exapi/gethb?uid=26341&ticket=' . $resArr['ticket'];
        } else {
            return false;
        }
    }

    protected function post($url, $data = '')
    {
       //初使化init方法
       $ch = curl_init();
       //指定URL
       curl_setopt($ch, CURLOPT_URL, $url);
       //设定请求后返回结果
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
       //声明使用POST方式来进行发送
       curl_setopt($ch, CURLOPT_POST, 1);
       //发送什么数据呢
       curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

       //忽略证书
       curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
       curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

       //忽略header头信息
       curl_setopt($ch, CURLOPT_HEADER, 0);
       //设置超时时间
       curl_setopt($ch, CURLOPT_TIMEOUT, 10);
       //发送请求
       $output = curl_exec($ch);

       //关闭curl
       curl_close($ch);

       //返回数据
       return $output;
    }
}