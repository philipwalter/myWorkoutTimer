/** @namespace */
window.MyModule = {};

/** @class */
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
			
			var _this = this;
			SD=window.setTimeout(function() { _this.countDown(); }, 1000);
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

}

//window.MyModule.Timer.getMinutes();
//window.MyModule.Timer.setMinutes(10);
//window.MyModule.Timer.getMinutes();
//window.MyModule.Timer.countDown();
//window.setTimeout("window.MyModule.Timer.stop();", 5000);

var clock2 = new window.MyModule.Timer;
clock2.getMinutes();
clock2.setMinutes(10);
clock2.getMinutes();
var clock3 = new window.MyModule.Timer;
clock3.getMinutes();
clock2.countDown();