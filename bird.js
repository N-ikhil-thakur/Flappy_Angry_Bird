function Bird(){
    this.x=30;
    this.y = height/6;
    this.gravity=0.6;
    this.velocity=0;
    this.lift=-15;
   
   
   
    this.show = function( ) {
        // fill(birdImg);
    //    ellipse(this.x,this.y,20,20);
    image(angryBird, this.x, this.y, 25, 25);
   }
   
    this.update = function ( ) {
        this.y+=this.velocity;
        this.velocity+=this.gravity;
        this.velocity*=0.9;
        
        if(this.y > height-10){
            this.y=height-10;
            this.velocity=0;
            flag = "on";
        }
   
        if(this.y <= 0){
           this.y=10;
           this.velocity=0;
           flag = "on"; 
           i = pipe.length-1;
   
       }
   }
   
   this.up = function ( ) {
       if ( flag == "off"){
       this.velocity+=this.lift;
       }
   }
   
   
   
   }