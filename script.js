
function displayTime() {
	const timeZones = [
		{id: 'nyc-time', timezone: 'America/New_York'},
		{id: 'tokyo-time', timezone: 'Asia/Tokyo'},
		{id: 'london-time', timezone: 'Europe/London'},
		{id: 'cairo-time', timezone: 'Africa/Cairo'}
	]

	const currentTime = new Date();

	timeZones.forEach(tz => {
		// Change 'toLocaleString' to 'toLocaleTimeString' so we can get rid
		// of all the if statements
		const time = currentTime.toLocaleTimeString('en-US', { timeZone: tz.timezone });

		// This finds the clockDiv ID in the HTML
		const el = document.getElementById(tz.id);

		//This sets the text inside the clockDiv
		el.innerText = time
	})

}

//This make the clock tick repeatedly
//running the function every second (1000 = 1 sec)
setInterval(displayTime, 1000);