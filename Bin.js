class Box {
	constructor(x,y,width,height){
		this.height=200
		this.width=220
	  this.body1 = Bodies.rectangle(495,610,100,20,{isStatic:true});
	  this.body2 = Bodies.rectangle(595,650,20,200,{isStatic:true});
	  this.body3 = Bodies.rectangle(695,610,100,20,{isStatic:true});
	  this.image=loadImage("waste.png")
	  World.add(world,this.body1);
	  World.add(world,this.body2);
	  World.add(world,this.body3);
	 
 }	
 display(){
 push()
 translate(this.body1.position.x,this.body1.position.y)
 rotate (this.body1.angle)
 stroke ("lightgreen")
 fill ("lightgreen")
 pop()

 push()
 translate(this.body2.position.x,this.body2.position.y)
 rotate (this.body2.angle)
 stroke ("lightgreen")
 fill ("lightgreen")
 imageMode (CENTER)
 image (this.image,0,0,this.width,this.height)
 pop()

 push()
 translate(this.body3.position.x,this.body3.position.y)
 rotate (this.body3.angle)
 stroke ("lightgreen")
 fill ("lightgreen")
 pop()

 }
}