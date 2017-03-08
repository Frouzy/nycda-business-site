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

