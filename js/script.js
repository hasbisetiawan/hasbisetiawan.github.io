// membuat theme dark
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
let navbar = document.querySelector('.navbar');
themeSwitch.onclick = function(){
  themeSwitch.classList.toggle('active');
  body.classList.toggle('dark');
  navbar.classList.toggle('navbar-dark');
}

// elmen pada saat link di klik
$('.page-scroll').on('click', function(e){
  // ambil isi href
  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top - 70
  },'swing');

  e.preventDefault();
});
