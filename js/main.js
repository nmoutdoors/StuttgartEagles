$(document).ready(function() {



  $(".img-thumbnail").click(function(){
    $("#imagepreview").attr("src",$(this).attr("src").replace("-min", ""))
    $('.modal-body',this).css({width:'auto',height:'auto', 'max-height':'100%'});
    $("#imgViewer").modal("show");
  });
  $(".imagepreview").click(function(){
    $("#imgViewer").modal("hide");
  });

  $('#modal').on('show', function () {
        $('.modal-body',this).css({width:'auto',height:'auto', 'max-height':'100%'});
  });


  $("#slideShow").css("word-wrap","break-word");
  $('.slideShow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
$("i").addClass("animated bounce");
$("#box1").addClass("animated fadeInLeft");
$("#box1-title").text("Easter Euro Cup");
$("#box1-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

$("#box2").addClass("animated fadeInDown");
$("#box2-title").text("United World Games");
$("#box2-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

$("#box3").addClass("animated fadeInRight");
$("#box3-title").text("Speyer Tournament");
$("#box3-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

$("i").addClass("animated bounce");
$("#box12").addClass("animated fadeInLeft");
$("#box12-title").text("SEBC Tryout Page 2016");
$("#box12-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

$("#box22").addClass("animated fadeInUp");
$("#box22-title").text("Teams");
$("#box22-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

$("#box32").addClass("animated fadeInRight");
$("#box32-title").text("Photo Gallery");
$("#box32-body").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum magna venenatis purus porta, sed laoreet enim ullamcorper.");

  $(".thumb").thumbs();

});
