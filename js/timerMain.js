
window.MyModule = {};

// Commence scope to prevent littering 
// the window object with unwanted variables
window.MyModule.Timer = function() {

	var min = 01, sec = 40, running = false;
	
	return {
		
		getMinutes: function() {
			console.log(min);	
		},
		
		setMinutes: function(m) {
			min = m;
		},
		
		setSeconds: function(s) {
			sec = s;
		},
		
		countDown: function() {
			running = true;
			sec--;
			if (sec == -01) {
				sec = 59;
				min = min - 1; }
			else {
				min = min; }

			if (sec<=9) { sec = "0" + sec; }

			time = (min<=9 ? "0" + min : min) + " min and " + sec + " sec ";

			if (document.getElementById) { document.getElementById('timerTest').innerHTML = time; }

			SD=window.setTimeout("window.MyModule.Timer.countDown();", 1000);
			if (min == '00' && sec == '00') { sec = "00"; window.clearTimeout(SD); running = false;}
		},
		
		stop: function() {
			if(!running) {
				console.log("Timer not running.");
			} else {
				window.clearTimeout(SD);
				running = false;
				console.log("Stopped the running timer.")
			}	
		}
		
	};

}();

window.MyModule.Timer.getMinutes();
window.MyModule.Timer.setMinutes(10);
window.MyModule.Timer.getMinutes();
window.MyModule.Timer.countDown();
window.setTimeout("window.MyModule.Timer.stop();", 5000);