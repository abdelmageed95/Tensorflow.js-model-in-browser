$("#image-selector").change(function () {
	$("#predictions").css("visibility", "hidden");
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
	}
	
	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
	$("#image").css("visibility", "visible");
});

let model;
$( document ).ready(async function () {
	$('.progress-bar').show();
    console.log( "Loading model..." );
    model = await tf.loadGraphModel('model/model.json');
    console.log( "Model loaded." );
	$('.progress-bar').hide();
});

$("#predict-button").click(async function () {
	this.disabled=true;
	let image = $('#selected-image').get(0);
	
	// Pre-process the image
	let tensor = tf.browser.fromPixels(image,3)
		.resizeNearestNeighbor([180,180]) // change the image size here
		.toFloat()
		.expandDims();

	let predictions = await model.predict(tensor).data();
	let top5 = Array.from(predictions)
		.map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 2);
	
	$("#prediction-list").empty();
	top5.forEach(function (p) {
		$("#prediction-list").append(`<li>${p.className}: ${(p.probability*100).toFixed(2)}%</li>`);
		});
	$("#predictions").css("visibility", "visible");
	this.disabled=false;
});
