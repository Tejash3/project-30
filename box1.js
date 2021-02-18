class Box1 {
    constructor(x,y,width,height){
        var option = {
    'density':0.1,
    'friction':0.5,
    'restitution':0.00000001,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        if((this.body.speed)<4){
        this.display
        strokeWeight(3)
        stroke('black')
        fill("pink");
        rect(pos.x,pos.y,this.width,this.height);
        }
    else{
   World.remove(world,this.body)
    }
    } 
}