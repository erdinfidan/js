/******************************************ÖDEV-2 SORU-1 START********************************************/
console.log("SORU-1****START***")
function isPrime(x) { // Gönderilen sayınınn ASAL olup olmadığını true-false olarak dönen bir fonksiyon.
    if (x > 1) {
        for (let i = 2; i < x - 1; i++) {
            if (x % i == 0) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}
function findPrime(numbers) { // Gönderilen Sayıların yanlarına asal olup olmadıklarını yazan ve dönen bir Fonksiyon.
    numbers.forEach(x => {
        if (isPrime(x)) {
            console.log(x + " Asal Sayıdır.");
        } else {
            console.log(x + " Asal Sayı Değildir.");
        }
    });
};
let numbers = [2, 5, 8, 21, 13]
findPrime(numbers)
console.log("SORU-1****FİNİSH***")
/******************************************ÖDEV-2 SORU-1 FİNİSH********************************************/

/******************************************ÖDEV-2 SORU-2 START********************************************/
console.log("SORU-2****START***")
function isFriendNumbers(number1, number2) { // Arkadaş Sayıları Tespit eden bir Fonksiyon.
    let total1 = 0
    let total2 = 0
    for (let i = 1; i < number1 - 1; i++) {
        if (number1 % i == 0) {
            total1 += i
        }
    }
    for (let i = 1; i < number2 - 1; i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }
    if (number1 === total2 && number2 === total1) {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayılardır")
    } else {
        console.log(number1 + " ve " + number2 + " Düşman Sayılardır :))")
    }
}

isFriendNumbers(284, 220)
isFriendNumbers(284, 2200)
console.log("SORU-2****FİNİSH***")
/******************************************ÖDEV-2 SORU-2 FİNİSH********************************************/

/******************************************ÖDEV-2 SORU-3 START********************************************/
console.log("SORU-3****START***")
function isPerfectNumber(number1) { //Mükemmel Sayıları Tespit eden bir Fonksiyon.
    let total = 0
    for (let i = 1; i <= number1; i++) {
        if (number1 % i == 0) {
            total += i
        }
    }
    if ((2 * number1) === total) {
        console.log(number1 + " Sayısı Mükemmel Bir Sayı")
    }
}
for (let i = 1; i <= 1000; i++) {
    isPerfectNumber(i)
}
console.log("SORU-3****FİNİSH***")
/******************************************ÖDEV-2 SORU-3 FİNİSH********************************************/
/******************************************ÖDEV-2 SORU-4 START********************************************/
console.log("SORU-4****START***")
let primeNumbers=[]
for (let i = 1; i <= 1000; i++) {
    // SORU-1'de kullanılan fonksiyon kullanıldı.******DONT REPEAT YOURSELF***** :)))
    if(isPrime(i)){ 
    primeNumbers.push(i)
    }    
}
console.log(primeNumbers)
console.log("SORU-4****FİNİSH***")
/******************************************ÖDEV-2 SORU-4 FİNİSH********************************************/