// To print the odd numbers in an array****************************************************************


let oddArray = [1,2,3,4,5,6,7,8,9,10];
console.log("1. Print Odd numbers present in an array [1,2,3,4,5,6,7,8,9,10] ")

let oddList = [];
let oddAnonymous = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            oddList.push(arr[i])
        }
    }
    return oddList;
}
console.log("Anonymous: "+oddAnonymous(oddArray))

let array = []
console.log("iife: "+(function(arr){
    for(let i=0;i<oddArray.length;i++){
        if(oddArray[i]%2!==0){
            array.push(oddArray[i])
        }
    }
    return array;
})())   
console.log("\n\n")



// To print the odd numbers in an array*********************************************************


let strArray = "sun rises in the east";
console.log('2. convert all strings to the title caps in a string array:["sun","rises","in","the","east"]')


let capital = function(word){
    let splitt = word.split("");
    let capitall = splitt[0].charCodeAt(0)-32;
    let convChar = String.fromCharCode(capitall);
    splitt.splice(0,1,convChar).join("")
    return splitt;
}

// convert the every element in an array to title case*********************************************************


let arrayany = ["sun","rises","in","the","east"]
let output = [];
let func = function(array){
    for(let i=0;i<array.length;i++){
        let word = capital(array[i]).join("");
        output.push(word);
    }
    return output
}

console.log("Anonymous: "+ func(arrayany))



let arrayiife = ["sun","rises","in","the","east"]
let outputiife = [];
console.log("iife: "+(function(array){
    for(let i=0;i<array.length;i++){
        let word = capital(array[i]).join("");
        outputiife.push(word);
    }
    return outputiife;
})(arrayiife))
console.log("\n\n")


// print sum of numbers in an array*********************************************************


let numArray = [1,2,3,4,5,6,7,8,9,10];
console.log('3. sum of all numbers in an array [1,2,3,4,5,6,7,8,9,10]')
let sum = 0;
let findSum = function(){
    for(let i=0;i<numArray.length;i++){
        sum = sum+numArray[i]
    }
    return sum;
}
console.log("Anonymous: "+findSum(numArray))


let sumIife = 0;
console.log("iife: "+(function(){
    for(let i=0;i<numArray.length;i++){
        sumIife = sumIife+numArray[i]
    }
    return sumIife;
})(numArray));
console.log("\n\n")

// creturn all prime numbersw in an array*********************************************************

console.log('4. Return all prime numbers in an array [1,2,3,4,5,6,7,8,9,10]')

let primeArray = [];
const getPrime = function(numArray){
    for(let i=0;i<numArray.length;i++){
        let flag = 0;
        for(let j=2;j<i;j++){
            if(numArray[i]%[j]===0){
                flag=1;
                break;
            }
        }
        if(flag===0 && i>0){
            primeArray.push(numArray[i])
        }
    }
    return primeArray
}
console.log("Anonymous: "+getPrime(numArray))


let primeArrayIife = [];
console.log("iife: "+(function(numArray){
    for(let i=0;i<numArray.length;i++){
        let flag = 0;
        for(let j=2;j<i;j++){
            if(numArray[i]%[j]===0){
                flag=1;
                break;
            }
        }
        if(flag===0 && i>0){
            primeArrayIife.push(numArray[i])
        }
    }
    return primeArrayIife
})(numArray));
console.log("\n\n")

// return all palindromes in an array*********************************************************

console.log('5. Return all palindromes in an array ["madam","slice","banana","wow"]')
let palArray = ["madam","slice","banana","wow"];

let getPalindrome = function(array){
    let output = [];
    for(let i=0;i<array.length;i++){
        let reverse = array[i].split("").reverse().join("");
        if(reverse===array[i]){
           output.push(array[i])
        }
    }
    return output
}
console.log("Anonymous: "+getPalindrome(palArray))



console.log("iife: "+(function(array){
    let output = [];
    for(let i=0;i<array.length;i++){
        let reverse = array[i].split("").reverse().join("");
        if(reverse===array[i]){
           output.push(array[i])
        }
    }
    return output
})(palArray));
console.log("\n\n")

// Return median of two sorted arrays*********************************************************

console.log('6. Return median of two sorted arrays [1,3,5,7,9] and [2,4,6,8]')
let arr1 = [1,3,5,7,9];
let arr2 = [2,4,6,8,10];

let getMedian = function(arr1,arr2){
    let array = arr1.concat(arr2);
    array.sort(function(a,b){return a-b})
    let mid1,mid2,median;
    mid1 = Math.floor(array.length/2+1)-1
    mid2 = Math.floor(array.length/2+1)
    median = (array[mid1-1]+array[mid2-1])/2;
    return median;
}
console.log("Anonymous: "+getMedian(arr1,arr2))



console.log("iife: "+(function(arr1,arr2){
    let array = arr1.concat(arr2);
    array.sort(function(a,b){return a-b})
    let mid1,mid2,median;
    mid1 = Math.floor(array.length/2+1)-1
    mid2 = Math.floor(array.length/2+1)
    median = (array[mid1-1]+array[mid2-1])/2;
    return median;
})(arr1,arr2));
console.log("\n\n")


// Remove duplicates from an array*********************************************************
console.log('7. Remove duplicates from an array [1,4,3,5,5,8,6,3,2,1]')
let duplicateArray = [1,4,3,5,5,8,6,3,2,1];
const removeDuplicates = function(array){
    let uniqueArray = [...new Set(array)]
    return uniqueArray;
}
console.log("Anonymous: "+removeDuplicates(duplicateArray))


console.log("iife: "+(function(array){
    let uniqueArray = [...new Set(array)]
    return uniqueArray;
})(duplicateArray));
console.log("\n\n")


// Rotate an array k times and return the rotated array*********************************************************
console.log('8.Rotate an array k times and return the rotated array ["a","b","c","d","e","f","g"]')
let givenArray = ["a","b","c","d","e","f","g"];

let rotateArray = function(array,times){
    for(let i=0;i<times;i++){
        let key = array.shift();
        givenArray.push(key)
    }
    return givenArray
}
console.log("Anonymous: "+rotateArray(givenArray,3))


console.log("iife: "+(function(array,times){
    for(let i=0;i<times;i++){
        let key = array.shift();
        givenArray.push(key)
    }
    return givenArray
})(givenArray,3))