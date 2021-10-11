$(function () {
  $(".hamburger, .menu__list-link").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".menu").toggleClass("active");
  });

  $(".menu").on("click", function (e) {
    e.preventDefault();
    const id = $(e.target).attr("href");
    const top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  //Tabs
  $(".tab").on("click", function (e) {
    $(this)
      .addClass("tab--active")
      .siblings()
      .removeClass("tab--active")
      .closest(".tabs-wrapper")
      .find(".tab-content")
      .removeClass("tab-content--active")
      .eq($(this).index())
      .addClass("tab-content--active");
  });

  //Accordion

  $(".accordion__text").hide();

  $(".accordion__item-title").on("click", function () {
    $(".accordion__item-title").removeClass("accordion__item-title--active");
    $(".accordion__text").hide();
    $(this).addClass("accordion__item-title--active").next().show();
  });

  // Order slider

  const swiper = new Swiper(".swiper-order", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-order-next",
      prevEl: ".swiper-order-prev",
    },
  });

  const swiper2 = new Swiper(".swiper-portfolio-1", {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },

      480: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.2,
        spaceBetween: 15,
      },
      1140: {
        slidesPerView: 3.8,
        spaceBetween: 15,
      },
    },
  });

  const swiper3 = new Swiper(".swiper-portfolio-2", {
    loop: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },

      480: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.2,
        spaceBetween: 15,
      },
      1140: {
        slidesPerView: 3.8,
        spaceBetween: 15,
      },
    },
  });
});
