
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '2019-12-24';
initializeClock('clockdiv', deadline);

function timeOfDayFnc() {
	var myDate = new Date();
	var hrs = myDate.getHours();
	var timeOfDay;
	if (hrs < 11)
		timeOfDay = 'morning';
	else if (hrs >= 12 && hrs <= 17)
		timeOfDay = 'afternoon';
	else if (hrs >= 17 && hrs <= 24)
		timeOfDay = 'evening';
	else {
		timeOfDay = 'otherTime';
	}
	$("html").addClass(timeOfDay);
}
timeOfDayFnc();

// Slumpa bakgrund
// $( document ).ready(function() {
//     var listOfClasses = ["color1","color2"];
//     var randomNum = Math.floor(Math.random() * listOfClasses.length); 
//     $("html").addClass(listOfClasses[randomNum]);
// });


    


