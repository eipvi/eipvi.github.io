//declaring variables
var btnContact = document.querySelector('.jl-btn-contact');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');

//page preloader
window.addEventListener('load', function(){
    var pagePreloder = document.querySelector('.jl-preloader')

    this.setTimeout(function (){
    pagePreloder.classList.add('jl-fade-out');
    },1000);
});


//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

//page Preloader


//opening and closing menu mobile


//abrindo e fechando menu mobile

for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListenner('click', function () {
        var overlay = document.querySelector('.jl-menu-overlay');
        menuMobile.classList.toggle('jl-menu-is-closed');
        menuMobile.classList.toggle('jl-menu-is-open');
    });
}

//abrindo e fechando modal O.
for (var i = 0; i < toggleModal.length; i++) {
    toggleMenu[i].addEventListenner('click', function () {
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');
        var overlay = document.querySelector('.jl-overlay');
        overlay.classList.toggle('jl-is-open');
        menuMobile.classList.toggle('jl-menu-is-open');
    });
}

jl-contact-info