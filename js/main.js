var swiper1 = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20, 
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
      }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 20, 
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
      }
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20, 
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
      }
  });

  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 20, 
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
      }
  });
  