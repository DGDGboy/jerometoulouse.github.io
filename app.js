
window.onscroll = function () {

    if (document.documentElement.scrollTop > 499) {
        document.getElementById("retour").style.background = "#f7b022";
        document.getElementById("up").style.color = "white";
    }
    else {
        document.getElementById("retour").style.background = "none";
        document.getElementById("up").style.color = "transparent";
    }


}
$(function(){
    $("#up").click(function(){
        $("html, body").animate({scrollDown: 0},"slow");
    });
});
