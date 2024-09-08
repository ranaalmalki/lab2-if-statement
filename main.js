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