$(document).ready(function () {

//Reservation

    $("#inputName").click(function () {
        this.value = "";
    });
    $("#inputPeople").click(function () {
        this.value = "";
    })
    $("#inputDate").click(function () {
        this.value = "";
    });

    $("#reservation").click(function () {
        var name = $("#inputName").val();
        var people = $("#inputPeople").val();
        var date = $("#inputDate").val();
        if (name == "..." || name == "Name") {
            alert("Please fill in you name");
        } else if (people == "" || people == "...") {
            alert("Please fill in the amount of people you want to make the reservation for");
        } else if (date == "" || date == "...") {
            alert("Please fill in ta date");
        }
        else {
            alert("Thanks for you reservation " + name + " till " + date);
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

