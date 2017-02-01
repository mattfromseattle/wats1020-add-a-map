// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
              var mymap = L.map('mapid').setView([46.8503956, -121.7750116], 13);

              L.tileLayer(
                'https://api.mapbox.com/styles/v1/mattfromseattle/ciyjjb3kf000a2rphe8bomoll/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0dGZyb21zZWF0dGxlIiwiYSI6ImNpeWpqOTVrcDA1Njkyd29ldjViaW50eDcifQ.3lxfg0LRGoHG7PVVLC6J9Q', {
                  maxZoom: 18,
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                  id: 'mapbox.streets'
                }).addTo(mymap);

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

});