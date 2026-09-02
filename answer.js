
// Question-> 2

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