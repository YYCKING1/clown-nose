noseX = 0;
noseY = 0;
function preload()
{
clown_nose = loadImage("https://i.postimg.cc/pTkkhjVd/NOSE.png");
}
 function setup()
 {
     canvas = createCanvas( 300, 300);
     canvas.center();
     // this is a pre defind function of p5 library and creat canvas is a pre defind function
     video = createCapture(VIDEO);// this is the function to access the web cam and live preview
     video.size(300,300);// this is for the video sizing
     video.hide();// this is used to hide the extra element by the createCapture function
     poseNet = ml5.poseNet(video, modelloaded); // this is the function to start identifying the key point coordianates of the live preview that is stored in the video variable
     poseNet.on("pose", gotPoses);

 }
 function draw()
 {
image(video, 0, 0, 300, 300); // this is the live preview to present the image on the canvas
//circle(noseX , noseY, 30); // this is to draw a circle and follow you
//fill( 255, 0, 0);// this is to fill in the circles color
//stroke( 255, 0, 0);// this is to change the boreders color to red
image(clown_nose, noseX, noseY, 70, 70)
 }
 function take_snapshot()
 {
     save("myFilterimagepng"); // save  is a predefind function will down load the image and save it under the name it was put for
 }
 function modelloaded()// this is for to get a confirmation that poseNet and ml5 have been installed and triggerd/started correctly
 {
console.log("poseNet and ml5 have been initialized");
 }
 function gotPoses(results)
 {
     if(results.length > 0 )
     {
         console.log(results);
         noseX =  results[0].pose.nose.x -35;// reducint the values to adgust the image on the nose for both nose x and y
         noseY =  results[0].pose.nose.y -40;
         console.log("nose x =" + noseX);
         console.log("nose y =" + noseY);
        
     }
 }
