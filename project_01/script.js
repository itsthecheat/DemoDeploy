"use strict";
$(document).ready(function () {



console.log("linked");

$(document).mousemove(function(event){
  $('.dog').css({'top':event.pageY, 'bottom':event.pageX,
  'left':event.pageX, 'right':event.pageY});
});

//define variables for width, height and x, y axis of each div
var $dog = $('.dog');
var $cat = $('.cat');

var $dogH = $($dog).outerHeight(true);
var $dogW = $($dog).outerWidth(true);
var $dogX = $($dog).position();
var $dogY = $($dog).position();

var $dogSideOne = $dogH + $dog
var $dogSideTwo =

var $catH = $($cat).outerHeight(true);
var $catW = $($cat).outerWidth(true);
var $catX = $($cat).position();
var $catY = $($cat).position();

var $catSideOne =
var $catSideTwo =





});
