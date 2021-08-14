class Snow {
            constructor(x,y,r){
              var options={
                  restitution:0.4,
                 friction:0.8,
                 density:0.5 
              } 
              this.r=r;
              this.body=Bodies.circle(x,y,this.r,options);
              this.image1=loadImage("snow4.webp");
              this.image2=loadImage("snow5.webp");
              World.add(world,this.body);


            }
            display(){
                var pos=this.body.position;
                var angle=this.body.angle;
                push();
                translate(pos.x,pos.y);
                rotate(angle);
                imageMode(CENTER);
                var r=Math.round(random(1,2))
                if(r===1){
                    image(this.image1,0,0,10,10);

                }
               else{
                image(this.image2,0,0,10,10);

               }
               pop();
            }









}