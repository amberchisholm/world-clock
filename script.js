

function displayTime(city) {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let meridiem = "AM";

	let america = currentTime.toLocaleString('en-US', {timeZone: "America/New_York"});
	let asia = currentTime.toLocaleString('en-US', {timeZone: "Asia/Tokyo"});
	let europe = currentTime.toLocaleString('en-US', {timeZone: "Europe/London"});
	let africa = currentTime.toLocaleString('en-US', {timeZone: "Africa/Cairo"});

	if (hours > 12) {
		hours = hours - 12;
		meridiem = "PM"
	}

	if (hours === 0) {
		hours = 12;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}

// This finds the clockDiv ID in the HTML
const clockDivNYC = document.getElementById('nyc');
const clockDivTokyo = document.getElementById('tokyo');
const clockDivLondon = document.getElementById('london');
const clockDivCairo = document.getElementById('cairo');

//This sets the text inside the clockDiv
//to the hours, minutes, and seconds of the current time
clockDivNYC.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
clockDivTokyo.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
clockDivLondon.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
clockDivCairo.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

}

displayTime();
displayTime(tokyo);
displayTime(london);
displayTime(cairo);

//This make the clock tick repeatedly
//running the function every second (1000 = 1 sec)
setInterval(displayTime, 1000);