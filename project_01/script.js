"use strict";
$(document).ready(function () {



console.log("linked");

$(document).mousemove(function(event){
  $('.dog').css({'top':event.pageY, 'bottom':event.pageX,
  'left':event.pageX, 'right':event.pageY});
});










});
