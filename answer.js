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



