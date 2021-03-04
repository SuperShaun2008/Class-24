class Pig{
    constructor(x,y,width,height){
        var options ={
            restitution:0.5
        }
        this.body= Bodies.rectangle(x,y,60,60,options);
        this.width= 50
        this.height= 50
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill("green")
        rectMode(CENTER);
        ellipse(0,0, this.width, this.height);
        pop()
    }
}