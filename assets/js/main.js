(function($) {


var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});


$('.select-2-cntlr').select2();

if( $('.hamburgar-cntlr').length ){
  $('.hamburgar-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <=767){
    if( $('ul > li.menu-item-has-children').length ){
      $('ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
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
  $(this).parents('.cmn-questions').siblings().find('.bln-accordion-hdr').removeClass('active');
  $(this).parents('.cmn-questions').find('.bln-accordion-des').slideToggle(300);
  $(this).parents('.cmn-questions').siblings().find('.bln-accordion-des').slideUp(300);
});

  if( $('.companyItemTagSlider').length ){
    $('.companyItemTagSlider').slick({
      dots: false,
      infinite: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });
}

var expertiseC = $('.expertise-filters-module ul li').length;
if (expertiseC > 6) {
  $('.explr-fltr-expertise-mdul-cntlr').addClass('explr-fltr-expertise-mdul-extra-hide');
  $('.explore-filter-more').append("+" + expertiseC + "<span>more</span>");
  $('.explore-filter-more').click(function(){
    $('.expertise-filters-module').addClass('expertise-filters-module-fheight');
    $('.explr-fltr-expertise-mdul-cntlr').removeClass('explr-fltr-expertise-mdul-extra-hide');
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

if(windowWidth > 639){
  if( $('#sidebar').length ){
    $('#sidebar').stickySidebar({
        topSpacing: 50,
        bottomSpacing: 50
    });
  }  
}


if(windowWidth <= 767){
  if( $('.hireProSlider').length ){
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
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


/*start of Niaz*/
if(windowWidth > 767){
  if($('.tol-tip').length){
    $('.tol-tip').mouseenter(function(){
      $(this).addClass('tol-tip-cntlr');
    });
    $('.tol-tip-des').mouseenter(function(){
      $(this).parent().find('.tol-tip').addClass('tol-tip-cntlr');
    })
    $('.tol-tip-des').mouseleave(function(){
      $(this).parent().find('.tol-tip').removeClass('tol-tip-cntlr');
    })
    $('.tol-tip').mouseleave(function(){
      $(this).removeClass('tol-tip-cntlr');
    });
  };
}else{

  if($('.tol-tip').length){

    $('.tol-tip').on('click',function(){
       $(this).parents('.form-block').siblings().find('.tol-tip-cntlr').removeClass('tol-tip-cntlr');
      $(this).toggleClass('tol-tip-cntlr');

    })

  };
}



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