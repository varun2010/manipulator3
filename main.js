leftWristX=0;
rightWristX=0;
difference=0;
leftWristY=0;
rightWristY=0;
function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(640,480);
    video.position(15,100);
    canvas=createCanvas(1240,480);
    canvas.position(670,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        if(leftWristX>rightWristX){
            difference=leftWristX-rightWristX;
        }
        else{
            difference=rightWristX-leftWristX;
        }
    }
}
function modelLoaded(){
    console.log("model is loaded")
}
function draw(){
    background("turquoise");
    fill("blueviolet");
    textSize(difference);
    text("Varun Prabhakaran",10,470);
    document.getElementById("square_side").innerHTML="Font size is "+floor(difference);
}