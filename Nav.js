const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links');

    //toogle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');



        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
