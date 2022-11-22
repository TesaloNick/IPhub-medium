$('.services__slider').slick({
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

if (windowWidth <= 1255) {
  $('.services__slider').slick('slickRemove', amountOfSlidesServices - 1);
  $('.cases__slider').slick('slickRemove', amountOfSlidesCases - 1);
  $('.team__slider').slick('slickRemove', amountOfSlidesTeam - 1);
}

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
});



function toggleMenu() {
  $('.header__burger-menu').toggleClass('active-menu')
  $('.header__nav').toggleClass('active-menu')
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
}

function slowScroll(id) {
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
