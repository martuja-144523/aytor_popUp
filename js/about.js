$(function() {
    $('.stop').counterUp();
    
    
    // teachers protfolio
    $('.auto').slick({
        slidesToShow:4 ,
        arrows: false ,
        dots:true,
        dotsClass: 'ban_dots',
    })
    // master slides 
    $('.master_slide').slick({
        arrows: false ,
        dots:true,
        dotsClass: 'ban_dots',
    })
    $('.insta').slick({
        slidesToShow:6 ,
        arrows: false ,
        dots:true,
        dotsClass: 'ban_dots',
    })
    // back to top js 
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
        if( scrollSize >100){
            $('.backTop').show(500)
        } else{
            $('.backTop').hide(500)
        }
    });

    $('.backTop').on('click',function () {
        $('html,body').animate({
            scrollTop:0
        })
    });
    // back to top js ends 
});