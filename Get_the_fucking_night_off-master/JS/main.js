$(document).ready(function () {

$("#menu").on("click",function () {
    var x = document.getElementById("myTopnav");
    if (x.className ==="topnav"){
        x.className +=" responsive";
    } else {
        x.className = "topnav";
    }
});

});