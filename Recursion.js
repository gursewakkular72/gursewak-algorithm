/// THe following files contains the problems solved using recursion.
const countDown = (num) {
    if(num === 0) return; 
    console.log(num); 
    num--; 
    countDown(num); 
}