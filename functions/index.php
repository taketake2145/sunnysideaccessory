<?php
session_start();

date_default_timezone_set('Asia/Tokyo');

include_once("config.php");
define("WEBSITE_HOST", $config_domein);  // ホスト
define("ADMIN_EMAIL", "simplesimplesdesign@gmail.com");  // エラー時、メール通知する宛先
define("COOKIE_DOMAIN_NAME", WEBSITE_HOST);  // cookie用

// 公開パスとルートパス
$template_path = get_bloginfo('template_directory');
define("ASSETS_PATH", $template_path.'/assets');
define("ASSETS_LOOT", dirname(__FILE__).'/../assets');

// 本番環境かつプレビュー画面でないことを確認
$is_honban = ($_SERVER['HTTP_HOST'] === WEBSITE_HOST && (strpos($_SERVER['REQUEST_URI'],'/?preview') === false))? true: false;

// エラーを表示する（本番以外）
$is_error_display = ($is_honban)? 0: 1;
ini_set('display_errors', $is_error_display);


// common直下のphpファイルをすべて呼び出す
foreach(glob(dirname(__FILE__).'/common/{*.php}',GLOB_BRACE) as $file){
  if(is_file($file)){
    include_once($file);
  }
}

// original直下のphpファイルをすべて呼び出す
foreach(glob(dirname(__FILE__).'/original/{*.php}',GLOB_BRACE) as $file){
  if(is_file($file)){
    include_once($file);
  }
}

/**
 * テンプレートで利用する変数
 */

// サイト・ページのリンク情報
$site_url = "https://".WEBSITE_HOST;
$canonical_link = $site_url.parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);


$is_ja = is_lang_ja();  // 日本語使えるか判別する
$body_lang = (is_lang_priority_ja())? "body--ja": "body--en";  // 日本語優先か判別する
