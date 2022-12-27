//declaring variables
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');

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
