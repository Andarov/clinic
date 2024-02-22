import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".menu-swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: ".swipper-button-next",
      prevEl: ".swipper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    }
  });
  
  // reviews swiper
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
  
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  
    // pagination
    pagination: {
      el: '.reviews-swiper--swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-swiper--button-next',
      prevEl: '.reviews-swiper--button-prev',
    }
  });
  
  
  const doctorsSectionSwiper = new Swiper('.doctors-section-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  
    // pagination
    pagination: {
      el: '.doctors-section-swiper--swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.doctors-section-swiper--button-next',
      prevEl: '.doctors-section-swiper--button-prev',
    }
  });