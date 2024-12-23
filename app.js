// **************************************************************************************************
// UYGA VAZIFA
// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

let n = 5;
function getLevel2(n){
    const result = [];
    for(i = 1; i <= n; i++){
        result.push(2 ** i)
    }
    return result
}
console.log(getLevel2(n));



// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]
let m = 5;
let a = 2;
let b = 3;
function generateArray(m, a, b){
    const arr = [a, b]
    let sum = a + b;
    for(i = 2; i < n; i++){
        arr.push(sum)
        sum += arr[i]
    }
    return arr
}
console.log(generateArray(m, a, b));



// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
let Array = ["apple", 5, 9, "cucumber", "tomato"];
function reverse(arr){
    return arr.reverse()
}
console.log(reverse(Array));


// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3
const array = [4, 5, 7, 8, 6, 9];
function OddNumbers(array) {
    const oddNumbers = []; 
    let count = 0;         
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) { 
            oddNumbers.push(array[i]); 
            count++; 
        }
    }

    return oddNumbers + ` odd numbers = ${count}`;
}

console.log(OddNumbers(array));




// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5
let numbers = [4, 5, 6, 7, 8, 9];
let odd = [];
let even = [];
function separateArr(numbers){
    for(let i = 0; i <= numbers.length; i++){
        if(numbers[i] % 2 === 0){
            even.push(numbers[i])
        }else{
            odd.push(numbers[i])
        }
    }
    return [even + odd.reverse()]
}
console.log(separateArr(numbers));



// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.
let names = ["John", "Sam", "Arin", "Susan", "James", "Michael", "Moona"];
function evenNames(names){
    let result = [];
    for(let i = 0; i <= names.length; i += 2){
        result.push(names[i])
    }
    return result
}
console.log(evenNames(names));


// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
function oddNames(names){
    let result = [];
    for(let i = names.length; i >= 0; i -= 2){
        result.push(names[i])
    }
    return result.reverse()
}
console.log(oddNames(names));



// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumIndex = [];
let evenNumIndex = [];
function separateNum(num){
    for(let i = 0; i <= num.length; i += 2){
        evenNumIndex.push(num[i])
    }
    for(let i = 1; i <= num.length; i += 2){
        oddNumIndex.push(num[i])
    }
    return [evenNumIndex + oddNumIndex]
}
console.log(separateNum(number));



// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.
let numberz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddN = [];
let evenN = [];
function processNum(numberz){
    for(let i = 1; i <= numberz.length; i += 2){
        oddN.push(numberz[i])
    }
    for(let i = 0; i <= numberz.length; i += 2){
        evenN.push(numberz[i])
    }
    return [oddN + evenN.reverse()]
}
console.log(processNum(numberz));



// *** difficult
// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...



// chatGPT ishlatdim to'g'risi misol o'zim ishlashga qiynaldim.
// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
let arr = [1, 2, 3, 4, 5, 6, 7];
let K = 2;
let L = 4;
function rangeOutSum(arr, K, L) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < K || i > L) {
            sum += arr[i]; 
        }
    }
    return sum;
}
console.log(rangeOutSum(arr, K, L));











































































