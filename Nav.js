var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav_links');
    var navLinks = document.querySelectorAll('.nav_links');

    //toogle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');



        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
