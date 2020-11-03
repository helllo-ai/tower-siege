class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        polygon=Bodies.circle(50,200,20)
        World.add(world,polygon)
   
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            imageMode (CENTER)
            image(polygonimg,polygon.position.x,polygon.position.y,40,40)
            if(polygon.body.position.x<220)
            {
             
            
            strokeWeight(4);
            
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            polygon.display()
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
          
            }
            else
            {
                strokeWeight(4);
                stroke(94, 80, 52)
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                polygon.display()
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
               
            }
            
        }
        
    }
    
}