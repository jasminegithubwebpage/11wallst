$(window).scroll(function () {
var sc = $(window).scrollTop()
if (sc > 30) {
    $(".navCol").addClass("fixed-header")
} else {
    $(".navCol").removeClass("fixed-header")
    }
});
// --------------------------------------------

$('.toggle').click(function(){
  $('body').toggleClass('actNav');
});

$('.menuBackDrop').click(function(){
  $('body').removeClass('actNav');
});

$('.searchTogle').click(function(){
  $('body').addClass('actSearch');
});
$('.closeIcon').click(function(){
  $('body').removeClass('actSearch');
});

// --------------------------------------------
$('.ddTrigger').click(function(){
  $(this).parent().toggleClass('actDD');
  $(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
});
$(document).on("click", function(event){
  var $trigger = $(".ddParent");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $(".ddParent").removeClass('actDD');
  }
});



$(".tab-pane").each(function(){
  $(this).hide();
  if($(this).attr('id') == 'main') {
    $(this).show();
  }
});

$('.nav-tabs a').on( "click", function(e) {
    var id = $(this).attr('data-related');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(".tab-pane").each(function(){
        $(this).hide();
        if($(this).attr('id') == id) {
            $(this).show();
            $(this).addClass('show');
        }
    });
});


$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
  });

  $('.moreless-card').click(function() {
    $('.moreCard').slideToggle();
    if ($('.moreless-card').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
    });
