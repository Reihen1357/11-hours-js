/* Мутации объектов
 const person = {
    name: 'Andy',
    age: 21,
    info: {
        isMarried: true,
        language: ['ru', 'en']
    }
}

/*const copyPerson = { ...person } //Оператор разделения объекта на св-ва. Можно мутировать вложенные объекты в исходном объекте*/
/*const copyPerson = JSON.parse(JSON.stringify(person)) //После конвертации не мутируются в оригинальном объекте вложенные объекты */

// Функции

// const personObj = {
//     name: 'Andy',
//     age: 21,
//     info: {
//         isMarried: true,
//         language: ['ru', 'en']
//     }
// }


// function persObjChange(person) {
//     const copyPerson = JSON.parse(JSON.stringify(person)) //Создание копии объекта и его изменение (3 hours 5 min video)
//     copyPerson.name = 'Carl'
//     copyPerson.info.isMarried = false
//     copyPerson.info.language[1] = 'de'
//     return copyPerson
// }

// const copyPerson = persObjChange(personObj)
// console.log(personObj)
// console.log(copyPerson)

/* Колбэк ф-ия
    function printName() {
//     console.log('Andrey')
// }

// function print(smFunc) {
//     smFunc()
// }
    print(printName)

    //---------------------------------
    function printMyName() {
        console.log('Andrey)
    }

    setTimeout(printMyName, 2000); */

 // Области видимости

// const a = 5

//  function myFn() {
//      function innerFn() {
//          console.log(a)
//      }
//    return innerFn()
//  }

//  myFn()

/* let a
let b

function func() {
    let b
    a = true
    b = 10
    console.log(b)
}

func()

console.log(a)
console.log(b) */

//-------------------------
// Объединение объектов с помощью оператора ... (оператор разделения объектва на св-ва)

/* const buttonInfo = {
    text: 'buy'
}

const buttonStyle = {
    color: 'red',
    width: 300,
    hight: 200
}

const button = {
    ...buttonStyle,
    info: {
        ...buttonInfo
    }
}

console.log(button) */

/* const myName = 'Andrey'
const myCity = 'Vrn'

console.log(`Hello, my name ${myName}, I'm living in ${myCity}`) //Конкатенация строк */

//Function expression - функциональное выражение / Function declaration - объявленная ф-ия

/*setTimeout(() => {
    console.log('Message')
}, 2000) */


/* const funcArrow = (a, b) => {
    let c = 10
    c += a + b
    return console.log(c)
}

funcArrow(3,4) */


//Значение параметра ф-ии по умолчанию --------------------------

/* function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

console.log(multByFactor(10, 3))
console.log(multByFactor(4))

const mult = function(value, mult = 1) {
    return value * mult
}

console.log(mult(5, 3))
console.log(mult(4))

const multArrow = (value, mult = 1) => {
    return value * mult
}

console.log(multArrow(7, 2))
console.log(multArrow(2)) */



/* const newPost = (post, addedAt = Date()) => {return({
    ...post,
    addedAt
 })}
    


const firstPost = {
    id: 1,
    author: 'Andrey',
    Message: {
        text: 'Hi',
        likes: 20
    },
    isMarried: false,
    friends: 70
}

console.log(newPost(firstPost)) */


/* const fnWithError = () => {
    throw new Error('Some error')
}
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...') */

//-----------------------(Массивы)------------------------------

//const newArr = [1, 2, '3', 4, {id:1, someName: 'Andy'}, true]

/* newArr.push({age: 21, isMarried: false})

console.log(newArr)

const removedElem = newArr.pop()

console.log(removedElem)

console.log(newArr) */

//const newArr = [1, 2, 3, 4, 5]

/*const copyNewArr2 = newArr2.forEach(el => console.log(el * 2)) // Ничего не возвращает, не мутирует исходный массив

console.log(newArr2)
console.log(copyNewArr2) //undefined */

/* const copyNewArr = newArr.map(el => el * 3)

console.log(copyNewArr)
console.log(newArr) */



