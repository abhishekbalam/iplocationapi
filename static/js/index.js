function validate(ipaddress) 
{
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    return (true)
  }
alert("You have entered an invalid IP address!")
return (false)
}


$( document ).ready(function() {
			
	//$("#myModal").modal()

		
	$('#submit').on('click', function(event) {
		//event.preventDefault();
		var ip=$('#ip').val();
		if(validate(ip)){
			url1="/locate/"+ip;
			$.ajax({url: url1, success: function(result){
        		data=JSON.parse(result);
				
				var uluru = {lat: data.lat, lng: data.lon};
				var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru });
				var marker = new google.maps.Marker({position: uluru, map: map});

				$("#as").html(data.as);
				$("#isp").html(data.isp);
				$("#latlng").html(data.lat+'/'+data.lon);
				$("#city").html(data.city);
				$("#region").html(data.regionName+' ('+data.region+')');
				$("#country").html(data.country+' ('+data.countryCode+')');
				$("#timezone").html(data.timezone);
				$("#zip").html(data.zip);

				$("#myModal").modal()
			}});
		}
	});
});
