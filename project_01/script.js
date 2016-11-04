"use strict";
$(document).ready(function() {

    console.log("linked");

    var $dog = $('.dog'); //global variables
    var body = $('body');
    var $cat = $('.cat');


    function newCat() { //creates a div w/ class cat, appends to body
        var cat = $('<div class="cat"></div>');
        body.append(cat);
        setInterval(function() { //moves cats randomly
            cat.css("top", Math.random() * window.innerHeight);
            cat.css("left", Math.random() * window.innerWidth);
        }, 1500)
    }

      for(var i=0; i<10; i++) { //create multiple cats
          newCat();
      }

    function getCollision(cat) { //collision detection for elements
        $(cat).each(function(index, cat) {
            var $dogH = $dog.outerHeight(true);
            var $dogW = $dog.outerWidth(true);
            var $dogX = $dog.position();
            var $dogY = $dog.position();

            var $catH = parseInt($(cat).css('height').replace('px', ''))
            var $catW = parseInt($(cat).css('width').replace('px', ''))
            var $catX = parseInt($(cat).css('left').replace('px', ''))
            var $catY = parseInt($(cat).css('top').replace('px', ''))


            if ($dogX.left < $catX + $catW &&
                $dogY.top < $catY + $catH &&
                $catX < $dogX.left + $dogW &&
                $catY < $dogY.top + $dogW) {
                $(cat).addClass('dead');
                setTimeout(function() {
                  $('.dead').remove();
                }, 2500);
                $('#score').prepend('<img src="images/cat_dead_sm.jpg">');
                console.log('boom');
            }
        })
    }


    $(document).mousemove(function(event) {
        $('.dog').css({
            'top': event.pageY,
            'bottom': event.pageX,
            'left': event.pageX,
            'right': event.pageY
        });
        $cat = $('.cat')
        getCollision($cat);
    })();

    function checkWinner() {
      if ($('.cat').length === 0) {
        alert("WOOF!")
      };
    };



});
