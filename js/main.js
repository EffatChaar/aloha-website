$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
    
        var target = this.hash,       
            $target = $(target);
    
        $('html, body').animate({
            scrollTop: $target.offset().top - 80
        }, 900)                    
    })

    $('.products-wrapper').flickity({
        cellAlign: 'center',
        contain: true,
        percentPosition: true,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false
    })

    $('#button').on('click', function(event) {
        event.preventDefault();
        var userEmail = $('input:text').val();
        if (userEmail != '') {
            var valid = validateEmail(userEmail);
            if (valid) {
              alert('Thanks for subscribing!');
            } else {
            alert('Please include an "@" in email address. ' + userEmail + ' is missing an "@".');
          }
      } else {
          alert ('Please submit a valid email address.');
        }
      });
  
      function validateEmail(email) {
          var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(email);
        }
});






    
