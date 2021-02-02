var dog,sadDog,happyDog;
var button1,button2;
var food;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1=createButton("ADD FOOD")
  button1.position(700,95)
  button1.mousePressed(addFoods)

  button2=createButton("FEED THE DOG")
  button2.position(800,95)
  button2.mousePressed(feedDog)

  food=new Food();
  food.getFood();
  //food.detectFood();
  food.display();
}

function draw() {
  background(46,139,87);
  drawSprites();
}


function addFoods(){
  foodStock++;
  database.ref("/").updata({
    Food: foodStock
  })
}

function feedDog(){
  dog.addImage(happyDog)
console.log(food.getFood())
  if(food.getFood()<= 0){
    food.updateFood(food.getFood()*0);
  } else{
    food.updateFood(food.getFood()-1);
  }
}