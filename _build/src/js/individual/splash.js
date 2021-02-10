$(function () {
  
  // TODO テストが終わったら削除
  if (location.href.indexOf("sunnysideaccessory.com") !== -1) {
    
  } else {
    $("html").removeClass("prepare");
    $(".js-splash").remove();
  }
  
  
  
  
  
  // 秒数はsplash.scss と連動
  const t = 1000;
  
  const _splash = $(".js-splash");
  
  // ファイル読み込み後（ここでは読み込んだとして2秒後）、スプラッシュ画面をフェードアウトする
  setTimeout(function () {
    _splash.addClass("end");
    
    
    setTimeout(function () {
      $("html").removeClass("prepare");
      _splash.fadeOut(function () {
        _splash.remove();
      });
    }, t);
  }, 2000);
});