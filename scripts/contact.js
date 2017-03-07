function initMap() {
    var amsterdam = {lat: 52.3702, lng: 4.8952};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: amsterdam
    });
    var marker = new google.maps.Marker({
        position: amsterdam,
        map: map
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}