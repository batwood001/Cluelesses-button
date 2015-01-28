(function() {
	$(".clueless-form").on("submit", function(e){
		var refractoryTime = 10000
		e.preventDefault();
		console.log("click");
		$(".clueless-form").addClass("hidden");
		$('#circle').removeClass('hidden');
		$('#circle').circleProgress({
			thickness: 10,
			animationStartValue: 1,
			reverse: true,
	        value: 0,
	        size: 200,
	        fill: {
	            image: "progressbar.png"
	        },
	        animation: {duration: refractoryTime, easing: "linear"}
	    })
	    
	    setTimeout(function(){
	    	$(".clueless-form").removeClass("hidden");
	    	$("#circle").addClass("hidden");
	    }, refractoryTime)
	// })
}); // .success(function(data))...  data will include refractory length


	$('#circle').circleProgress({
        value: 1,
        size: 200,
    });
})()
