const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".pv-wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


//declaring variables
var btnContact = document.querySelector(".pv-btn-contact");
var toggleMenu = document.querySelectorAll(".pv-toggle-menu");
var menuMobile = document.querySelector(".pv-menu-mob");

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}


//slider box
const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



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

const carouselWrapper = document.getElementById('carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');

// Clone o primeiro item e adicione ao final
const cloneFirstItem = items[0].cloneNode(true);
carouselWrapper.appendChild(cloneFirstItem);

let currentIndex = 0;

// Função para ajustar o índice atual
function adjustIndex(index) {
  if (index === items.length) {
    currentIndex = 0;
  } else if (index === -1) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }
}

