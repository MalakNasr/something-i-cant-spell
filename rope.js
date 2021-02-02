class Rope{
    constructor(b1,body,dx,dy){
        this.dx = dx
        this.dy = dy
        var options = {
            bodyA: b1,
            bodyB: body,
            pointB: {x:this.dx, y: this.dy}
        }
     
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        if (this.rope.bodyA){
            var p1 = this.rope.bodyA.position;
            var p2 = this.rope.bodyB.position;
            stroke("red")
            strokeWeight(5);
            
            line(p1.x, p1.y, p2.x+this.dx, p2.y+this.dy);
        }
    

    }
}