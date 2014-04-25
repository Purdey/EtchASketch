$(document).ready(function() {
	$("button").on("click", (function() {
		var r = getResolution();
		createSketch(r);
	}));
});

function getResolution() {
	var resolution;
	$(".container").hide();
	do {
		var i = prompt("How many rows/columns? (1-100)");
		resolution = parseInt(i);
	} while (isNaN(resolution) || resolution < 1 || resolution > 100);
	return resolution;
}

function createSketch(number) {
	var blockSize = 900 / number - 2;
	var container = $(".container");
	container.empty();
	for (var row, i = 1; i <= number; i++) {
		row = $("<div class=row></div>");
		for (var elem, j = 1; j <= number; j++) {
			elem = $("<div class=block></div>");
			row.append(elem);
		}
		container.append(row);
	}
	$(".block").css({
		"width": blockSize,
		"height": blockSize
	});
	$(".row").css('height', blockSize);
	container.show('fast');
	$(".block").on('mouseenter', (function() {
		$(this).addClass('red');
	}));
}