// 3 function

// Declaration function

// Expression function

// Arrow function


// Declaration function

// function PlusNumber(a,b){
//     return a + b
// }

// console.log(PlusNumber(10, 5))


// Expression function

// let PlusNumber = function (Oquvchilar, BittaOquvchi) {
    // return Oquvchilar * BittaOquvchi
    // return Behruz - Olim
// }

// console.log(PlusNumber(11, 210000))

// console.log(PlusNumber(100000, 200000))


// Arrow function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]



// let PlusNumber = (arr) => {
//     return `Max ${Math.max(...arr)} min ${Math.min(...arr)}`
// }

// console.log(PlusNumber(arr))









let arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz']

let DeleteMeva = (arr, meva) => {
    return arr.filter(item => item !== meva)
}
console.log(DeleteMeva(arr, 'olma'));




// let str = 'WebBrainAcadAmya'
// let result = str.search('a');
// console.log(result)