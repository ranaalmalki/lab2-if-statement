//1-Conditional


/*
 * Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */
( eatsPlants && eatsAnimals ==true)? console.log("omnivore"):console.log(undefined);

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

//4-Checking Your Balance
/*
 * REQUIREMENTS
* 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
* 2. Your code should include an `if...else` conditional statement
* 3. Your code should produce the expected output
* 4. Your code should not be empty
* 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
*/

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true

if(checkBalance === true && isActive){

    
}else{

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
