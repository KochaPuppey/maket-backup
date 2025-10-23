let popupCall = document.querySelector('.popup__call');
let popupOpenCall = document.querySelector('.contacts_call');
let popupCloseCall = document.querySelector('.popup__call__close')
let overlay = document.querySelectorAll('.main, .footer__main,.sidebar')

popupOpenCall.addEventListener('click', function () {
  if (popupCall.classList.contains('popup__show')) {
   popupCall.classList.remove('popup__show')
    overlay.forEach(el => {
      el.classList.remove('overlay');
    })
  }
  else {
    popupCall.classList.add('popup__show')
    overlay.forEach(el => {
      el.classList.add('overlay');
    })
  }
  }
);

popupCloseCall.addEventListener('click', function () {
popupCall.classList.remove('popup__show');
    overlay.forEach(el => {
      el.classList.remove('overlay');
    })
}
);

let popupChat = document.querySelector('.popup__chat');
let popupOpenChat = document.querySelector('.contacts_chat');
let popupCloseChat = document.querySelector('.popup__chat_close');

popupOpenChat.addEventListener('click', function () {
  if (popupChat.classList.contains('popup__show')) {
    popupChat.classList.remove('popup__show')
  }
  else {
    popupChat.classList.add('popup__show');
    overlay.forEach(el => {
      el.classList.add('overlay');
    })
    }
  }
  );

popupCloseChat.addEventListener('click', function () {
  popupChat.classList.remove('popup__show');
  overlay.forEach(el => {
    el.classList.remove('overlay');
  })
  }
);

let popupText = document.querySelector('.menu__whoIsMe_text-popup')
let popupTextOpen = document.querySelector('.menu__whoIsMe__show-all')

popupTextOpen.addEventListener('click', function () {
    if (popupText.classList.contains('menu__whoIsMe_text-popup__open')) {
      popupText.classList.remove('menu__whoIsMe_text-popup__open')
      popupTextOpen.classList.remove('active')
      popupTextOpen.textContent = 'Читать далее'
    }

    else {
      popupText.classList.add('menu__whoIsMe_text-popup__open')
      popupTextOpen.classList.add('active')
      popupTextOpen.textContent = 'Скрыть'
    }
  }
)

let popupBrand = document.querySelector('.popup-brands__container');
let brandsOpen = document.querySelector('.popup-brands__button-open');
let arrowRotate = document.querySelector('.popup-brands__button')

brandsOpen.addEventListener('click', function () {
  if (popupBrand.classList.contains('popup-show')) {
    popupBrand.classList.remove('popup-show');
    brandsOpen.textContent = 'Показать все';
    arrowRotate.classList.remove('active');
  } else {
    popupBrand.classList.add('popup-show');
    brandsOpen.textContent = 'Скрыть';
    arrowRotate.classList.add('active');
  }
});

let popupTechnic = document.querySelector('.technics-popup_container')
let technicOpen = document.querySelector('.popup-technics__button')

technicOpen.addEventListener( 'click', function () {
  if (popupTechnic.classList.contains('technics-popup_container__open')){
    popupTechnic.classList.remove('technics-popup_container__open');
    technicOpen.classList.remove('active');
    technicOpen.textContent = 'Показать все';
  }
  else {
    popupTechnic.classList.add('technics-popup_container__open');
    technicOpen.classList.add('active');
    technicOpen.textContent = 'Cкрыть';
  }
  }
)

const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const grid = document.querySelector('.grid');
const overlayElements = document.querySelectorAll('.main, .footer__main');
const sidebarClose = document.querySelector('.sidebar-close');

burger.addEventListener('click', function (e) {
  e.stopPropagation();

  const isOpen = sidebar.classList.toggle('sidebar-open');
  grid.classList.toggle('grid-sidebarOpen', isOpen);
  overlayElements.forEach(el => el.classList.toggle('overlay', isOpen));
});

document.addEventListener('click', function (e) {
  const clickInsideSidebar = sidebar.contains(e.target);

  if (!clickInsideSidebar && sidebar.classList.contains('sidebar-open')) {
    sidebar.classList.remove('sidebar-open');
    grid.classList.remove('grid-sidebarOpen');
    overlayElements.forEach(el => el.classList.remove('overlay'));
  }
});

sidebarClose.addEventListener('click', function () {
  sidebar.classList.remove('sidebar-open');
  grid.classList.remove('grid-sidebarOpen');
  overlayElements.forEach(el => el.classList.remove('overlay'));
})

let swiper1, swiper2, swiper3;

function initSwipers() {
  if (window.innerWidth <= 767 && !swiper1) {
    swiper1 = new Swiper('.swiper_first', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_first .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper1) {
    swiper1.destroy(true, true);
    swiper1 = null;
  }

  if (window.innerWidth <= 767 && !swiper2) {
    swiper2 = new Swiper('.swiper_second', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_second .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper2) {
    swiper2.destroy(true, true);
    swiper2 = null;
  }
  if (window.innerWidth <= 767 && !swiper3) {
    swiper3 = new Swiper('.swiper_third', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_third .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper3) {
    swiper3.destroy(true, true);
    swiper3 = null;
  }
}

initSwipers();
window.addEventListener('resize', initSwipers);