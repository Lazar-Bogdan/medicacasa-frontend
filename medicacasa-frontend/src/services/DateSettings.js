let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let numberMonths = [0,1,2,3,4,5,6,7,8,9,10,11];

export function getMonths(numberMonth){
    let current  = numberMonths[numberMonth];
    let vectorMonth = [current];
    let x = 0;
    for(var i = 0; i<numberMonths.length; i++){
        if(current === numberMonths[i]){
            x = i;
            break;
        }
    }
    for(var i = x + 1; i<numberMonths.length; i++){
        vectorMonth.push(numberMonths[i]);
    }
    for(var i = 0; i<x; i++){
        vectorMonth.push(numberMonths[i]);
    }
    return vectorMonth;
}

export function getDays(numberMonth){
    let currentMonth = months[numberMonth];
    if(currentMonth === "January"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
    if(currentMonth === "February"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    }
    if(currentMonth === "March"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
    if(currentMonth === "April"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    if(currentMonth === "May"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
    if(currentMonth === "June"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    if(currentMonth === "July"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    if(currentMonth === "August"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
    if(currentMonth === "September"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    if(currentMonth === "October"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
    if(currentMonth === "November"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    }
    if(currentMonth === "December"){
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }
}

export function getCurrentDayName(){
    let day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    var d = new Date();
    var dayName = day[d.getDay()];
    let vectorDay = [dayName];
    let x = 0;
    for(var i = 0; i<day.length; i++){
        if(dayName === day[i]){
            x = i;
            break;
        }
    }
    for(var i = x + 1; i<day.length; i++){
        vectorDay.push(day[i]);
    }
    for(var i = 0; i<x; i++){
        vectorDay.push(day[i]);
    }
    return vectorDay;
}

function getCurrentDayNameUnderCond(dayName){
    let day = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let vectorDay = [day[dayName]];
    let x = 0;
    for(var i = 0; i<day.length; i++){
        if(day[dayName] === day[i]){
            x = i;
            break;
        }
    }
    for(var i = x + 1; i<day.length; i++){
        vectorDay.push(day[i]);
    }
    for(var i = 0; i<x; i++){
        vectorDay.push(day[i]);
    }
    return vectorDay;
}

export function arangeDays(days){
    let currentDay = new Date().toLocaleString("en-US", { day : '2-digit'})
    let VectorDay = [parseInt(currentDay,10)];
    let x = 0;
    for(var i = 0; i<days.length; i++){
        if(currentDay == days[i]){
            x = i;
            break;
        }
    }
    for(var i = x + 1; i<days.length; i++){
        VectorDay.push(days[i]);
    }
    // for(var i = 0; i<x; i++){
    //     VectorDay.push(days[i]);
    // }
    console.log(VectorDay);
    return VectorDay;
}

export function DaysDone(currentMonth){
    
}

export function MonthDone(currentMonth,numberOfTimeMonthPressed){
    let currentDays = getDays(currentMonth);
    currentDays = arangeDays(currentDays);
    let newDayName = new Date().getDay() + currentDays.length;
    let newDays = getDays(currentMonth);
    return [newDays, getCurrentDayNameUnderCond(newDayName)];
}

export default {getDays, getCurrentDayName, getMonths, DaysDone,MonthDone};

