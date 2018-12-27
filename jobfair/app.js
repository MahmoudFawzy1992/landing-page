$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 7,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 1000, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
        responsive:[
             {
        breakpoint: 480,
        settings: {
          item: 1 
        }
      }
        ]
 
 
    });
});


$("#buildYourNetworkBtn").click(function() {
  $('html,body').animate({
      scrollTop: $("#findYourMatch").offset().top},
      'slow');
});

$("#registerHereBtn").click(function() {
  $('html,body').animate({
      scrollTop: $("#screenSection").offset().top},
      'slow');
});
