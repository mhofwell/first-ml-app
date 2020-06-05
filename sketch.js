/* eslint-disable */

let mobileNet = ``;
let dog = ``;

function modelReady() {
        console.log('Model is ready!');
        mobileNet.predict(dog, gotResults);
}

function gotResults(error, results) {
        if (error) {
                console.error(error);
        } else {
                console.log(results);
                let label = results[0].label;
                fill(0);
                textSize(12);
                text(label, 10, height - 100);
        }
}

function imageReady() {
        image(dog, 0, 0, width, height);
}

function setup() {
        createCanvas(200, 200);
        dog = createImg('images/dog1.jpg', imageReady);
        mobileNet = ml5.imageClassifier('MobileNet', modelReady);
        dog.hide();
        background(0);
}
