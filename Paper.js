class Paper{

    constructor(x,y){
  var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:0.8
  }
  this.body = Bodies.circle(x,y,20,20,options);
 /this.image = loadImage("paper(1).png");
  World.add(world,this.body);



}

display(){
    
  var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);   
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
}
}