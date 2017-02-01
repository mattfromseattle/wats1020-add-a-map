// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  var locations = new L.LayerGroup();

  L.marker([46.8558098, -121.4844578]).bindPopup('This is Dewey Lake.').addTo(locations),
    L.marker([46.7381008, -121.5688132]).bindPopup('This is Ohanapecosh Campground').addTo(locations),
    L.marker([46.7859035, -121.7388493]).bindPopup('This is the Henry M. Jackson Visitor Center').addTo(locations),

    mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/mattfromseattle/ciyng7ead007l2rqqrehjy6us/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWdxbDlvejA0YzEycXA4MWs0Mml3NzAifQ.2XpyO-n_5jYYgcMnjldCQA';

  var grayscale = L.tileLayer(mbUrl, {

    });

  var map = L.map('map', {
    center: [46.845063, -121.766570],
    zoom: 11,
    layers: [grayscale, locations]
  });

  var baseLayers = {

  };

  var overlays = {
    "Locations": locations
  };

  L.control.layers(baseLayers, overlays).addTo(map);
});