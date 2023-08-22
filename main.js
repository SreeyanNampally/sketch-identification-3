var classifier = "";

function preload(){
classifier = ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas = createCanvas(500,500);
    background("grey");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis

}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);
    stroke("red");
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas,gotresults);
}

function gotresults(error, results){
if (error) {
    console.log(error);
} else {
    console.log(results);
    document.getElementById("label").innerHTML = results[0].label;
    percent = ((results[0].confidence)*100).toFixed(2)
    document.getElementById("confidence").innerHTML = percent;
    utterthis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}
}