// //--------------------выбор языка-------------------------

// var ddData = [
//   {
//     text: "EN",
//     value: 1,
//     selected: true,
//     imageSrc: "../img/header/flags/gb.svg"
//   },
//   {
//     text: "AD",
//     value: 2,
//     selected: false,
//     imageSrc: "../img/header/flags/ad.svg"
//   },
//   {
//     text: "RU",
//     value: 3,
//     selected: false,
//     imageSrc: "../img/header/flags/ru.svg"
//   },
//   {
//     text: "BY",
//     value: 4,
//     selected: false,
//     imageSrc: "../img/header/flags/by.svg"
//   },
//   {
//     text: "IS",
//     value: 5,
//     selected: false,
//     imageSrc: "../img/header/flags/yiddish.svg"
//   }
// ];

// --------------------слайдеры-------------------------

// $('#lan').ddslick({
//   data: ddData,
//   defaultSelectedIndex: 2,
// });

$('.services__slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  prevArrow: "<div class='prev'><img src='../img/main/button-arrow-right.svg' class='prev-arrow'></div>",
  nextArrow: "<div class='next'><img src='../img/main/button-arrow-right.svg' class='next-arrow'></div>",
  // variableWidth: true,
  // dots: true,
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1256,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.test-slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  prevArrow: "<div class='prev'><span>Назад</span><img src='../img/main/button-arrow-right.svg' class='prev-arrow'></div>",
  nextArrow: "<div class='next'><span>Вперед</span><img src='../img/main/button-arrow-right.svg' class='next-arrow'></div>",
});

$('.cases__slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  variableWidth: true,
  prevArrow: "<div class='prev'><img src='../img/main/button-arrow-right.svg' class='prev-arrow'></div>",
  nextArrow: "<div class='next'><img src='../img/main/button-arrow-right.svg' class='next-arrow'></div>",
  responsive: [
    {
      breakpoint: 1256,
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.team__slider').slick({
  infinite: false,
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  prevArrow: "<div class='prev'><img src='../img/main/button-arrow-right.svg' class='prev-arrow'></div>",
  nextArrow: "<div class='next'><img src='../img/main/button-arrow-right.svg' class='next-arrow'></div>",
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1256,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

//--------------------удаление слайдов при определенной ширине-------------------------

let amountOfSlidesServices = document.querySelectorAll('.service').length;
let amountOfSlidesCases = document.querySelectorAll('.case').length;
let amountOfSlidesTeam = document.querySelectorAll('.member').length;
let windowWidth = $(window).width();

if (windowWidth <= 1500 && windowWidth > 1256) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
} else if (windowWidth <= 1256 && windowWidth > 1000) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 2);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 2);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
} else if (windowWidth <= 1000 && windowWidth > 900) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 2);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 3);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 2);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 3);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
} else if (windowWidth <= 900 && windowWidth > 700) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 2);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 3);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 2);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 3);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 2);
} else if (windowWidth <= 700 && windowWidth > 450) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 2);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 3);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 4);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 2);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 3);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 4);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 2);
} else if (windowWidth <= 450) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 2);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 3);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 4);
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 5);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 2);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 3);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 4);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 5);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 2);
}
// $('.service').on('click', function () {
// console.log(this);
// $('.services__slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
// });

// if ($(window).width() <= 900) {
//   $('.steps__content-block').slick({
//     infinite: true,
//     arrows: false,
//     slidesToShow: 1,
//     dots: true,
//   });

//   // let paddingTopDots = 0;
//   // paddingTopDots = document.querySelector(".order__steps").offsetHeight;
//   // document.querySelector('.steps__content-block .slick-dots').style = `top: -${paddingTopDots + 50}px`;

//   // if ($(window).width() <= 450) {
//   //   document.querySelector('.steps__content-block .slick-dots').style = `top: -${paddingTopDots + 30}px`;
//   // };
// }

// $('.comments__slider').slick({
//   infinite: true,
//   arrows: false,
//   slidesToShow: 3,
//   variableWidth: true,
//   dots: true,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//         variableWidth: false,
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 1,
//         variableWidth: false,
//       }
//     }
//   ]
// });

// //--------------------определение цены-------------------------

// const arrowLeft = document.querySelector('.input__arrow-left');
// const arrowRight = document.querySelector('.input__arrow-right');
// const number = document.querySelector('.sessions__input');
// const multiplyNumber = document.querySelector('.input__multiply-number');
// const sessionsForm = document.querySelector('.sessions__form');

// arrowRight.addEventListener('click', () => {
//   number.value++
//   multiplyNumber.innerHTML = +number.value * 49;
// })

// arrowLeft.addEventListener('click', () => {
//   if (+number.value > 1) number.value--
//   multiplyNumber.innerHTML = +number.value * 49;
// })

// number.addEventListener('change', () => {
//   multiplyNumber.innerHTML = +number.value * 49;
// })

// sessionsForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   multiplyNumber.innerHTML = +number.value * 49;
// })

//-----------------------возрастающие числа------------------------------

function countup(className) {
  var countBlockTop = $("." + className).offset().top;
  var windowHeight = window.innerHeight;
  var show = true;

  $(window).scroll(function () {
    if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
      show = false;

      $('.' + className).spincrement({
        from: 1,
        duration: 4000,
      });
    }
  })
}

$(function () {
  countup("count", $(".count").text());
  // countup("count2", $(".count2").text());
  // countup("count3", $(".count3").text());
});

// //------------------------------всплывающие блоки-------------------------

// function appearup(classStart, classAppear) {
//   var show = true;

//   $(window).scroll(function () {
//     var distanceTop = $(classStart).offset().top;
//     if (show && ($(window).scrollTop() + window.innerHeight > distanceTop)) {
//       show = false;
//       $(classAppear).addClass('animate');
//     }
//   });
// }

// $(function () {
//   appearup(".help__title", ".help");
//   appearup(".second-video-block", ".second-app");
//   appearup(".workers", ".workers");
//   appearup(".advantages", ".advantages");
//   appearup(".selection__title", ".selection");
//   appearup(".about-service", ".about-service");
//   appearup(".sets", ".sets");
//   appearup(".order__title", ".order");
//   appearup(".comments", ".comments");
//   appearup(".service__title", ".service");
//   appearup(".child-help__title", ".child-help");
//   appearup(".footer__left-block", ".footer");
// });

//------------------------------меню-------------------------

function toggleMenu() {
  $('.header__burger-menu').toggleClass('active-menu')
  $('.header__nav').toggleClass('active-menu')
  // $('.open-menu-scroll').toggleClass('active-menu')
}

$(function () {
  $('.header__burger-menu').click(() => {
    toggleMenu()
  })
});

//------------------------------pop-up-------------------------

function popUp(button) {
  $(`.${button}`).click((event) => {
    event.preventDefault();
    $('.pop-up').toggleClass('active')
  })
}

$(function () {
  popUp('main__button-consultation')
  popUp('pop-up__container')
  popUp('pop-up__close')
  popUp('header__button-consultation')
  popUp('ban__button')
});

//------------------------------замена фона при непустом поле ввода-------------------------

function changeBackground(item) {
  item.onchange = function () {
    if (this.value.length > 0) {
      this.style.backgroundColor = "rgba(138, 138, 138, 0.15)";
    } else {
      this.style.backgroundColor = "rgba(138, 138, 138, 0.1)";
    }
  };
}

document.querySelectorAll('.pop-up__input').forEach(item => {
  changeBackground(item)
})

document.querySelectorAll('.pop-up__textarea').forEach(item => {
  changeBackground(item)
})

//------------------------------scroll-------------------------

function removeMenu() {
  $('.header__burger-menu').removeClass('active-menu')
  $('.header__nav').removeClass('active-menu')
  //   $('.open-menu-scroll').removeClass('active-menu')
}

function slowScroll(id) {
  // id.preventDefault()
  var offset = 0;
  // if (id === '.about-service') {
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top - offset - 144
  //   }, 500);
  //   removeMenu()
  // } else if (id === '.footer') {
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top + $(window).height()
  //   }, 500);
  //   removeMenu()
  // } else if (id === '.child-help__title') {
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top - offset - 144
  //   }, 500);
  //   removeMenu()
  // } else 
  if (id === '.header') {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    removeMenu()
  }
  return false;
}

//------------------------------выбор элемента из списка в тесте-------------------------

document.querySelectorAll('.test-slider__option').forEach(slide => slide.addEventListener('click', function (e) {
  e.preventDefault()
  let testList = this.parentNode.children
  for (let item of testList) {
    item.classList.remove("chosen")
  }
  this.classList.add("chosen");
}))

//------------------------------Элементы тест-слайдера-------------------------

const amountTestSlides = document.querySelectorAll('.test-slider__slide')
document.querySelector('.test__counter-slider > p > span:nth-of-type(2)').innerHTML = amountTestSlides.length; // изменение общего количества слайдов

function changeSlider() { // изменение номера атекущего слайда (onclick, mousemove, ontouchend)
  for (let i = 0; i < amountTestSlides.length; i++) {
    if (amountTestSlides[i].classList.contains('slick-current')) {
      document.querySelector('.test__counter-slider > p > span:nth-of-type(1)').innerHTML = `${i + 1}/`
      console.log(i);
    }
  }
}
