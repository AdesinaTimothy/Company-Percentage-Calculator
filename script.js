
// function calculatePercentage (base, experience) {
//     if (experience >= 5) {
//         const percentage = base * 0.10;
//         return totalToBePaid = base + percentage;
//     } else {
//         const percentage = base * 0.05
//         return totalToBePaid = base + percentage
//     };
// };

// const employer1TotalSalary = calculatePercentage(50000, 6);
// const employer2TotalSalary = calculatePercentage(60000, 4);
// const employer3TotalSalary = calculatePercentage(45000, 8);

// const total =  employer1TotalSalary + employer2TotalSalary + employer3TotalSalary;
// const totalSalaryTobePaid = `$${total}`
// console.log(totalSalaryTobePaid);


function calculatePercentage (base, experience) {
    const percentage = experience >= 5? base * 0.10 : base * 0.05;
    return base + percentage;
};

const employer1TotalSalary = calculatePercentage(50000, 6);
const employer2TotalSalary = calculatePercentage(60000, 4);
const employer3TotalSalary = calculatePercentage(45000, 8);

const total =  employer1TotalSalary + employer2TotalSalary + employer3TotalSalary;
const totalSalaryTobePaid = `$${total}`
console.log(totalSalaryTobePaid);







