const wrapper = document.querySelector(".pv-wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".pv-wrapper i");
const carouselChildrens = [...carousel.children];

const btnContact = document.querySelector(".pv-btn-contact");
const toggleMenu = document.querySelectorAll(".pv-toggle-menu");
const menuMobile = document.querySelector(".pv-menu-mob");

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

//slider box
const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};
const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return;
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1500);
};
autoPlay();

//page preloader
// window.addEventListener('load', function(){
//     var pagePreloder = document.querySelector('.pv-preloader')

//     this.setTimeout(function (){
//     pagePreloder.classList.add('pv-fade-out');
//     },1000);
// });

//Abrindo e fechando informações de contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".pv-contact-info");
  boxContact.classList.toggle("pv-is-open");
  this.classList.toggle("pv-change-icon");
});

//page Preloader

//opening and closing menu mobile

//abrindo e fechando menu mobile

for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".pv-menu-overlay");
    menuMobile.classList.toggle("pv-menu-is-closed");
    menuMobile.classList.toggle("pv-menu-is-open");
  });
}

//abrindo e fechando modal O.
// for (var i = 0; i < toggleModal.length; i++) {
//     toggleMenu[i].addEventListener('click', function () {
//         var modalOrcamento = document.querySelector('#pv-modal-orcamento');
//         var overlay = document.querySelector('.pv-overlay');
//         overlay.classList.toggle('pv-is-open');
//         menuMobile.classList.toggle('pv-menu-is-open');
//     });
// }

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
