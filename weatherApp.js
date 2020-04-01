// code is in-active now!



//check if geolocation is supported
if (navigator.geolocation) { 
	// Get the user's current position
  navigator.geolocation.getCurrentPosition(success, error);
  console.log(" geo location is supported");
  } else {
	alert('Geolocation is not supported in your browser');
  }



function success(position){
  var lat = position.coords.latitude;
  //console.log(lat);
  console.log("cool")
  apiRequest( position.coords.latitude, position.coords.longitude); 
}

function error(){} //error handling code pending


function apiRequest(lat, lon){
  var Http = new XMLHttpRequest();
  var url='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange = function() {
    if(this.readyState==4  && this.status==200){
       console.log(Http.responseText);
       var data = JSON.parse(Http.responseText);
       document.getElementById("city-country").innerHTML =  "city, " +data.sys.country ;
       document.getElementById("temp").innerHTML = data.main.temp;
       document.getElementById("temp").innerHTML = data.main.temp;
        }
   
      }
}




/* sample response from api

{"coord":{"lon":139,"lat":35},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds"}],
"base":"stations",
"main":{"temp":28.23,"pressure":1011,"humidity":74,"temp_min":26,"temp_max":31},
"visibility":10000,"wind":{"speed":3.6,"deg":230},
"clouds":{"all":75},
"dt":1499396400,
"sys":{"type":1,"id":7616,"message":0.0043,"country":"JP","sunrise":1499369792,"sunset":1499421666},
"id":1851632,
"name":"Shuzenji",
"cod":200}


*/