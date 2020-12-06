class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push();
   translate(pos.x,pos.y); 
    rotate(ang); 
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green")
    fill("yellow");
    rect(0,0, this.width, this.height);
    pop();   
  }
};
