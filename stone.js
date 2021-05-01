class stone{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.body=Bodies.rectangle(x,y,100,50,options);
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        strokeWeight(4)
        stroke("black")
        fill("brown")
        rect(pos.x,pos.y,100,50)
        rectMode(CENTER)
        pop()
    }
}