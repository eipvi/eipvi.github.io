//declaring variables
var btnContact = document.querySelector('.pv-btn-contact');
var toggleMenu = document.querySelectorAll('.pv-toggle-menu');
var menuMobile = document.querySelector('.pv-menu-mob');

//page preloader
window.addEventListener('load', function(){
    var pagePreloder = document.querySelector('.pv-preloader')

    this.setTimeout(function (){
    pagePreloder.classList.add('pv-fade-out');
    },1000);
});


//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.pv-contact-info');
    boxContact.classList.toggle('pv-is-open');
    this.classList.toggle('pv-change-icon');
});

//page Preloader


//opening and closing menu mobile


//abrindo e fechando menu mobile

for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.pv-menu-overlay');
        menuMobile.classList.toggle('pv-menu-is-closed');
        menuMobile.classList.toggle('pv-menu-is-open');
    });
}

//abrindo e fechando modal O.
for (var i = 0; i < toggleModal.length; i++) {
    toggleMenu[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#pv-modal-orcamento');
        var overlay = document.querySelector('.pv-overlay');
        overlay.classList.toggle('pv-is-open');
        menuMobile.classList.toggle('pv-menu-is-open');
    });
}

pv-contact-info