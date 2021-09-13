noseX = 0;
noseY = 0;

function preload() {
    tiara = loadImage('https://i.postimg.cc/zG9JTn7B/queen-crown-transparent-11553373676h0j0vtplmm-removebg-preview.png');
}

function take_snap() {
    save('myFilterimage.jpg');
}

function setup() {
    canvas = createCanvas(2350, 2100);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(tiara, noseX, noseY, 170, 130);

}

function modelLoaded() {
    console.log('PoseNet is intialised');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-70;
        noseY = results[0].pose.nose.y-160;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);
    }
}
