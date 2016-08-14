
/*
    Checks if element is in viewport
*/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

/* Check for elements */
$("#vm-txt-1").inViewport(function (px) {
    if (px) {
        $(this).addClass("mediaInLeft");
    }
});
$("#vm-txt-2").inViewport(function (px) {
    if (px) {
        $(this).addClass("mediaInRight");
    }
});
$("#vm-txt-3").inViewport(function (px) {
    if (px) {
        $(this).addClass("mediaInLeft");
    }
});

$("#vm-block-5").inViewport(function(px) {
    if (px){
        $(this).addClass("fadeInLoad");
    }
})


function slideOut () {
    $("#vm-test-area").addClass('fadeIn');
    $("#vm-greeting-area").addClass('fadeOut');

    $("#vm-greeting-area").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
        $("#vm-greeting-area").hide();
    });
}

function largeLogo() {
    // setTimeout(function () {
    if (!$("#nav-logo").hasClass("logoLarge")) {
        $("#nav-logo").removeClass("logoShrink");
        $("#nav-logo").addClass("logoLarge");
    }
    // }, 4000);
}
function smallLogo() {
    // setTimeout(function () {
    if (!$("#nav-logo").hasClass("logoShrink")) {
        $("#nav-logo").removeClass("logoLarge");
        $("#nav-logo").addClass("logoShrink");
    }
    // }, 2000);
}

// $(document).scroll(function (e) {
//     console.log();
//
//     if ($(document).scrollTop() >= 200) {
//         smallLogo();
//     } else {
//         largeLogo();
//     }
// });

// window.onload = function () {
//     smallLogo();
//     largeLogo();
//
//     console.log($(document).scrollTop());
// }



var curQst = 1;
var maxQst = 2;

var score = 0;
var scoreI = 100/maxQst;

var bState = false;

function nextQst() {

    bState = !bState;

    if (bState) {

        $("#vm-next").html("Далі");

        // Disable all input elements in group
        $('input[name="qst-'+curQst+'"]').attr('disabled', 'disabled');

        // Check for selected answer correctnes
        if ( $("input[name=qst-"+curQst+"]:checked").attr("vm-correct") !== undefined ) {

            $("label[for='"+ $("input[name=qst-"+curQst+"]:checked").attr('id') +"']").addClass("vm-correct");

            score += scoreI;
            // console.log(score);

        } else {
            $("label[for='"+ $("input[name=qst-"+curQst+"][vm-correct]").attr('id') +"']").addClass("vm-correct");
            $("label[for='"+ $("input[name=qst-"+curQst+"]:checked").attr('id') +"']").addClass("vm-wrong");

        }

    } else {

        $("#vm-next").html("Перевірити");

        $("#q"+curQst).fadeOut(200, function () {

            curQst++;

            if (curQst <= maxQst) {
                $("#q"+curQst).fadeIn(200);
            } else {
                $("#vm-id-score").html( Math.round(score) );

                $("#vm-finnish").fadeIn(200);
                $("#vm-qst-foot").hide();
            }
        });

    }



    // $("#q"+curQst).animate({ left: "+=50" }, 1000, function () {
    //
    // });

    // $("#q"+curQst).effect("slide", {"direction": "left", "mode": "hide"}, 1000);
    // curQst++;
    // $("#q"+curQst).effect("slide", {"direction": "right", "mode": "show"}, 1000);
}

setTimeout(function () {
    $("#pr-qst-2").addClass("vm-bar-next");
}, 2000);
