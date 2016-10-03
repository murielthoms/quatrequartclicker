$(document).ready(function(){
	//votre code
	var tab = ["Presque", "bingo", "youpi"]
	var gateau = 0;
	
	$("img").click(function(){

		var random = Math.random()*(tab.length);
	    var floor = Math.floor(random);
		gateau++;

		$(".counter").text(gateau);

		if (gateau % 5 === 0) {
			alert(tab[floor]);
		};
		
		

		
		
	});

});











