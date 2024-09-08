//1-Conditional


var eatsPlants = false;
var eatsAnimals = true;
( eatsPlants && eatsAnimals)? console.log("omnivore"):(eatsAnimals)?console.log("carnivore") :(eatsPlants)?console.log("herbivore"):console.log(undefined)


//2-


var musicians = 4;
// var musicians = 1;
// var musicians = 2;
// var musicians = 3;
// var musicians = 4;

if(musicians >4){
    console.log(" this is a large group")

}else if(musicians == 1){
    console.log("solo")


}else if(musicians == 2){
    console.log("duet")


}else if(musicians == 3){
    console.log("trio")


}else if(musicians == 4){
    console.log("quartet")


}else{
    console.log(" not a group")

}



var suspect = "Mr. Parkes"; 


var weapon = "";
var solved = false;

if(room==="billiards room" && suspect==="Mrs. Sparr"){
    weapon="pool stick"; solved=true
}else if(room==="dining room" && suspect==="Mr. Parkes"){
    weapon="knife"; solved=true
}else if(room==="ballroom" && suspect==="Mr. Kalehoff"){
    weapon=" poison"; solved=true
}else if(room==="gallery" && suspect==="Ms. Van Cleve"){
    weapon=" trophy"; solved=true
}


if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}



//4-Checking Your Balance

var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true

if(checkBalance  && isActive && balance >0){
console.log(`your balance is${balance}`)
    
}else{
console.log("your acount not active or negative ");

}

if(checkBalance== true){

if(balance > 0){
    console.log("your balance is "+balance)
    
}else{
    console.log("your balance is nigitive "+balance)
}
}




//4-ice cream
let flavor = "chocolate";
let vessel="cone"
let toppings = "peanuts";

if(flavor=="vanilla" ||"chocolate"){
if(vessel=="cone" || "bowl")

if(toppings=="sprinkles" || "peanuts")
    console.log( `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}
else{
    console.log("we dont have this flaevor")
}
