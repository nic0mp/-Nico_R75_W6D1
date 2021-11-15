//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(nList){
    for(let i =0; i < nList.length; i++){
        console.log(nList[i])
       
    }
   
console.log(findWords(dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(replacement){
    //code goes here
    for(let i=0; i < givenArr.length; i++){
        (i % 2 == 0)? givenArr.splice(i,1,replacement) : givenArr[i]
    }
    return givenArr
}
console.log(replaceEvens("even index"))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
