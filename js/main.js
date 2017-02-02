// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");
  // Creates a group for holding markers
  var locations = new L.LayerGroup();
  // Separate markers for use on the map
  L.marker([46.8558098, -121.4844578]).addTo(locations),
    L.marker([46.7381008, -121.5688132]).addTo(locations),
    L.marker([46.7859035, -121.7388493]).addTo(locations),

    mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/mattfromseattle/ciyng7ead007l2rqqrehjy6us/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWdxbDlvejA0YzEycXA4MWs0Mml3NzAifQ.2XpyO-n_5jYYgcMnjldCQA';

  // This is the satellite view layer
  var satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mattfromseattle/ciyng7ead007l2rqqrehjy6us/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWdxbDlvejA0YzEycXA4MWs0Mml3NzAifQ.2XpyO-n_5jYYgcMnjldCQA', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
  });

  // This is the drawing view layer
  var drawLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mattfromseattle/ciyjjb3kf000a2rphe8bomoll/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWdxbDlvejA0YzEycXA4MWs0Mml3NzAifQ.2XpyO-n_5jYYgcMnjldCQA', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
  });

  // This is the street view layer
  var streetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mattfromseattle/ciynqtwtu004s2rphkaerlf3a/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWdxbDlvejA0YzEycXA4MWs0Mml3NzAifQ.2XpyO-n_5jYYgcMnjldCQA', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
  })

  var grayscale = L.tileLayer(mbUrl, {

  });

  // Default location and zoom of the map
  var map = L.map('map', {
    center: [46.845063, -121.766570],
    zoom: 11,
    layers: [grayscale, locations]
  });

  // These are the different layers that can be selected
  var baseLayers = {
    "Satellite": satLayer,
    "Street View": streetLayer,
    "Map View": drawLayer,
  };

  // This calls the specified locations
  var overlays = {
    "Locations": locations
  };

  L.control.layers(baseLayers, overlays).addTo(map);
});