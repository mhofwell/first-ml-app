/* eslint-disable */

let mobileNet = ``;
let video = ``;
let label = ``;

function modelReady() {
        console.log('Model is ready!');
        mobileNet.predict(gotResults);
}

// yeah baby

function gotResults(error, results) {
        if (error) {
                console.error(error);
        } else {
            //    console.log(results); 
                label = results[0].label;
                mobileNet.predict(gotResults);
                
            }
        }
        
        // function imageReady() {
            //         image(dog, 0, 0, width, height);
            // }
            
            function setup() {
                createCanvas(600, 500);
                video = createCapture(video);
                mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);
                video.hide();
                background(0);
            }
            
            function draw(){
                background(0);
                image(video,0,0, width, 450)
                fill(255);
                textSize(15);
                text(label, 10, height - 20);
}