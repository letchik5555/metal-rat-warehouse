//alert('старт')
document.addEventListener("DOMContentLoaded", function () {
  /*==========  hero-swiper  ========*/
  const swiper = new Swiper('.hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {   //автопрокрутка
      delay: 1200,  //интервал 6 сек
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },
    a11y: {
      paginationBulletMessage: 'название слайда {{index}}',
    }
  });
  //alert('hero-swiper ok')
  /*======  galeri-swiper  ========*/
  let galswiper = new Swiper('.galeri-swiper', {
    loop: true, //бесконечный цикл прокрутки
    // when window width is >= 320px
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 50,
    pagination: {
      el: ".galery .galeri-swiper__pagination",
      clickable: true,
      //slideToClickedSlide: true,
      type: "fraction"//вид счетчика -цифры (по умолчанию - точки)
    },
    navigation: {
      nextEl: ".galeri-btn-left",
      prevEl: ".galeri-btn-right"
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 34
      },
      // when window width is >= 769px
      740: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 1025px
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    },

    allowTouchMove: false,
  });


  //alert('galeri-swiper ок')
  /*====== events-swiper  ========*/
  const sswiper = new Swiper('.event__swiper-js', {
    slidesPerView: 1,
    // speed: 400,
    spaceBetween: 50,
    //кол-во точек
    slidesPerGroup: 2,
    loop: true,
    grid: {
      // rows: 1,
      fill: "column"
    },
    // autoplay: {
    //   delay: 5000},
    pagination: {
      el: ".event .event__swiper-pagination",
      clickable: true,

    },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    //название на руссском языке
    a11y: {
      paginationBulletMessage: 'название слайда {{index}}',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 34,
        slidesPerGroup: 1
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 5
      },
      // when window width is >= 1500px
      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }


  });
  //alert('events-swiper ок')


  /*======== proyect-swiper ===============*/
  const projectSwiper = new Swiper('.js-project', {

    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".project__swiper-button-next",
      prevEl: ".project__swiper-button-prev"
    },

    breakpoints: {
      // when window width is >= 650px
      650: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      // when window width is >= 1500px
      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    a11y: false,
    // стрелки →/←
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }

  });
  //alert('proyect-swiper ок')

  /*======  dropdown  ========*/
  document.querySelectorAll('.btn-styles').forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".nav-box");
      document.querySelectorAll(".btn-styles").forEach(el => {
        if (el != btn) {
          el.classList.remove(".nav-styles__svg");
        }
      });
      document.querySelectorAll(".nav-box").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("nav-box_active");
        }
      })
      dropdown.classList.toggle("nav-box_active");
      btn.classList.toggle("nav-styles__svg")
    })
  })
  /*---- закрытие по click вне поля ----*/
  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".nav-styles__list")) {
      document.querySelectorAll(".nav-box").forEach(el => {
        el.classList.remove("nav-box_active");
      })
      document.querySelectorAll(".btn-styles").forEach(el => {
        el.classList.remove("nav-styles__svg");
      });
    }
  })
  //alert('dropdown ок')
  /*=================== searh =======*/

  document.getElementById('open-search-form').addEventListener('click', (e) => {
    //находим элемент который должен сработать по click и добавляем его (add)
    document.getElementById('search-form').classList.add('search-form_show')

    document.getElementById('open-search-form').classList.add('vario-close')
    // document.getElementById('header__logo').classList.add('header__logo-none')
  })
  //закрытие формы при click на close
  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
    document.getElementById('open-search-form').classList.remove('vario-close')
    // document.getElementById('header__logo').classList.remove('header__logo-none')
  })
  /*========== burger ==========*/
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.add("open")
  })
  document.getElementById("closse").addEventListener("click", function () {
    document.querySelector("header").classList.remove("open")
  })
  /*========= выпадашка (choices) ==========*/
  const element = document.querySelector(".js-choice");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""//,
    //position:'bottom'
  })
  //alert('searh ок')
  /*============ modal ======*/
  // Открыть модальное окно
  document.getElementById("open-modal_one").addEventListener("click", function () {
    document.getElementById("galery-modal__one").classList.add("open");
  })
  // Закрыть модальное окно
  document.getElementById("close-modal-btn").addEventListener("click", function () {
    document.getElementById("galery-modal__one").classList.remove("open");
  })
  // Закрыть при Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      document.getElementById("galery-modal__one").classList.remove("open")
    }
  });
  // Закрыть вне окна
  document.querySelector("#galery-modal__one .window-modal__block-one-content").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  document.getElementById("galery-modal__one").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
  });
  //alert('modal ок')

  /*======== events ======*/
  let gallerySlider = new Swiper(".js-events-swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: '.events .events__swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: ".events__swiper-btn-next",
      prevEl: ".events__swiper-btn-prev"
    },

  });
  //alert ('events ok')
  /*======= catalog ======*/
  new Accordion('.js-catalog-accordion');

  document.querySelectorAll('.subcatalog__link').forEach((item) =>
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.catalog__left-box').forEach(
        (child) => child.classList.remove('catalog__left-box--active')
      );

      document.querySelectorAll('.subcatalog__link').forEach(
        (child) => child.classList.remove('subcatalog__link--active')
      );

      item.classList.add('subcatalog__link--active');
      document.getElementById(id).classList.add('catalog__left-box--active');

    })

  );
  /*строка ниже должна возвращать к первому пункту при перезагрузке - но это происходит без нее Почему?*/
  // document.querySelector('.subcatalog__link').click();
  //alert('catalog ok')
  /*========HINT===============*/
  tippy('[data-tippy-content]');

  //alert('HINT ок')
  /*======== contact ===============*/
  const validation = new JustValidate('#js-contact-form', {
    errorLabelStyle: {//цвет шрифта ошибки-сообщения
      color: '#D11616'
    }
  })

  validation
    .addField('#contact__form-name', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Введите имя"
      },
      {
        rule: 'maxLength',
        value: 10,
        errorMessage: "Недопустимый формат"
      }
    ])

    .addField('#contact__form-tel', [
      {
        rule: 'required',
        value: 9,
        errorMessage: "Вы не ввели телефон"
      },
      {
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return phone.length === 10
        },
        errorMessage: 'Недопустимый формат'

      }
    ])

  const selector = document.querySelector("#contact__form-tel");
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
  //alert('contact ok')
  // });
  /*======== map ===============*/
  // document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener
  function init() {
    let myMap = new ymaps.Map("contact__map", {
      center: [55.76125906899087, 37.60579549999998],
      zoom: 17
    });

    let placemark = new ymaps.Placemark([55.76125906899087, 37.60579549999998], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/maplabel.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [10, 10]

    });

    myMap.geoObjects.add(placemark);
  }

  ymaps.ready(init);

  //alert('map ok')
  /*======== scrool  ===============*/
  // directionsAuthorListElems.forEach(list => {
  //   new SimpleBar(list, {
  //     autoHide: false,
  //     scrollbarMaxSize: 28,
  //   });
  // });
  /*----------------*/
  // Array.prototype.forEach.call(
  //   document.querySelectorAll('.myElements'),
  //   (el) => new SimpleBar(el)
  // );
  /*-----------------*/
  new SimpleBar(document.getElementById('myElement'));
  //alert('scroll ok')


});
// alert('js всесь отработал правильно')








