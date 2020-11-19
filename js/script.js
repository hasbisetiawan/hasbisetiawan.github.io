$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});
// elmen pada saat link di klik
$('.page-scroll').on('click', function(e){
	// ambil isi href
	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	},'swing');

	e.preventDefault();
 });

// memberi paralaxx

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

// about

// portfolio

if( wScroll > 800 ) {
	$('.portfolio .thumbnail').each(function(i) {
		setTimeout(function() {
			$('.portfolio .thumbnail').eq(i).addClass('muncul');
		}, 300 * (i+1));
	});

	
};


});
