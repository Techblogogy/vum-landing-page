
function slideOut () {
    $("#vm-test-area").addClass('fadeIn');
    $("#vm-greeting-area").addClass('fadeOut');
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

        $("#vm-next").html("Далі");

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
