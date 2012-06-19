var $tableActual, $tableComputed, $htmlInput;

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
	
	// dump into #table-actual and #table-computed
	$(html).appendTo($tableActual);
	$(html).appendTo($tableComputed);
	
	$tableComputed.find("td").each(function(){
		var cellH = $(this).outerHeight(true);
		var cellW = $(this).outerWidth(true);
		$(this).width(cellW).height(cellH).empty();
	});
	
	var tableActualOffset = $tableActual.find('table:first').offset();
	
	$tableComputed.css({"left": tableActualOffset.left});
			
	// now run tests on each row
	var rowWidth;
	
	if(true == false) {
		$('#output .alert-error').show();
	} else {
		$('#output .alert-success').show();
	}
}

$(function(){
	$('#table-actual').contents().find('body').css({"margin": 0, "padding" : 0}).append('<center/>');
	$tableActual = $('#table-actual').contents().find('center');
	$tableComputed = $('#table-computed');
	$htmlInput = $('#html-input');
	
	$('#btn-analyze').click(function(){
		focusOutput();
		analyzeHTML();
	});
		
	//size input / output areas
	var windowHeight = $(window).height();
	$("#input, #output").height(windowHeight);
});