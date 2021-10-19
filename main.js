Prediction1="";
Prediction2="";
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
Camera=document.getElementById("camera");
Webcam.attach(Camera);
function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'">';
    });
}
console.log("Ml5 version=",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a5mBNb7R4/model.json',modelLoaded);
function modelLoaded() {
    console.log("Model is loaded");
}
function speak() {
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is"+Prediction1;
    speakdata2="And the second prediction is"+Prediction2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);
}