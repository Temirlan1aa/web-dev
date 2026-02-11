function getWeekday(date) {
    let days = ["MO" , "TU" , "WD" , "TH" , "FR" , "SA" , "SU" ]

    return days[date.getDay()];
}

let date = new Date(2012 , 0 , 3);

console.log(getWeekday(date));