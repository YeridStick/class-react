const array = [1, 2, 3, 4]; 
let tipo1;
var tipo2;

/*for(let i = 0 ; i < array.length ; i++) {
    console.log(array[i])
}*/

/*const array2 = array.map(Element => Element*2)
const array3 = array.map(elemento => console.log(elemento*2))

const array4 = array.filter((elemnto, index) => {
    console.log("id: " + index, "valor: " + elemnto)
})*/



const array5 = [
    { id: 1, casa: "melgar", direcion: "carrera 55a #2..."},
    { id: 2, casa: "melgar1", direcion: "carrera 55a #2..."},
    { id: 3, casa: "melgar", direcion: "carrera 55a #2..."}
]

/*console.table(array5)
console.log(array5[0].casa, array5[0].direcion)*/

const arrayFilter = array5.filter(e => e.casa == "melgar");
//console.log(arrayFilter)


let valor = false;

//console.log(5 < 4 ? valor = true : valor = false)

ejemplo(1, 2)

function ejemplo(num1, num2) {
    console.log("\nFuncion con parametros")
    console.log(num1 + num2);
}

ejemplo2()

function ejemplo2() {
    let num1 = 1 
    let num2 = 2
    console.log("\nFuncion sin parametros")
    console.log(num1 + num2);
}

console.log(ejemplo3(1, 2))

function ejemplo3(num1, num2) {
    console.log("\nFuncion con parametros y retorno")
    const result = num1 * num2
    return result
}

const ejemplo4 = (num1, num2) => {
    console.log("\nFuncion con parametros y retorno")
    const result = num1 * num2
    return result
}

console.log(ejemplo4(1, 2))