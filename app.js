$(document).ready(function(){
	var tab = ["Presque", "bingo", "youpi"]
	var nbClickGateau = 0;
	
	$("img").click(function(){
		var random = Math.random() * tab.length;
	    	var nbAleatoireArrondi = Math.floor(random);
		nbClickGateau++;

		$(".counter").text(nbClickGateau);

		if (nbClickGateau % 5 === 0) {
			alert(tab[nbAleatoireArrondi]);
		};
	});

});











