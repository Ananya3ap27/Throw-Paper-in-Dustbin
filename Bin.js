class BinWall1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }; 
  class BinWall2 extends BinWall1{
    constructor(x,y,width,height) {
      super(x,y,width,height);
    }
  }; 
  class BinWall3 extends BinWall1{
    constructor(x,y,width,height) {
      super(x,y,width,height);
    }
  }; 