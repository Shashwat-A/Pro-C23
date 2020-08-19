class Helicopter {
    constructor() {
        var options = {
            'isStatic' : true,
            'friction' : 2.0
        }
        this.image = loadImage("helicopter.png");
        this.body = Bodies.rectangle(200, 50, 60, 100, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 150, 50, this.body.width, this.body.height);
        pop();
    }
    
}