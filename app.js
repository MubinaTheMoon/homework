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





















