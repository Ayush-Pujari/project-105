Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quilty:90
})
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="i1" src="'+data_uri+'"/>';
    })
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Tk12_98cd//model.json',modelLoded);
function modelLoded(){
    console.log(modelLoded);
}
function check(){
    img=document.getElementById("i1");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        console.log(results[0].label);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        var synth=window.speechSynthesis;
        speak_data="This is "+results[0].label;
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }

}