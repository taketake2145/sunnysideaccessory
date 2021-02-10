<?php

// お手製のPHPファイルを読み込む
include_once("functions/index.php");

// head.php で必要な必須変数
$head_title = "Sunny Side Accessory";
$ogp_img = ASSETS_PATH."/ogp.jpg";
?>
<!doctype html>
<html class="prepare">
	<?php include_once("include/head.php"); ?>
	<body class="body">
    <div class="content">
      <?php include_once("include/header.php"); ?>
      <div class="main">
        <?php include_once("include/mainvisual.php"); ?>
        <?php include_once("include/works.php"); ?>
      </div>
      <?php include_once("include/footer.php"); ?>
    </div>
    
    <?php include_once("include/splash.php"); ?>
		<?php include_once("include/js.php"); ?>
	</body>
</html>
