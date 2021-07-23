prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera); 

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version is " ,ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nWiMKTHCi/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model is loaded!");
}

function speak()
{
    var Synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="And the second prediction is"+prediction_2;
    var UtterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    Synth.speak(UtterThis);
}