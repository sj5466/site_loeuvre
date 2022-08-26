$(function(){
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
    
    /*menu 클릭하면 나타나는 효과*/
    $('.menu_select li').click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
    });


    /*menu 클릭하면 나타나는 효과*/
    $('.indicator li').click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
    });

    /*top_button*/
    $(window).scroll(function(){
        if($(this).scrollTop()>= 800){
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