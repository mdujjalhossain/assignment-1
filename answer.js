//  Question -> 1: Value Detective
function describeValue (input_val){
    let valueType = typeof input_val;
    let bool_status;

    if(input_val){
        bool_status = "truthy";
    }
    else{
        bool_status = "falsy"
    }
    return `"${valueType} | ${bool_status}"`
}

// Question-> 2: Bangladesh Weekend Machine
function getDayData(day){
    let input_day = day.toLowerCase()

    switch(input_day){
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        
        default:
            return "Invalid Day";
    }
}

// Question -> 3: Username Gatekeeper

function validateUserName(userName){

    if(userName.length<4){
        return "Too Short"
    }
    else if(userName.includes(" ")){
        return "No Space Allowed"
    }
    else if(userName.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    else{
        return "Available"
    }
}

//  Question-> 4:Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let base_fare = 50;
    let extend_fare = 15;
    let waiting_charge = 2;
    
    let distance_fare = 0
    if(distance <= 2){
        distance_fare = base_fare;
    }
    else{
        let total_extend_fare = (distance - 2) * extend_fare
        distance_fare = base_fare + total_extend_fare
    }
    
    let waiting_fare = waitingMinutes * waiting_charge;

    let total_fare = distance_fare + waiting_fare;
    if(isNight == true){
        let extra_nightFare = total_fare * 0.2;
        total_fare += extra_nightFare 
    }

    return total_fare;
}


