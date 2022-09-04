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

// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });
});



