//Create variables here
var  dog,dogimg, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dogimg=loadImage ("images/Dog.png");
  dogimg=loadImage ("images/doglmg1.png");
}

function setup() {
  database=firebade.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg)
  dog.scale=0.5;
  foodStock=database.ref('food');
  foodStock.on("value",readsStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg);
  }
  drawSprites();
  fill(255,255,254); 
  stroke("black");
   text("Food remaining : "+foodS,170,200);
    textSize(13); 
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

  //add styles here

}
function readStock(data){
  foodS-data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

