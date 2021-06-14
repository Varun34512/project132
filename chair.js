status="" ;
img="" ;

function preload(){
   img = loadImage("chair.jpg") ;
   }

   function setup() {
    canvas = createCanvas(580,420) ;
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded) ;
    document.getElementById("status").innerHTML="Status : Detecting Object" ;
}

function modelLoaded() {
    console.log("model is loaded") ;
    status=true ;
    objectDetector.detect(img, gotResult) ;
}


function gotResult(error,results) {
    if (error) {
        console.log(error) ;
    } else {
        console.log(results) ;
    }
}

function draw(){
    image(img,0,0,580,420) ;
  }
