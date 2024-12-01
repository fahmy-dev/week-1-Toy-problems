// set the speed limit
const speedLimit = 80;
// function to determine whether above or below speed limit
function carSpeed(speed) {
    // number of initial points
    let points = 0;
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // points calculation using math.floor to round it down (to avoid floats)
        points = Math.floor((speed - speedLimit) / 5);
       // what to print depending on how many points accumulated 
       if (points > 12) {
        console.log("License Suspended")
        } else {
        console.log(`${points} demerit points, slow down!`)
        }
    }
}

// calculates the input
carSpeed(125);