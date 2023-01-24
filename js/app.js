$(function() {
    $(window).load(function(){
        $('#loder').fadeOut('slow')
    });


    $('.slide').slick({
        arrows: false ,
        autoplay: true,
        autoplaySpeed: 5000 ,
        dots:true,
        dotsClass: 'ban_dots',
    });

    $('.recent_product_slid').slick({
        slidesToShow: 4,
        prevArrow :'<i class="fa-solid fa-chevron-left recent_slider_icon slide_icon_left"></i>',
        nextArrow :'<i class="fa-solid fa-chevron-right recent_slider_icon slide_icon_right"></i>'
    });
    
    $('.deals_slide').slick({
        slidesToShow: 2 ,
        arrows: false ,
        dots:true,
        dotsClass: 'ban_dots',
    })

    

    $('#count_down').countdown('2023/12/31' , function(event) {
        var $this = $(this).html(event.strftime(''
        + '<div class="count_down_child"><span class="up">%D</span><span class="down">Days</span></div>'
        + '<span class="outer_span">:</span> '
        + '<div class="count_down_child"><span class="up">%H</span><span class="down">Hours</span></div> '
        + '<span class="outer_span">:</span> '
        + '<div class="count_down_child"><span class="up">%M</span><span class="down">Miniutes</span></div>'
        + '<span class="outer_span">:</span> '
        + '<div class="count_down_child"><span class="up">%S</span><span class="down">Seconds</span></div>'
    ))
    });

    $('.news_slide').slick({
        slidesToShow: 4 ,
        arrows: false ,
        dots:true,
        dotsClass: 'ban_dots',
    });

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
    $(window).on('scroll' , function () {
        var scrollSize = $(window).scrollTop()
        if (scrollSize > 100 ) {
            $('#mynav').addClass('.fixd')
        } else{
            $('#mynav').removeClass('.fixd')
            
        }
        console.log($(window).scrollTop())
    });

}) 

new VenoBox({
    selector: ".my_video"
});



