$(document).ready(function(){
    if($(window).width() > 800){
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