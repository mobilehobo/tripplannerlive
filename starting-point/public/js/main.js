let dayStorage = {};

const blankItin = `<div class="panel-body" id="itinerary">
          <div>
            <h4>My Hotel</h4>
            <ul class="list-group" id="hotels-itinerary"></ul>
          </div>
          <div>
            <h4>My Restaurants</h4>
            <ul class="list-group" id="restaurants-itinerary"></ul>
          </div>
          <div>
            <h4>My Activities</h4>
            <ul class="list-group" id="activities-itinerary"></ul>
          </div>`;

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
let i = 1;
  $("#day-add").on('click', function(event){
    cloneDay();
    $('.current-day').toggleClass('current-day');
    $(event.target).before(`<button class="btn btn-circle day-btn current-day">${++i}</button>`);
    let itinParent = $('#itinerary').parent();
    $('#itinerary').remove();
    itinParent.append(blankItin);
    changeDay();
  })

  $("#day-button-list").on('click', function(event){
    if(!$(event.target).hasClass('current-day') && event.target.id !== 'day-add')
    {
      cloneDay();
      $('.current-day').toggleClass('current-day');
      $(event.target).toggleClass('current-day');
      let itinParent = $('#itinerary').parent();
      $('#itinerary').remove();
      console.log(dayStorage[event.target.innerHTML]);
      itinParent.append(dayStorage[event.target.innerHTML]);
      changeDay();
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

function cloneDay(){
  console.log($('.current-day')[0].innerHTML);
  dayStorage[$('.current-day')[0].innerHTML] = $('#itinerary').clone(true);
  
}

function changeDay(){
  let dayNum = $('.current-day')[0].innerHTML;
    $('#day-title span')[0].innerHTML = `Day ${dayNum}`;
}
