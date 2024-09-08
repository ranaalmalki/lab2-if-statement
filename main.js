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

//3-Murder mystery


/*
 * REQUIREMENTS
 * 1. Your code should have variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (solved) {
    console.log();
}

//4-Checking Your Balance

var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true

if(checkBalance && isActive){
console.log(`your balance is${balance}`)
    
}else{
console.log("your acount not active");

}




/*
* REQUIREMENTS
* 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
* 2. Your code should have an `if` statement
* 3. Your code should use logical expressions
* 4. Your code should work with 
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
* 
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
*   
* 5. Your code should NOT log (print) anything when 
*  - the flavor is something other than "vanilla" or "chocolate"
*  - the vessel is something other than "cone" or "bowl"
*  - the toppings is something other than "sprinkles" or "peanuts"
* 
* 6. Your code should not be empty
*/

// change the values of `flavor`, `vessel`, and `toppings` to test your code
//6-/*
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
