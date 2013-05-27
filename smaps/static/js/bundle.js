$(document).ready(function() {
	var map = L.map('map', {
		center: [-21.172247, -47.809238],
    	zoom: 14,
    	minZoom: 10,
    	maxZoom: 16
});

	L.tileLayer('http://{s}.tile.cloudmade.com/ba52dbcbe23f4cdba4adb592d2420275/97121/256/{z}/{x}/{y}.png', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    	maxZoom: 18
	}).addTo(map);
	
	// plot markers on map due to places json
	$.getJSON("/place/json").done(function (json){
        $.each(json, function(key, value){
        	val = value.fields.position.split(',');
        	var marker = L.marker([val[0], val[1]], {
        		riseOnHover: true,
        		opacity: 0.8,
        		title: value.fields.name
        	}).addTo(map);
        	marker.bindPopup("<b>"+value.fields.name+"</b><br>"+value.fields.address);
			marker.on('click',function(e){
				map.setView([e.target._latlng.lat, e.target._latlng.lng], 14);
			});
        });
    });

	$(".leaflet-bar").css('left',-1*parseInt($("#map").css("left")));

	var initial = $('.front-board').width();
	var initial_geo = parseInt($('.geolocationBT').css('right'));
	var initial_leaflet = parseInt($('.leaflet-bar').css('left'));
	$(".front-board-arrow-BT").click(function(e){
	  	if($(this).css('right')=='0px'){
	  		$('.leaflet-bar').animate({left:initial_leaflet});
	  		$(this).animate({right: initial}, 500);
			$('.front-board').animate({right:0}, 500);
			$('.geolocationBT').animate({right: initial_geo}, 500);
			$('#map').animate({left:-1*initial_leaflet});

			$(this).removeClass('openBtn');
			$(this).addClass('closeBtn');				
	  	}else{
	  		$('.leaflet-bar').animate({left:0});
	  		$(this).animate({right: 0}, 500);
			$('.front-board').animate({right:-1*initial}, 500);
			$('.geolocationBT').animate({right: 20}, 500);
			$('#map').animate({left:0});

			$(this).removeClass('closeBtn');
			$(this).addClass('openBtn');
	  	}
  	});
	
	$('.geolocationBT').click(function(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(mapOnGeolocation);
			$(this).addClass('selected');
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	});
	
	function mapOnGeolocation(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		map.setView( new L.LatLng(lat, lon),14, false);
		L.marker([lat, lon]).addTo(map);
		new L.Circle( new L.LatLng(lat, lon), 1000, {fillColor:'#b3ebf9', stroke:false}).addTo(map);				
	}
	

	// move map view when elements loaded
	$(window).load(function(){
		map.setView([-21.164883,-47.806492], 14);
	});


});