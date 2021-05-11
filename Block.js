class Block{
  constructor(x, y) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      World.add(world, this.body);
      this.image=loadImage("block.png");
      this.visibility=255;
    }
    display(){
      var pos= this.body.position;
      
      if(this.body.speed<3){
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,30,40);
      }
      else{
        World.remove(world,this.body);
        push();
        tint(225,this.visibility);
        this.visibility=this.visibility-5;
        image(this.image,pos.x,pos.y,30,40);
        pop ();
      }

    }
}