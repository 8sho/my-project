
	const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '89d40ce141msh5ec042018a0ddd8p1156a7jsnb8436a45e618',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const getWeather =(city) =>{
	cityname.innerHTML=city
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	  console.log(response);
  
	  const Cloud_pct = document.getElementById('cloud_pct');
	  if (Cloud_pct) Cloud_pct.innerHTML = response.cloud_pct;
  
	  const Temp = document.getElementById('temp');
	  if (Temp) Temp.innerHTML = response.temp;

	  const Temp2 = document.getElementById('temp2');
	  if (Temp2) Temp2.innerHTML = response.temp;
  
	  const Feels_like = document.getElementById('feels_like');
	  if (Feels_like) Feels_like.innerHTML = response.feels_like;
  
	  const Humidity = document.getElementById('humidity');
	  if (Humidity) Humidity.innerHTML = response.humidity;

	  const Humidity2 = document.getElementById('humidity2');
	  if (Humidity2) Humidity2.innerHTML = response.humidity;
  
	  const Min_temp = document.getElementById('min_temp');
	  if (Min_temp) Min_temp.innerHTML = response.min_temp;
  
	  const Max_temp = document.getElementById('max_temp');
	  if (Max_temp) Max_temp.innerHTML = response.max_temp;
  
	  const Wind_speed = document.getElementById('wind_speed');
	  if (Wind_speed) Wind_speed.innerHTML = response.wind_speed;

	  const Wind_speed2 = document.getElementById('wind_speed2');
	  if (Wind_speed2) Wind_speed2.innerHTML = response.wind_speed;
  
      const Wind_degrees = document.getElementById('wind_degrees');
	  if (Wind_degrees) Wind_degrees.innerHTML = response.wind_degrees;
  
	  const Sunrise = document.getElementById('sunrise');
	  if (Sunrise) Sunrise.innerHTML = response.sunrise;
  
	  const Sunset = document.getElementById('sunset');
	  if (Sunset) Sunset.innerHTML = response.sunset;
	})
	.catch(err => {
	  console.error(err);
	});
 }

 submit.addEventListener("click" , (e)=>{
	e.preventDefault()
   getWeather(city.value)
 })
 getWeather('delhi')