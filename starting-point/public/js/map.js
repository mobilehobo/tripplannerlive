$(function initializeMap() {

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker(type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
    return marker;
  }
  var markers = {};
  $('#add-hotel').on('click', function () {
    var hotelLoc = $('#hotel-choices').find(':selected').data('location')
      .split(',')
    var marker = drawMarker('hotel', hotelLoc);
    markers[$('#hotel-choices').find(':selected').text()] = marker;
  })
  $('#add-activity').on('click', function () {
    var actvLoc = $('#activity-choices').find(':selected').data('location')
      .split(',')
    var marker = drawMarker('activity', actvLoc);
    markers[$('#activity-choices').find(':selected').text()] = marker;
  })
  $('#add-restaurant').on('click', function () {
    var restLoc = $('#restaurant-choices').find(':selected').data('location')
      .split(',')
    var marker = drawMarker('restaurant', restLoc);
    markers[$('#restaurant-choices').find(':selected').text()] = marker;
  })

  $("#hotels-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      var title = $(event.target).prev()[0].innerHTML.replace(/&amp;/g, '&');
      markers[title].setMap(null);
    }
  })
  $("#activities-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      var title = $(event.target).prev()[0].innerHTML.replace(/&amp;/g, '&');
      markers[title].setMap(null);
    }
  })

  $("#restaurants-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      var title = $(event.target).prev()[0].innerHTML.replace(/&amp;/g, '&');
      markers[title].setMap(null);
    }
  })
})
