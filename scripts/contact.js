$(document).ready(function () {

//Reservation

    $("#inputName").click(function () {
        this.value = "";
    });
    $("#inputMail").click(function () {
        this.value = "";
    });

    $("#reservation").click(function () {
        var name = $("#inputName").val();
        var people = $("#inputPeople").val();
        if (name == "" || name == "Name") {
            alert("Please fill in you name");
        } else if (people == "" || people == "Amount of people") {
            alert("Please fill in the amount of people you want to make the reservation for");
        } else {
            alert("Thanks for you reservation, " + name);
        }
    });


});

//Google Maps

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

