function speedDetector() {
    const speed = parseFloat(prompt("Enter the speed of the car (km/h): "));

    if (isNaN(speed) || speed < 0) {
        return "Invalid input! Please enter a valid speed.";
    }

    if (speed < 70) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        return demeritPoints > 12 ? "License suspended" : `Points: ${demeritPoints}`;
    }
}

//Test examples
console.log(speedDetector(20)); //Ok
console.log(speedDetector(80)); //Points: 2
console.log(speedDetector(100)); //Points: 6
console.log(speedDetector(200)); //License suspended

