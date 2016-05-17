/**
 * Created by Inter on 17.05.2016.
 */
function initialize() {
    var mapCanvas = document.querySelector('.map');
    var mapOptions = {
        center: new google.maps.LatLng(50.4492, 30.5231),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: {lat: 50.4492, lng: 30.5231},
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);