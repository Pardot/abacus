var $tableActual, $htmlInput;

function drawTable(structure) {
	
}

function focusOutput(){
	$("#output").fadeIn();
	$(window).scrollTo('#output', 1000, {easing: 'easeOutQuart', 'offset': {top: -50, left:0}});
}

function analyzeHTML () {
	var html = $htmlInput.val();
	$tableActual.empty(); // clean out any current content
	
	// strip out anything harmful (aka script tags)
	
	// check for table
	
	// dump into #table-actual
	$(html).appendTo($tableActual);
	
	// now run tests on each row
	var rowWidth;
	$("#table-actual").each(function(){
		
	});
	
	if(true == false) {
		$('#output .alert-error').show();
	} else {
		$('#output .alert-success').show();
	}
}

$(function(){
	$tableActual = $('#table-actual');
	$htmlInput = $('#html-input');
	
	$('#btn-analyze').click(function(){
		analyzeHTML();
		focusOutput();
	});
		
	//size input / output areas
	var windowHeight = $(window).height();
	$("#input, #output").height(windowHeight);
});