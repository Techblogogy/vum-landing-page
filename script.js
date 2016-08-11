
function slideOut () {
    $("#vm-test-area").addClass('fadeIn');
    $("#vm-greeting-area").addClass('fadeOut');
}

var curQst = 1;
var maxQst = 2;
function nextQst() {
    $("#q"+curQst).fadeOut(200, function () {

        curQst++;

        if (curQst <= maxQst) {
            $("#q"+curQst).fadeIn(200);
        } else {
            $("#vm-finnish").fadeIn(200);
            $("#vm-qst-foot").hide();
        }
    });

    // $("#q"+curQst).animate({ left: "+=50" }, 1000, function () {
    //
    // });

    // $("#q"+curQst).effect("slide", {"direction": "left", "mode": "hide"}, 1000);
    // curQst++;
    // $("#q"+curQst).effect("slide", {"direction": "right", "mode": "show"}, 1000);
}
