function pipes(){
    this.top =random((height/2)-10);
    this.bottom = random((height/2)-10);
    this.x=width;
    this.w=25;
    this.speed=4;
   this.highlight = false;

   this.hits = function(bird) {
       if (bird.y <= this.top || bird.y >= height - this.bottom ){
        if(bird.x >=  this.x && bird.x <= this.x+this.w){
           
            this.highlight=true;
             return true;
        }
        this.highlight=false;
           return false;
       }
   }

    this.show = function(){
        fill(200,200,20);
         
        if(this.highlight){
            fill(200,0,0);
           
        }
        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);
    }

    this.update=function(){
        this.speed+=0.02;
        this.x-=this.speed;

    }

    this.offscreen = function() {
        if(this.x < -this.w) {
            return true;
        } else {
            return false ;
        }
    }
}