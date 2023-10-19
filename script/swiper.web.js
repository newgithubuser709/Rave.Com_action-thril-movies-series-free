// swiper js props

swiper = new Swiper('.swiper', {
    effect: "coverflow",
    spaceBetween: 50,
    // grabCursor: true,

    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});

// on web loaded slide move to next 

var swiper = document.querySelector('.swiper', {}).swiper;

swiper.slideNext();