// even saat meng scroll page --//
$('.page-scroll').on ('click', function(){


// ambil isi href
var tujuan = $(this).attr('href');

// tangkap elemen ybs
var elemenTujuan = $(tujuan);


// pindah scroll
$('body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1000, 'easeInOutExpo');
});



