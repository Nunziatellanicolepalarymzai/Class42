function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   var str="hi"
   var num=8
   var def=true
   var name = "Rajeev"
   console.log(name)
   console.log(name.length)
   console.log(name.toUpperCase())
   var num1="123"
  
   //var num1=parseInt("123")
   console.log(13%5)
   console.log(13/5)
   console.log("Hi" + "Friend")
   console.log("8"+"8")
   console.log(num1+num1)
   var obj=null
   var obj1;

   var name = "my name";

switch(name) {  
case  "My name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}

for(var i=0; i<=5; i++){
	console.log(i)
}
var i =0
while (i<=5){
	console.log(i)
	i=i+1

}

var friends = ["friend1","friend2","friend3"]
console.log(friends[1])


for(var index in friends){
	console.log(friends[index])
}


}


function draw() {
  background(255,255,255);  
  drawSprites();
}