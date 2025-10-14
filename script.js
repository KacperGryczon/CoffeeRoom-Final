const nav = document.getElementsByClassName('nav');
const menu = document.getElementById('menu');
const kontakt = document.getElementById('kontakt');
function openSidebar() {
  nav[0].classList.add('show');
}

function closeSidebar() {
  nav[0].classList.remove('show');
}

document.addEventListener('click', function (e) {
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

function scrollToMenu() {
  menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToKontakt() {
  kontakt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const modal1 = document.getElementById('card1-modal');
const modal1Btn = document.getElementById('menuCard1Button');
const modal2 = document.getElementById('card2-modal');
const modal2Btn = document.getElementById('menuCard2Button');
const modal3 = document.getElementById('card3-modal');
const modal3Btn = document.getElementById('menuCard3Button');

modal1Btn.addEventListener('click', () => {
  modal1.showModal();
});

modal1.addEventListener('click', e => {
  if (e.target === modal1) {
    modal1.close();
  }
});

modal2Btn.addEventListener('click', () => {
  modal2.showModal();
});

modal2.addEventListener('click', e => {
  if (e.target === modal2) {
    modal2.close();
  }
});
modal3Btn.addEventListener('click', () => {
  modal3.showModal();
});

modal3.addEventListener('click', e => {
  if (e.target === modal3) {
    modal3.close();
  }
});
