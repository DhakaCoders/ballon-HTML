(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});


$('.select-2-cntlr').select2();

if( $('.hamburger-cntlr').length ){
  $('.hamburger-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <=767){
    if( $('li.menu-item-has-children > a').length ){
      $('li.menu-item-has-children > a').click(function(e){
       event.preventDefault();
       $(this).next().slideToggle(300);
       $(this).parent().toggleClass('sub-menu-arrow');
     });
    }
}
	
if($("ul.slick-dots li").length == 1){
   $("ul.slick-dots").hide();
}
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


var swiper = new Swiper('.catagorySlider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.catagorySlider-arrows .swiper-button-next',
      prevEl: '.catagorySlider-arrows .swiper-button-prev',
    },
    breakpoints: {
       639: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1199: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1920: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }
  });

if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();







/*start of Noyon*/
  $('.bln-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.bln-accordion-menu').siblings().find('.bln-accordion-hdr').removeClass('active');
    $(this).parents('.bln-accordion-menu').find('.bln-accordion-des').slideToggle(300);
    $(this).parents('.bln-accordion-menu').siblings().find('.bln-accordion-des').slideUp(300);
  });

  if( $('.companyItemTagSlider').length ){
    $('.companyItemTagSlider').slick({
      dots: false,
      infinite: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
    });
}



/*start of Shariful*/


var containerWidth = $('.container').width();
var offset = (windowWidth - containerWidth);
var rgtOffSet = (offset / 2);
$('.service-lft-img').css('margin-right', rgtOffSet);

$(window).resize(function(){
  var windowWidth = $(window).width();
  var containerWidth = $('.container').width();
  var offset = (windowWidth - containerWidth);
  var rgtOffSet = (offset / 2);
  $('.service-lft-img').css('margin-right', rgtOffSet);
});

if( $('#sidebar').length ){
  $('#sidebar').stickySidebar({
      topSpacing: 50,
      bottomSpacing: 50
  });
}

if(windowWidth <= 767){
    $('.hireProSlider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    });
}

if( $('.hamburgar-cntlr').length ){
  $('.hamburgar-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}

/*start of Momin*/

/**
Slick slider
*/
if(windowWidth <= 767){
    $('.HowItWorksSlider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


/*start of Niaz*/
if($('.tol-tip').length){
  $('.tol-tip').mouseenter(function(){
    $(this).addClass('tol-tip-cntlr');
  });
  $('.tol-tip').mouseleave(function(){
    $(this).removeClass('tol-tip-cntlr');
  });
};
if($('#bln-nav').length){
  $('#bln-nav').onePageNav();
}


/*start of Zahir*/
if($('.fancybox').length){
  $(document).ready(function() {
    $(".fancybox").fancybox();
  });
}

/*start of Keshob*/
$('.create-a-job-form select').select2();
$('.select-2-cntlr').select2();

if($('.input-tol-tip').length){
  $('.input-tol-tip').mouseenter(function(){
    $(this).addClass('tol-tip-cntlr');
  });
  $('.input-tol-tip').mouseleave(function(){
    $(this).removeClass('tol-tip-cntlr');
  });
};



    new WOW().init();

})(jQuery);