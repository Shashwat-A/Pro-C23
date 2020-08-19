class Ground {
    constructor (x,y) {
        var options = {
            'isStatic' : true,
            'friction' : 2.0
        }
 
        this.body = Bodies.rectangle(x,y, 850, 30, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,850 , 30);
    }
}