$('.testomonialslide').slick({

    autoplay: true,
    mobileFirst: true,


responsive: [
    {
        breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
    },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                arrow: false


            }
        }

    ]
});



$('.slider').slick({
    autoplay: true,
    mobileFirst: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<i class="fa-solid fa-circle-left left_arrow">',
    nextArrow: '<i class="fa-solid fa-circle-right right_arrow"></i>',
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows:true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }

    ]
});