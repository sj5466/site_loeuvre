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
    
    /*회원,비회원 클릭 시 효과*/
    $('.membership li').click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
    });
});