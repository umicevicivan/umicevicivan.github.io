function timer() {
  var date = new Date().getTime();
  var finalDate = new Date('Dec 7, 2017 23:59:59').getTime();

  var tillNext = finalDate - date;

  if (tillNext <= 0) {
    $('.timer').hide();
  } else {
    var d = Math.floor(tillNext / (1000 * 60 * 60 * 24));
    var h = Math.floor((tillNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((tillNext % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((tillNext % (1000 * 60)) / 1000);

    $('.timer .days').html('<p> Dana </p>' + d);
    $('.timer .hours').html('<p> Sati </p>' + h);
    $('.timer .mins').html('<p> Minuta </p>' + m);
    $('.timer .sec').html('<p> Sekundi </p>' + s);
  }
}

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
      }
    }
  });

function initMap() {
  var map = null;
  var marker = null;
  var pos = {
    lat: 44.772707,
    lng: 20.475029
  };

  var mapOptions = {
    center: new google.maps.LatLng(pos.lat, pos.lng),
    zoom: 16,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9b59b6'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#9b59b6'
          },
          {
            weight: 1
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#ffffff'
          },
          {
            weight: 0.8
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ]
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

$(document).ready(function() {
  var navbar = $('.navbar');
  setInterval(timer, 1000);

  initMap();

  if (navbar.offset().top > 500) {
    navbar.addClass('sticky');
  }
  $(document).on('scroll', function(e) {
    if (navbar.offset().top > 500) {
      navbar.addClass('sticky');
    } else {
      navbar.removeClass('sticky');
    }
  });
});
