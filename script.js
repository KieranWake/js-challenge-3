function timeForMilkAndCookies(date) {
    const [month, day] = [date.getMonth(), date.getDate()]; 

    if (month === 11 && day === 24) {
        return true;
    } else {
        return false;
    }
}

console.log(timeForMilkAndCookies(2012, 9, 23));
