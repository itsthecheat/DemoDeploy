"use strict";
$(document).ready(function() {

    console.log("linked");

    var $dog = $('.dog');
    var $cat = $('.cat');
    var body = $('body');

function dogMove() {
  $(document).mousemove(function(event) {
        $('.dog').css({
            'top': event.pageY,
            'bottom': event.pageX,
            'left': event.pageX,
            'right': event.pageY
        });
        getCollision();
    });
}
  dogMove();
    function newCat() {
        var cat = $('<div class="cat"></div>');
        body.append(cat);
        return cat;
    }


    setInterval(function() {
        $cat.css("top", Math.random() * window.innerHeight);
        $cat.css("left", Math.random() * window.innerWidth);
    }, 2000)

    //define function for detectin collision
    //define variables for width, height and x, y axis of each div
    function getCollision() {

        var $dogH = $($dog).outerHeight(true);
        var $dogW = $($dog).outerWidth(true);
        var $dogX = $($dog).position();
        var $dogY = $($dog).position();
        // console.log($dogX)
        var $dogSideOne = $dogH + $dogY.top;
        var $dogSideTwo = $dogW + $dogX.left

        var $catH = $($cat).outerHeight(true);
        var $catW = $($cat).outerWidth(true);
        var $catX = $($cat).position();
        var $catY = $($cat).position();

        var $catSideOne = $catH + $catY.top;
        var $catSideTwo = $catW + $catX.left;
        // console.log('hhhh');
        // if ($dogX < $catSideTwo &&
        //     $dogY < $catSideOne &&
        //     $catX < $dogSideTwo &&
        //     $catY < $dogSideOne){
        //   console.log('boom!');
        // };
        if ($dogX.left < $catX.left + $catW &&
            $dogY.top < $catY.top + $catH &&
            $catX.left < $dogX.left + $dogW &&
            $catY.top < $dogY.top + $dogW) {
            console.log('boom');
            // $cat.remove();
        }
    };





});
