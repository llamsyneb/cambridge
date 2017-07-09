/* Plot map of cambridge for candidates
 * Right now requires #map element and data stored in initialLocations
 */


function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 42.376403, lng: -71.235407},
        zoom: 12
    });

    for (let location of initialLocations) {
        addMarker(map, new Location(location));
    }
}

var Location = function(data) {
    this.id = data.id;
    this.name = data.name;

    var names = data.name.split(' ')
    this.label = names[0][0] + names[names.length - 1][0]; // two letter abbreviation
    this.lat = data.lat;
    this.lng = data.lng;
    this.color = data.color;
};


function addMarker(map, feature) {
    return new google.maps.Marker({
        id : feature.id,
        position: new google.maps.LatLng(feature.lat, feature.lng),
        map: map,
        icon: {
          // https://developers.google.com/chart/image/docs/gallery/dynamic_icons?csw=1#pins
          // chld=size|rotation|color|fontsize|fontweight|text
          url: `https://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|${feature.color}|11|_|${feature.label}`
        },
        title: feature.name
    });
};
