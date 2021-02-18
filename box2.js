class Box2 {
    constructor(x,y,width,height){
        var option = {
    'density':0.1,
    'friction':0.5,
    'restitution':0.0000000001,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        if((this.body.speed)<4){
        strokeWeight(3)
        stroke('black')
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        }else{
            World.remove(world,this.body)
        }
    }
    }