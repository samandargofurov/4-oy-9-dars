// let arr = [1, 2, 'salom', true, 'bye', 3n];

// read
// console.log(arr[6]);

// update
// arr[4] = false;

// arr.push(10);
// arr.unshift(54);

// arr.pop();
// arr.shift();

// console.log(arr);

// let sum = 0;

// let arr = [2, 3, 4, 5, 1, 6, 7];
// for (let i = 0; i <= arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// 1. Sonlardan tashkil topgan massivdan eng kichik elementni topuvchi funksiya yozing (sort)

// let arr = [5, 14, 3, 1, 9, 18, 27, 16, 25, 24, 33, 22, 11];

// let min = arr.sort(function (a, b) {
//     return a - b
// });

// console.log(min);

// 2. Sonlardan tashkil topgan massiv elementlari orasidan toq indeksdagilarining yigindisini topuvchi funksiya yozing

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 3. Sonlardan tashkil topgan massiv elementlari orasidan tublarini topuvchi funksiya yozing

let massiv = [2, 4, 3, 6, 5, 7, 9, 11, 10];

function tubSonlar(arg){
    let counter = 0;

    for (let i = 1; i < arg; i++) {
        if (i % 2 == 1){
            counter++
        }
    }

    if (counter == 2) {
        counter++
    }

    return counter
}

console.log(tubSonlar(massiv));

// 4. Sonlardan tashkil topgan massiv elementlari orasidan 3 ga karralilarining sonini topuvchi funksiya yozing
