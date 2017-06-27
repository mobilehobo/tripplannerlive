for (var i = 0; i < hotels.length; i++) {
  //console.log(hotels[i]);
  $('#hotel-choices').append(`<option data-location=${hotels[i].place.location}>${hotels[i].name}</option>`)
}
for (var i = 0; i < restaurants.length; i++) {
  $('#restaurant-choices').append(`<option data-location=${restaurants[i].place.location}>${restaurants[i].name}</option>`)
}
for (var i = 0; i < activities.length; i++) {
  $('#activity-choices').append(`<option data-location=${activities[i].place.location}>${activities[i].name}</option>`)
}
