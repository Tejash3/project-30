class Ball {
  constructor(x,y,width,height){
    var option = {
    'density':4,
    'friction':0.5,
    'restitution':1.8
    };
    this.body = Bodies.rectangle(x,y,5,5,option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    fill("red");
    ellipse(pos.x,pos.y,this.width,this.height);
}

} 