
var map;
var myLatLng = {lat: 51.213985, lng: 6.788535};
function initMap() {
 
          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatLng
        });
 
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Dr. Feuer Stein'
           
        });
   
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
   
       marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
   
}