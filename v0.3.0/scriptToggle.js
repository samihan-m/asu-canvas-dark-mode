function enable() {
	//restoring the pointer to the stylesheet
	document.getElementById('nightModeSheet').rel = "stylesheet";
	status = true;
}

function disable() {
	//sets the pointer to the stylesheet to empty, basically disabling the stylesheet
	document.getElementById('nightModeSheet').rel = "";
	status = false;	
}

function toggle(state) {
	let active = state;
	console.log("State Pre-toggle: ",active);
	if(active) {
		disable();
		value = false;
	}
	else {
		enable();
		value = true;	
	}
	//value = !active;
	chrome.storage.sync.set({isCanvasNightActive: value}, function(obj) {
		console.log("Night Mode Toggled!");
	});	
}
//insertSheet();


function getSheetState(callback) {
	var state;
	chrome.storage.sync.get('isCanvasNightActive', function(obj) {
		state = obj.isCanvasNightActive;
		callback(state);
	});
}
//running only if the sheet exists on the page. if it doesnt exist, its a bug.
if(document.getElementById('nightModeSheet')){
	getSheetState(toggle);
}