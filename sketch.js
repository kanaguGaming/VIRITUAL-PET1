//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  dogHappyI = loadImage("dogImg1.png");
  dogI = loadImage("dogImg.png");
	//loading images 
}

function setup() {
  database = firebase.database();
  //creating canvas
  createCanvas(500,500);

  //cretiing the dog
  dog = createSprite(250,250,10,10);
  dog.addImage(dogI);

  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyI);
  }
  //draw all sprites
  drawSprites();
  Text("Note: Press UP_ARROW key to feed Drago Milk",10,10);
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  } else{
    x=x+1;
  }

  database.ref('/').update({
    Food:x
  })
}



