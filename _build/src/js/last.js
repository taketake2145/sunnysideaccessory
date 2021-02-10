$(function(){
  
  $("a").on(eventover, function () {
    $(this).addClass("hover");
  }).on(eventout, function () {
    $(this).removeClass("hover");
  });
});
