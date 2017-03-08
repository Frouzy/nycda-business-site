$(document).ready(function () {

//Reservation

    $("#inputName").click(function () {
        this.value = "";
    });

    $("#reservation").click(function () {
        var name = $("#inputName").val();
        var people = $("#inputPeople").val();
        var date = $("#inputDate").val();
        if (name == "..." || name == "") {
            alert("Please fill in you name");
        } else if (people == "") {
            alert("Please fill in the amount of people you want to make the reservation for");
        } else if (date == "") {
            alert("Please fill in a date you would like to make a reservation for");
        }
        else {
            alert("Thanks for you reservation, " + name + ". We're looking forward to see you on " + date);
        }
    });

});

//Google Maps

function initMap() {
    //Location 1
    var restaurantone = {lat: 52.3702, lng: 4.8955};
    //Location 2
    var restauranttwo = {lat: 52.3692, lng: 4.8843};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        // Google maps night mode
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ],
        center: restaurantone,
        //Gesture handling prevent unintended zoom on map with touch-sensitive devices.
        gestureHandling: 'cooperative'

    });
    //Location 1
    var marker = new google.maps.Marker({
        position: restaurantone,
        map: map
    });

    var marker = new google.maps.Marker({
        position: restauranttwo,
        map: map
    });

    // bikeLayer doesn't work on with night mode styling?
    // var bikeLayer = new google.maps.BicyclingLayer();
    // bikeLayer.setMap(map);

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

}


