var swiper = new Swiper(".slide-video", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
        el: ".s-videos .swiper-pagination",
        clickable: true,
    },
    navigator: {
        nextEL: ".s-videos .btn-next",
        nextEL: ".s-videos .btn-prev"
    },
});