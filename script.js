const navBar = document.getElementsByClassName('nav');

function openSidebar(){
    navBar[0].classList.add('show');
};

function closeSidebar(){
    navBar[0].classList.remove('show');
};