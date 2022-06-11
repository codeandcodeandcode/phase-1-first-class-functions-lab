const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (arr)=> {
    return `${arr[0]}  ${arr[1]}`;
}

const returnLastTwoDrivers = (arr)=> {
    return  `${arr[arr.length - 2]}  ${arr[arr.length - 1]}`;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num)=>{
    return function(num2){return num2 * num};
}

const fareDoubler = (num) =>{
    let db = createFareMultiplier(2);
    return db(num);
}

