document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end


$(document).ready(function() {
    $( '.carosel.testimonial-inner' ).each( function() {
        $( this ).slick( {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // this value should < total # of slides, otherwise the carousel won't slide at all
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        dots: false,
        arrows: true,
        centerMode: true,
        vertical: false,
        prevArrow: $(".carosel-nav-left-testi"),
        nextArrow: $(".carosel-nav-right-testi"),

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    } );
  } );
} );

$(document).ready(function() {
    $( '.carosel.our-team' ).each( function() {
        $( this ).slick( {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // this value should < total # of slides, otherwise the carousel won't slide at all
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        dots: false,
        arrows: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    } );
  } );
} );


$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// back to top
//Get the button
var mybutton = document.getElementById("backTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// contact form
function ValidateEmail(email) {
  // alert(1);
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(email);
};

$("#demoContact").click(function() {
  if(!ValidateEmail($("#txtcontact").val())) {
    $("#error").addClass("error-msg-contact-display");
  } else {
    $("#error").removeClass("error-msg-contact-display");
    // $( "#success" ).addClass("success-msg-contact-display");
    $("#success").addClass("success-msg-contact-display").delay(3000).queue(function() {
      $(this).removeClass("success-msg-contact-display").dequeue();
    });
  }

});

// page loader
$(window).on('load', function () {
  $('#loading').hide();
}) 