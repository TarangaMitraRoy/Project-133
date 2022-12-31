prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

var classifier= "https://teachablemachine.withgoogle.com/models/Jqe6TWNi3/model.json"

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      if((results[0].confidence > 0.5) && (previous_result != results[0].label)){
        console.log(results);
        previous_result = results[0].label;
        var synth = window.speechSynthesis;
        speak_data = 'Object detected is - '+results[0].label;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
  
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
      }
    }
  }
  
  function check() {
    var captured_image
    classifier.classify(captured_image);
  }

 
//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 


//define function gotResult(error, results)
