//calculate daysleft
function newYear(currentDay)
{
    var limit = new Date("September 20, 2022");
    // in JavaSCript, a Date object minus another Date object the results is in milliseconds
    // therefore, have to divide 1000 to convert result to seconds
    //            then divide 60 to convert result to minutes
    //            then divide 60 to convert result to hours
    //            then divide 24 to convert result to days

    var DayCount = (limit-currentDay)/(1000*60*60*24);
    return DayCount;
}