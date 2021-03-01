let button = document.getElementById('toggleNightMode');

button.onclick = function(element) {
		chrome.tabs.executeScript(null, {runAt: "document_start", code: ""}, function() {
    			chrome.tabs.executeScript(null, {file: 'scriptToggle.js'}); //The script to toggle the stylesheet
			//console.log("scriptToggle executed");
		});
};