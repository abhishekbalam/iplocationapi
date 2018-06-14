function validate(ipaddress) 
{
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    return (true)
  }
alert("You have entered an invalid IP address!")
return (false)
}

var marker; 

// Initialize and add the map
function initMap(clat, cling) {
  // The location of Uluru
  var uluru = {lat: clat, lng: cling};
  // The map, centered at Uluru
  var map = new google.maps.Map(
    	document.getElementById('map'), {zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({position: uluru, map: map});

}

$( document ).ready(function() {
			
	$("#myModal").modal()
		
	$('#submit').on('click', function(event) {
		event.preventDefault();
		var ip=$('#ip').val();
		console.log(ip);


		if(validate(ip)){
			lat=-25.344;
			lng= 131.036;
			initMap(lat, lng);
			$("#myModal").modal()
		}
	});
});
