class Drop{
    constructor(x,y){
    var options = {
        restitution: 0.15
        
    }
    this.body=Bodies.circle(x,y,20,options);
   World.add(world,this.body);

   var maxDrops=100;
   for(var i=0;i<maxDrops;i++){
       drops.push(new createDrop(random(0,400), random(0,400)))
   }



    }
}
