(function(window){
var names=["Aninda", "John", "Jen", "Jason", "Tareq", "Abir", "Sifat", "Faruk", "Nidhi", "Mezba"];
for(var i=0; i < names.length; i++){
	var firstLetter=names[i].charAt(0).toLowerCase();
	if(firstLetter === 'j'){
		byeSpeaker.speak(names[i]);
	}
	else{
		helloSpeaker.speak(names[i]);
	}
}
})(window);
