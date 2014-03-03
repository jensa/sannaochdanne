adjustMenuItems = function(){
    var windowWidth = $(window).width ();
    if(windowWidth > 500){
        var newSizeVal = (windowWidth / 12)+30;
        var newSize = ""+newSizeVal+"%";
        $(".menuItem").css ('font-size', newSize);
    }
}
$( window ).on("resize", adjustMenuItems);
$( document ).ready( adjustMenuItems );