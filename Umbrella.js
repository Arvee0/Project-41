class Umbrella{
    constructor(x,y){
        var options = {
        restitution=0.45

        }
       this.body=Bodies.circle(x,y,40,options);
       World.add(world,this.body);

       


    }
    
    
    
}