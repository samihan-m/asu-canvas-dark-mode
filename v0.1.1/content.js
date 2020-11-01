//This targets class display box titles and reduces them to more cleaner titles. Cuts the title after the first colon.
function cleanDisplayBoxes() {
	var classDisplayTitles = document.getElementsByClassName("Grouping-styles__title");
	for (var i = 0; i < classDisplayTitles.length; i++) {
	var oldText = classDisplayTitles[i].textContent;
		var breakPoint = oldText.indexOf(":");
		if(breakPoint > 0) {	
			//error checking - dont want the substring to be 0,0 or 0,-1
			classDisplayTitles[i].textContent = oldText.substring(0,breakPoint);
			classDisplayTitles[i].style.fontSize = "200%";
			//classDisplayTitles[i].style.fontFamily = "Lucida Sans Unicode, Lucida Grande, sans-serif"; /*change this to whatever font i want*/
		}
	
	}
}

//This targets the announcement type details at the top of each announcement and keeps everything after the ')'
function cleanAnnouncementType() {
	var classAnnouncementMessages = document.getElementsByClassName("PlannerItem-styles__type");
	for (var i = 0; i < classAnnouncementMessages.length; i++) {
	var oldText = classAnnouncementMessages[i].textContent;
		var breakPoint = oldText.indexOf(")");
		if(breakPoint > -1 && breakPoint < oldText.length -1) {	
			//error checking - dont want the substring to be -1,0 or 1,1
			classAnnouncementMessages[i].textContent = oldText.substring(breakPoint + 1,oldText.length);
		}
		classAnnouncementMessages[i].style.color = "#bdbdbd";
	}
}

var updateTime = 300;

setInterval(cleanDisplayBoxes, updateTime);
setInterval(cleanAnnouncementType, updateTime);
//If i can find a better way to make these functions happen (like in the css stylesheet or something) then do that.
//I don't like the idea of functions running constantly.