Peter_pan_song="";
Harry_potter_theme_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    canvas.position(430,170);

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("peterpan.mp3");
    Harry_potter_theme_song = loadSound("harrypotter.mp3");
}

function draw() {
    image(video,0,0,600,530);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}