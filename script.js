// question 1

// let array = [2, 45, 12, 3, 66, 7];
// let sqrArray = array.map((number) =>{
//     return Math.pow(number, 2);
// });

// console.log(sqrArray);

// question 2

// let marks = 89;
// let result = marks < 50 ? 'F' : marks < 60 ? 'D' : marks < 70 ? 'C' : marks < 80 ? 'B' : 'A' ;

// console.log(result)

// question 3

// let car = {
//     company: 'Tata',
//     model: 'Harrier',
//     year: '2023'
// }

// function ChangeYear(year){
//     car.year = year;
// }

// ChangeYear('2024');

// let {model, year} = car;
// console.log(model);
// console.log(year);

// question 4

// let array = [2, 3, 4, 5, 8];

// array = array.filter((number) => {
//     if (number < 2) {
//         return false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// });

// console.log(array); 

// question 5

// 1. **Map Function:**
//    - Use Case: Transforming Data
//      - Example: Converting an array of temperatures from Celsius to Fahrenheit.
//      - `const fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 9/5) + 32);`

// 2. **Filter Function:**
//    - Use Case: Filtering Data
//      - Example: Filtering out all even numbers from an array.
//      - `const oddNumbers = numbers.filter(num => num % 2 !== 0);`

// 3. **Reduce Function:**
//    - Use Case: Aggregating Data
//      - Example: Calculating the sum of all elements in an array.
//      - `const sum = numbers.reduce((acc, current) => acc + current, 0);`

// question 6

const apiFetch = async () => {
    try {
        let api = await fetch('https://catfact.ninja/fact');
        let result = await api.json();
        console.log(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

apiFetch();