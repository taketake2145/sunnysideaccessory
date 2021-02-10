<head>
	<?php include_once("google.php"); ?>
	<meta charset="utf-8">
	<title><?php echo $head_title; ?></title>
	<meta name="robots" content="ALL">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
  <meta property="og:title" content="<?php echo $head_title; ?>">
  <meta property="og:type" content="article">
  <meta property="og:url" content="<?php echo $canonical_link; ?>">
  <meta property="og:image" content="<?php echo $ogp_img; ?>">
	<link rel="shortcut icon" href="<?php echo ASSETS_PATH; ?>/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="<?php echo ASSETS_PATH; ?>/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="<?php echo ASSETS_PATH; ?>/icomoon-v1.0/style.css?t=<?php echo filemtime(ASSETS_LOOT."/icomoon-v1.0/style.css"); ?>">
	<link rel="stylesheet" href="<?php echo ASSETS_PATH; ?>/css/common.min.css?t=<?php echo filemtime(ASSETS_LOOT."/css/common.min.css"); ?>">
	<?php if (is_home()): ?>
	<link rel="canonical" href="<?php echo $canonical_link; ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>