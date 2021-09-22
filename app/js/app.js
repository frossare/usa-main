// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper, {
  Navigation,
  Pagination,
  Thumbs
} from 'swiper';

import './mmenu/mmenu-light.js';
import './mmenu/mmenu-light.polyfills.js'; //IE

//import './select-pure/index.js'; 
//import 'select-pure';


document.addEventListener('DOMContentLoaded', () => {

  // slider
  Swiper.use([Navigation, Pagination, Thumbs]);
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper2 = new Swiper(".similar_products", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".botSwiper", {
    //loop: true,
    spaceBetween: 33,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".topSwiper", {
    //loop: true,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
  });
  // slider end


  //mmenu-light

  const menu = new MmenuLight(
    document.querySelector("#mob-menu"),
    "(max-width: 768px)"
  );

  const navigator = menu.navigation();
  const drawer = menu.offcanvas();

  document.querySelector("a[href='#mob-menu']")
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });

  //mmenu-light end
  
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  window.initMap = initMap;
 // initMap();
  console.log('1234');

})



