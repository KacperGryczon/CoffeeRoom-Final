const nav = document.getElementsByClassName('nav');

function openSidebar(){
    nav[0].classList.add('show');
};

function closeSidebar(){
    nav[0].classList.remove('show');
};

document.addEventListener('click', function(e){
    
    const openBtn = e.target.closest('.openSidebar');
    const closeBtn = e.target.closest('.closeSidebar');
    if (openBtn) return;
    if (!nav) return;
    if (closeBtn) {
        nav.classList.remove('show');
        return;
    }
    if (nav.classList.contains('show') && !e.target.closest('.nav')) {
        nav.classList.remove('show');
    }
});