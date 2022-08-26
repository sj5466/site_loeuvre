$(function(){
    $(document).ready(function(){
      $('.gallery').bxSlider({
        auto:true,
        speed:400,
        pager:true,
        controls:true,
        autoHover:true,
        mode:'horizontal',
      });
    });
        	
    /*gnb 서브메뉴 보이게 하기*/
    $('.gnb li:first').mouseenter(function(){
        $('.sub_gnb').stop().fadeIn().animate({display:'block'},500);
    });

    $('.sub_gnb li').hide();
    $('.gnb li:first').mouseenter(function(){
        $('.sub_gnb li').stop().slideDown();
    }).mouseleave(function(){
        $('.sub_gnb li').stop().slideUp();
    });   

    /*top_button*/
    $(window).scroll(function(){
        if($(this).scrollTop()>= 1000){
            $('.top_btn').fadeIn();
        }else{
            $('.top_btn').fadeOut();
        }
    });
    $('.top_btn').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500,function(){
            $('.top_btn').fadeOut();
        });
    });
});