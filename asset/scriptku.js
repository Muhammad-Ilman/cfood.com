// DOM navbar resvonsive

// ambil elemen checkbox
const menuToogle = document.querySelector('.menu-toogle input');
// abmil elemen navbar unordered list
const nav = document.querySelector('nav ul');
// menambah event ketika di click
menuToogle.addEventListener('click', function() {
  // menmambah class baru saat event dijalankan
  nav.classList.toggle('navbar-responsive');
}
);