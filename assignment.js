////////////-----Problem 1 ------///////////


function radianToDegree(radian) {
    // bonus part--

    if (typeof radian !== "number") {
        return "Error -Please input valid information"
    }
    //bonus part ends--
    else {
        let degree = radian * 57.2958;
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
}




////////////-----Problem 2 ------///////////


function isJavaScriptFile(jsFile) {
    //bonus-part
    if (typeof jsFile !== "string") {
        return "Syntax Eror"
    }
    //bonus part ends
    else if (jsFile.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
let javaScirpt = isJavaScriptFile()




////////////-----Problem 3 ------///////////

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    //Bonus-Part 
    if (typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return 'Error- Input the right information'
    }
    //bonuspart ends

    else {
        const dieselPricePerLiter = 114;
        const petrolPricePerLiter = 130;
        const octanePricePerLiter = 135;

        const dieselCost = dieselQuantity * dieselPricePerLiter;
        const petrolCost = petrolQuantity * petrolPricePerLiter;
        const octaneCost = octaneQuantity * octanePricePerLiter;

        totalOilCost = dieselCost + petrolCost + octaneCost;
        return totalOilCost;
    }
}

let oilCost = oilPrice();


////////////-----Problem 4 ------///////////

function publicBusFare(passengers) {
    //Inputs
    const reservedBusCapacity = 50;
    const microBusCapacity = 11;
    const busFare = 250;

    /////----Bonus Part Starts-----////
    if (typeof passengers !== "number") {
        return "!Error input a valid information"
    }
    /////----Bonus Part Ends-----////

    else if (passengers => reservedBusCapacity) {
        let restPassengers = passengers % reservedBusCapacity;
        if (restPassengers => microBusCapacity) {
            restPassengers = restPassengers % microBusCapacity;
            let busTicketPrice = restPassengers * busFare;
            return busTicketPrice;
        }
        else {
            busTicketPrice = restPassengers * busFare;
            return busTicketPrice;
        }
    }
    else if (passengers => microBusCapacity) {
        restPassengers = passengers % microBusCapacity;
        busTicketPrice = restPassengers * busFare;
        return busTicketPrice;
    }
    else {
        busTicketPrice = passengers * busFare;
        return busTicketPrice;
    }

}




////////////-----Problem 5 ------///////////

function isBestFriend(friendShip1, friendShip2) {

    ///Bonuspart///
    if (typeof friendShip1 !== "object" || typeof friendShip2 !== "object") {
        return 'Error--Jhankar vai eta object na....'
    }
    //bonuspart ends

    else if (friendShip1.name === friendShip2.friend && friendShip2.name === friendShip1.friend) {
        return true;
    }
    else {
        return false;
    }
}