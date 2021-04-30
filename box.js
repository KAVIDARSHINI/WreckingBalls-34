class Box
{
	constructor(x,y)
	{
		var options={
			restitution : 0.8,
            density : 0.04,
            friction : 1			
			}
		this.x=x;
		this.y=y;
		this.w=70
		this.h=70
		this.body=Bodies.rectangle(x, y, 70, 70 , options);
 		World.add(world, this.body);

	}
	display()
	{
			var BoxPos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(BoxPos.x, BoxPos.y);
            rotate(angle);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}