/*
スライドショー
*/

$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});

/*
オープンボタン
*/
 $('#open-navi').click(function() {
   $(this).toggleClass('active');
   $('#g-navi').toggleClass('panel');
 });

 $('#g-navi a').click(function() {
  $('#open-navi').removeClass('active');
  $('#g-navi').removeClass('panel');
});

/*
画像がフワッと出現
*/

function delayScrollAnime() {
  var time = 0.2;
  var value = time;

  $('.delayScroll').each(function() {
    var parent = this;
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
    var childs = $(this).children();

    if(scroll >= elemPos - windowH && !$(parent).hasClass('play')) {
      $(childs).each(function() {
        if(!$(this).hasClass('fadeUp')) {
          $(parent).addClass('play');
          $(this).css('animation-delay', value = 's');
          $(this).addClass('fadeUp');
          value = value + time;

          var index = $(childs).index(this);
          if((childs.length - 1) == index) {
            $(parent).removeClass('play');
          }
        }
      })
    } else {
      $(childs).removeClass('fadeUp');
      value = time;
    }
  })
}

/*
Y軸に回転
*/

function rotateAnime() {
  $('.rotateTrigger').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();

    if(scroll >= elemPos - windowH) {
      $(this).addClass('rotateY');
    } else {
      $(this).removeClass('rotateY');
    }
  });
}



/*
背景の動き
*/
// particlesJS("particles-js", {
//   "particles":{
//     "number":{
//       "value":10,
//       "density":{
//         "enable":true,
//         "value_area":315.65905665290904
//       }
//     },
//     "color":{
//       "value":"#333333"
//     },
//     "shape":{
//       "type":"circle",
//       "stroke":{
//         "width":0,
//         "color":"#000000"
//       },
//       "polygon":{
//         "nb_sides":10
//       },"image":{
//         "src":"img/github.svg",
//         "width":100,
//         "height":100
//       }
//     },
//     "opacity":{
//       "value":0.1,
//       "random":false,
//       "anim":{
//         "enable":false,
//         "speed":1,
//         "opacity_min":0.08,
//         "sync":false
//       }
//     },
//     "size":{
//       "value":50,
//       "random":true,
//       "anim":{
//         "enable":false,
//         "speed":127.07292707292707,
//         "size_min":48.75124875124875,
//         "sync":false
//       }
//     },
//     "line_linked":{
//       "enable":true,
//       "distance":150,
//       "color":"#ffffff",
//       "opacity":0.4,
//       "width":1
//     },
//     "move":{
//       "enable":true,
//       "speed":5,
//       "direction":"none",
//       "random":false,
//       "straight":false,
//       "out_mode":"out",
//       "bounce":false,
//       "attract":{
//         "enable":false,
//         "rotateX":600,
//         "rotateY":1200
//       }
//     }
//   },
//   "interactivity":{
//     "detect_on":"canvas",
//     "events":{
//       "onhover":{
//         "enable":true,
//         "mode":"repulse"
//       },
//       "onclick":{
//         "enable":true,
//         "mode":"push"
//       },
//       "resize":true
//     },
//     "modes":{
//       "grab":{
//         "distance":400,
//         "line_linked":{
//           "opacity":1
//         }
//       },
//       "bubble":{
//         "distance":400,
//         "size":40,
//         "duration":2,
//         "opacity":8,
//         "speed":3
//       },
//       "repulse":{
//         "distance":200,
//         "duration":0.4
//       },
//       "push":{
//         "particles_nb":4
//       },
//       "remove":{
//         "particles_nb":2
//       }
//     }
//   },
//   "retina_detect":true
// });


particlesJS("particles-js", {"particles":{"number":{"value":6,"density":{"enable":true,"value_area":800}},"color":{"value":"#1b1e34"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.24463576890600452,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":160,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


/*
ページトップ
*/

function PageTop() {
  var scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove')
    }
  }
}

$('#page-top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
})

/*
ページをロード、スクロールした時
*/

$(window).scroll(function() {
  delayScrollAnime();
  rotateAnime();
  PageTop();
});

$(window).on('load', function() {
  delayScrollAnime();
  rotateAnime();
  PageTop();
})