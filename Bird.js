class Bird{
    constructor(x,y,width,height){
        var options ={
            restitution:1
        }
        this.body= Bodies.rectangle(x,y,60,60,options);
        this.width= 50
        this.height= 50
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        pos.x= mouseX
        pos.y= mouseY
        var angle= this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill("red")
        rectMode(CENTER);
        ellipse(0,0, this.width, this.height);
        pop()
    }
}