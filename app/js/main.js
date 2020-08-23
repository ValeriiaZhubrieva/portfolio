$(function(){
    $('.portfolio__inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9102 23.9648L0.933594 12L12.9102 0.0351562L13.9648 1.08984L3.06641 12L13.9648 22.9102L12.9102 23.9648Z" fill="#555555"/></svg></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0351562 22.9102L10.9336 12L0.0351562 1.08984L1.08984 0.0351562L13.0664 12L1.08984 23.9648L0.0351562 22.9102Z" fill="#555555"/></svg></button>',
        responsive: [
            {
                breakpoint: 675,
                settings: {
                dots:true,
                arrows: false,
              }
            },
          ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
});