prediction_1="";

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
    speak_data_1="The prediction is"+prediction_1;
    var UtterThis= new SpeechSynthesisUtterance(speak_data_1);
    Synth.speak(UtterThis);
}

function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;
    prediction_1=results[0].label;
    speak();
    if(results[0].label=="Thumbs Up")
    {
        document.getElementById("update_gesture").innerHTML="&#128077;";
    }
    if(results[0].label=="Thumbs Down")
    {
        document.getElementById("update_gesture").innerHTML="&#128078;";
    }
    if(results[0].label=="Amazing")
    {
        document.getElementById("update_gesture").innerHTML="&#128076;";
    }
}}