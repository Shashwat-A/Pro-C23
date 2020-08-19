class Box {
    constructor(x,y,height,width) {
        var options = {
            'isStatic' : true,
            'friction' : 1.0
        }

        this.body = Bodies.rectangle(x,y,height,width,options);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
     }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.height,this.width);
    }
}