
// even saat meng scroll page --//
$('.page-scroll').on('click', function(e){


// ambil isi href
var tujuan = $(page-scroll).attr('href');

// tangkap elemen ybs
var elementujuan = $(tujuan);


// pindah scroll
$('body').animate({
    scrollTop: elementujuan.offset().top - 50
}, 1250, 'easeInOutExpo');

// e.preventDefault();

});


// parallax
// about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });



    // portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });


    }
});

