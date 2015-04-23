window.cssClock = (function(namespace, undefined) {
	
	var _ = namespace;

	// get the individual components of the current date/time.
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var dayOfWeek = currentTime.getDay() + 1;
	var dayOfMonth = currentTime.getDate();
	
	_.init = function() {
		
		/*hours = 23;
		minutes = 59;
		seconds = 57;*/
		
		var total = window.cssClock.getSeconds();
		window.cssClock.setAnimationDelay('.second-hand', total);
		window.cssClock.setAnimationDelay('#d-second', total);
		total += (window.cssClock.getMinutes() * 60);
		window.cssClock.setAnimationDelay('.minute-hand', total);
		window.cssClock.setAnimationDelay('#d-minute', total);
		total += (window.cssClock.getHours() * 3600);
		window.cssClock.setAnimationDelay('.hour-hand', total*2);
		window.cssClock.setAnimationDelay('#d-hour', total);
		
		window.cssClock.setAnimationDelay('#day-name', (86400 * dayOfWeek) + ((window.cssClock.getSeconds()) + (window.cssClock.getMinutes() * 60) + (window.cssClock.getHours() * 3600)) - 86400);
		window.cssClock.setAnimationDelay('#day-number', (86400 * dayOfMonth) + ((window.cssClock.getSeconds()) + (window.cssClock.getMinutes() * 60) + (window.cssClock.getHours() * 3600)) - 86400);
		
	};
	
	// add the style information to the head of the document.
	_.setAnimationDelay = function(nodeName, delay) {
		
		var newHeadStyle = document.createElement('style');
		//newHeadStyle.type = 'text/css';
		var newCssRule = document.createTextNode(nodeName + ' {' +
			'-webkit-animation-delay: -' + delay + 's !important; ' + 
			'-moz-animation-delay: -' + delay + 's !important; ' + 
			'-o-animation-delay: -' + delay + 's !important; ' + 
			'-ms-animation-delay: -' + delay + 's !important; ' + 
			'animation-delay: -' + delay + 's !important;' + 
		'}');
		newHeadStyle.appendChild(newCssRule);
		document.getElementsByTagName("head")[0].appendChild(newHeadStyle);
		
	};
	
	// getters. I hate this non-whitespaced-ness, but it was just to save
	// space, and they are straightforward so doesn't need hunners of lines
	// of documentation.
	_.getSeconds = function() {return seconds;};
	_.getMinutes = function() {return minutes;};
	_.getHours = function() {return hours;};
	
	return _;

})(window.cssClock || {});

document.onload = window.cssClock.init();