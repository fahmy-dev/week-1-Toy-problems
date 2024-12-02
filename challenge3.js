// PAYE rates for each duration
const tax = {
    "2021-jan to 2023-jun": {
        monthly: [
            {min: 0, max: 24000, rate: 0.1},
            {min: 24001, max: 32333, rate: 0.25},
            {min: 32334, max: Infinity, rate: 0.3}
        ],

        yearly: [
            {min: 0, max: 288000, rate: 0.1},
            {min: 288001, max: 388000, rate: 0.25},
            {min: 388000, max: Infinity, rate: 0.3}
        ]
    },
    "2023-july onwards": { 
        monthly: [
        { min: 0, max: 24000, rate: 0.1},
        { min: 24001, max: 32333, rate: 0.25},
        { min: 32334, max: 500000, rate: 0.3},
        { min: 500001, max: 800000, rate: 0.325},
        { min: 800000, max: Infinity, rate: 0.35}
        ],
        
        yearly: [
        { min: 0, max: 288000, rate: 0.1},
        { min: 288001, max: 388000, rate: 0.25},
        { min: 0, max: 6000000, rate: 0.3},
        { min: 0, max: 9600000, rate: 0.325},
        { min: 9600000, max: Infinity, rate: 0.35}
        ]
    }
};
// Health insurance rates for each period
const healthInsurance = {
    "2015-april to 2024-september": [
        { min: 0, max: 5999, rate: 150},
        { min: 6000, max: 7999, rate: 300},
        { min: 8000, max: 11999, rate: 400},
        { min: 12000, max: 14999, rate: 500},
        { min: 15000, max: 19999, rate: 600},
        { min: 20000, max: 24999, rate: 750},
        { min: 25000, max: 29999, rate: 850},
        { min: 30000, max: 34999, rate: 900},
        { min: 35000, max: 39999, rate: 950},
        { min: 40000, max: 44999, rate: 1000},
        { min: 45000, max: 49999, rate: 1100},
        { min: 50000, max: 59999, rate: 1200},
        { min: 60000, max: 69999, rate: 1300},
        { min: 70000, max: 79999, rate: 1400},
        { min: 80000, max: 89999, rate: 1500},
        { min: 90000, max: 99999, rate: 1600},
        { min: 100001, max: Infinity, rate: 1700}
    ],
    "2024-october onwards": [
        {min: 0, max: Infinity, rate: 0.0275}
    ]
};
// Pension rates for each period
const pension = {
    "up to 2024-january": [
        {min: 0, max: 18000, rate: 0.06}
    ],
    "2024-february onwards": [
        {min: 0, max: 36000, rate: 0.06}
    ]
};

// functions to calculate the health insurance rate
function calculateHealthInsurance(salary, date) {
    const dateEffect = new Date(date); // is used to make sure the date's passed are actually classified as dates and not strings
    let healthInsuranceRates;
    if (dateEffect >= new Date("2024-10-01")) {
        healthInsuranceRates = healthInsurance["2024-october onwards"];
    } else {
        healthInsuranceRates = healthInsurance["2015-april to 2024-september"]
    }
    for (const range of healthInsuranceRates) {
        if (salary >= range.min && salary <= range.max) {
            return range.rate;
        }
    }
    return 0; // to give me back a value instead of 'undefined'
}
// fucntion to calculate the pension rate
function calculatePension(salary, date) {
    const dateEffect = new Date(date);
    let pensionRates;
    if (dateEffect >= new Date("2024-02-01")) {
        pensionRates = pension["2024-february onwards"];
    } else {
        pensionRates = pension["up to 2024-january"];
    }
    for (const range of pensionRates) {
        if (salary >= range.min && salary <= range.max) {
            return range.rate;
        }
    }
    return 0;
}

// function to calculate PAYE
function calculatePaye(salary, date, periodType) {
    const dateEffect = new Date(date);
    let taxRates;
    if (dateEffect >= new Date("2023-07-01")) {
        taxRates = tax["2023-july onwards"];
    } else {
        taxRates = tax["2021-jan to 2023-jun"];
    }
    
    const selectedRates = taxRates[periodType]; // this is to point to the inner objects holding the arrays containing the monthly and yearly values 
    
    for (const range of selectedRates) {
        if (salary >= range.min && salary <= range.max) {
            return range.rate;
        }
    }
    return 0;
}

// function to callback the functions above, and to calculate the net salary
function netSalaryCalculator(gross, benefits, date, periodType) { 
    const taxablePay = gross - benefits
    const healthInsuranceCut = calculateHealthInsurance(taxablePay, date);
    const pensionCut = calculatePension(taxablePay, date) * taxablePay;
    const taxCut = calculatePaye(taxablePay, date, periodType) * taxablePay;

    const totalCut = healthInsuranceCut + pensionCut + taxCut;
    const netSalary = taxablePay - totalCut;
    return netSalary;
}


console.log(netSalaryCalculator(1111000, 5000, "2024-02-10", "yearly"));