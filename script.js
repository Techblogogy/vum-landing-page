
function slideOut () {
    $("#vm-test-area").addClass('fadeIn');
    $("#vm-greeting-area").addClass('fadeOut');
}

var curQst = 1;
function nextQst() {
    $("#q"+curQst).fadeOut(300, function () {

        curQst++;
        $("#q"+curQst).fadeIn(300);
    });

    // $("#q"+curQst).animate({ left: "+=50" }, 1000, function () {
    //
    // });

    // $("#q"+curQst).effect("slide", {"direction": "left", "mode": "hide"}, 1000);
    // curQst++;
    // $("#q"+curQst).effect("slide", {"direction": "right", "mode": "show"}, 1000);
}
