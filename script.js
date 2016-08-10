
function slideOut () {
    $("#vm-test-area").addClass('fadeIn');
    $("#vm-greeting-area").addClass('fadeOut');
}

var curQst = 1;
function nextQst() {
    $("#q"+curQst).addClass('fadeOut');
    curQst++;
    $("#q"+curQst).addClass('fadeIn');
}
