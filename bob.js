class Bob{
        constructor(x,y,Diameter){
            var options={
                isStatic:false,
                density:1.2,
                restitution:0.3,
                friction:0.5	
                }
            this.x=x;
            this.y=y;
           
            this.body=Bodies.circle(x, y,Diameter,options);
             World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle; 
           
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill("purple")
            ellipseMode(RADIUS);
            ellipse(0,0,90);
            pop();
          };
        };
