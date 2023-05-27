setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let dt = time.getDate();
	let mn = time.getMonth();
	let yr = time.getFullYear();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
		+ min + ":" + sec + " " + am_pm;

	let currdate = dt + "/" + mn + "/" + yr;
	document.getElementById("clock")
		.innerHTML = currentTime;

	document.getElementById("dat")
		.innerHTML = currdate;
}
showTime();
