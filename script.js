var bird;
var pipe=[ ];
var flag = "off";
var i;
var t=0;

function preload(){
    img = loadImage('night3.jpg');
    birdImg =loadImage('bird.png');
    angryBird = loadImage('angrybird.png');
    img2 = loadImage('night4.jpg');
}
function setup(){
    createCanvas(innerWidth,innerHeight);
    bird = new Bird();
    pipe.push(new pipes());
}



function draw(){

    if ( flag == "off") {
       
    background(img2);
    
    } else if ( flag == "on") {
        background(0);
    }
    bird.show();
    bird.update();

   if ( flag == "off") {
    for ( i =pipe.length-1; i >= 0 ; i-- ){
        
         pipe[ i ].show();
        pipe[ i ].update();
        if ( pipe[ i ].hits(bird)){
            console.log("HIT");
        }
    }          
    }
   if ( frameCount % 30 == 0 )  { 
       pipe.push(new pipes());
   }


}


function keyPressed () {
    if( key == ' ' ) {
        // console.log("space");
        if ( flag == "off") {
        bird.up();
        } else if ( flag == "on" && bird.y == height-10) {
            flag = "off";
            bird.y= height/2;
        //  pipe.x+=20;
            // i=20;
            // console.log("on");
        }
    } 
    return false;
}


function mousePressed ( ) { 
    if ( flag == "off") {
        bird.up();
        } else if ( flag == "on" && bird.y == height-10) {
            flag = "off";
            bird.y= height/2;
        //  pipe.x+=20;
            // i=20;
            // console.log("on"); 
             
        }
          return false;
    } 
