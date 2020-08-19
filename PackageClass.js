class Package {
    constructor () {
        var options = {
            'isStatic' : true,
            'restitution' : 1.0
        }
        this.image = loadImage("packageresized.png");
        this.body = Bodies.rectangle(350, 120, 10, 10, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.body.width, this.body.height);
    }
    drop() {
        if(keyCode === 40) {
            Matter.Body.setStatic(this.body, false);
        }
    }
}