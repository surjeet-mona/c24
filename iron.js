class iron{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:3,
            density:30
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        strokeWeight(4)
        stroke("black")
        fill("black")
        rect(pos.x,pos.y,100,100)
        rectMode(CENTER)
        pop()
    }
}