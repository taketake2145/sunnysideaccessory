/**
 * 共有ボタンをタップする
 */
$(function () {
  $(".js-link-share").on("click", function () {
    let pos = $(".js-works-explain").offset().top;
  
    $(this).removeClass("hover");
    $("body, html").animate({
      scrollTop: pos
    });
    return false;
  });
});