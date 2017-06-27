$(function () {
  //add map functionality
  $('#add-hotel').on('click', function () {
    var text = $('#hotel-choices').find(':selected').text()
    $('#hotels-itinerary').append(createItineraryItem(text));
  })

  $('#add-activity').on('click', function () {
    var text = $('#activity-choices').find(':selected').text()
    $('#activities-itinerary').append(createItineraryItem(text));
  })

  $('#add-restaurant').on('click', function () {
    var text = $('#restaurant-choices').find(':selected').text()
    $('#restaurants-itinerary').append(createItineraryItem(text));
  })

  $("#hotels-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      $(event.target).parent().remove();
    }
  })

  $("#activities-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      $(event.target).parent().remove();
    }
  })

  $("#restaurants-itinerary").on('click', function (event) {
    if (event.target.nodeName === "BUTTON") {
      $(event.target).parent().remove();
    }
  })

})


function createItineraryItem (title) {
  return `
  <div class="itinerary-item">
                <span class="title">${title}</span>
                <button class="btn btn-xs btn-danger remove btn-circle" >x</button>
              </div>`
}
