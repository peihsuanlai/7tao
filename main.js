import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper',{
    slidesPerView: "auto",
    speed: 6000,
    loop: true,
    autoplay: {
        delay: 0,
      },
});