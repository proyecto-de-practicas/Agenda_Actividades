$(document).ready(function(){
    if($(window).width() > 300){
        $('.efecto').css({
            opacity:0,
            marginTop:-70
        });
        
        $('.efecto').animate({
            opacity:1,
            marginTop:'-0px'
        },1700);
    }
})