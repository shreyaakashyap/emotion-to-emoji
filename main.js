Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach( "#camera" );

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'">';
    })
}

console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/r0zcN1FIo/model.json', modelLoaded);
function modelLoaded() {
    console.log("Model Loaded");
}

function speak() {
    var synth = window.SpeechSynthesis;
    speek_data_1 = "The first prediction is" + prediction_1;
    speek_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speek_data_1 + speek_data_2);
    synth.speak(utterThis);
}
