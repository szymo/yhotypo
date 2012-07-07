$(document).ready(function(){
  layoutr = function () {
    var res = $(window).width();
    var page = $('#page');
    var mode;
    if(res > 1680) {
      mode = 1920;
    } else if(res <= 1680 && res > 1440) {
      mode = 1680;
    } else if(res <= 1440 && res > 1280) {
      mode = 1440;
    } else if(res <= 1280 && res > 1024) {
      mode = 1280;
    } else if(res <= 1024) {
      mode = 1024;
    }
    $('#page').attr('class', 'r'+mode);
  };
  layoutr();
  $(window).resize(function() {
    layoutr();
  });
})
;
