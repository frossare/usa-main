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


window.addEventListener("scroll", function(e)  {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("header").style.background = "#14191D";
    document.getElementById("header-logo").style.width = "133px";
  } else {
    document.getElementById("header").style.height = "140px";
    document.getElementById("header").style.background = "#14191DB2";
    document.getElementById("header-logo").style.width = "201px";
  }
});


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
    let mapSetings = {center: { lat: Number, lng: Number }, zoom: 8, };

    mapSetings.center.lat= Number(document.getElementById("map").attributes.lat.value);
    mapSetings.center.lng= Number(document.getElementById("map").attributes.lng.value);

    map = new google.maps.Map(document.getElementById("map"), mapSetings);
  }
  window.initMap = initMap;

})



