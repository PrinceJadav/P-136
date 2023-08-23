status = "";
input_text = "";

function setup(){
    canvas = createCanvas(300, 290);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
  object_dectector = ml5.object_dectector("cocossd",modelLoaded);
  document.getElementById("status").innerHTML ="STATUS : DECTETING OBJECTS";
  input_text = document.getElementById("input_id").value
}
function modelLoaded(){
    console.log("model_loaded");
    status = true;
}

function draw(){
    Image(video,0,300,290);
}