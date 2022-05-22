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


//-----------------------(Деструктуризация объектов, массивов, функций)------------------

// const userProfile = {
//     name: 'Andy',
//     commetnsQty: 23,
//     isMarried: false
// }

// const {name, isMarried} = userProfile
// const {commetnsQty} = userProfile

// console.log(`${name} ${isMarried} ${commetnsQty}`)


// const fruits = ['Apple', 'Banana']

// const [Apple, Banana] = fruits

// console.log(`${Apple} ${Banana}`)

// const userProfile = {
//     name: 'Andy',
//     commetnsQty: 23,
//     isMarried: false
// }

// const userInfo = ({name, commetnsQty}) => {
//     if (!commetnsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commetnsQty} comments`
// }

// console.log(userInfo(userProfile))

//------------------------(Условные инструкции)-------------------

// let value = 10

// if (value > 10 && value > 0) {
//     value += 5
// }
// console.log(value)

// const person = {
//     name: 'Andy',
//     age: 21
// }

// if (!person.name) {
//     console.log('Имя не указано')
// } else {
//     console.log(`Имя пользователя ${person.name}`)
// }

// const a = 10
// const b = 10

// let c = 0

// if (b > a) {
//     c += b
// } else if (a > b) {
//     c += a
// } else {
//     c += 1
// }

// console.log(c)

// if (b > a) {
//     c += b
// }

// if (a > b) {
//     c += a
// }

// if (b === a) {
//     c += 1
// }

// console.log(c)

// const sumPositNum = (a, b) => {

//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Nubers are not positive'
//     }
//     return a + b
// }

// console.log(sumPositNum('1', 5))
// console.log(sumPositNum(17, true))
// console.log(sumPositNum(0, 5))
// console.log(sumPositNum(10, -5))
// console.log(sumPositNum(10, 5))

// let month = +prompt('Введите номер месяца')

// switch (month) {
//     case 1:
//         console.log('Январь')
//         break
//     case 2:
//         console.log('Февраль')
//         break
//     case 3:
//         console.log('Март')
//         break
//     case 4:
//         console.log('Апрель')
//         break
//     case 5:
//         console.log('Май')
//         break
//     default:
//         console.log('Не верное число')
// }

// const value = 10
// const value2 = 0

// function sum (value, value2) {
//     return console.log(value + value2)
// }

// function text() {
//     return console.log('Одно значение не истинно')
// }

// value && value2
//     ? sum(value, value2)
//     : text()

//-------------------------(Циклы)-------------------------

// const chel = {
//     name: 'Andy',
//     age: 21,
//     isMarried: false,
//     posts: {
//         hasPosts: true,
//         likesQty: 30
//     }
// }

// for (const key in chel) {
//     if (Object.hasOwnProperty.call(chel, key)) {
//         console.log(key, chel[key])
//     }
// }

// Object.keys(chel).forEach(key => { // Метод keys конвертирует объекта в массив с ключами, переданного в него объекта. Можно перебрать ключи полученного массива с помощью метода forEach
//     console.log(key, chel[key])
// })

// Object.values(chel).forEach(value => { // Метод values так же конвертирует объект в массив, но с значениями св-в объекта 
//     console.log(value)
// })

// const myString = 'Hello motherfucker'
// const myArr = [true, 10, 'Hi', null]

// for (const iterator of myArr) { //for of не итерирует объекты. Его нельзя использовать для объектов
//     console.log(iterator)
// }

// ----------------------------(Классы и прототипы)-----------------------

// class Comment {
//     constructor(author, title) {
//         this.author = author
//         this.title = title
//         this.likesQty = 0
//     }

//     upLikes() {
//         this.likesQty += 1
//     }

//     downLikes() {
//         this.likesQty -= 1
//     }
//     static mergeComments(firstText, secondText) {
//         return `${firstText} ${secondText}`
//     }
// }

// const firstComment = new Comment('Andrey', 'This fucking awesome')
// const secondComment = new Comment('Eugeniy', 'Im saying you, idiot')
// // firstComment.upLikes()
// // firstComment.upLikes()
// // secondComment.upLikes()
// // console.log(firstComment.hasOwnProperty('title')) //true
// // console.log(firstComment.hasOwnProperty('upLikes')) //false
// // console.log(secondComment.hasOwnProperty('author')) //true
// // console.log(secondComment.hasOwnProperty('hasOwnProperty')) //false

// console.log(Comment.mergeComments('Andrey cool boy,', 'he likes Eugeniy'))


// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }

// const newArr = new NumbersArray(1, 4, 6, 7, 9, 10)
// console.log(newArr)

//---------------------(Промисы)------------------------

// const getData = (url) => 
//     new Promise((resolve, reject) => 
//     fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error))
//     )

// getData('https://jsonplaceholder.typicode.com/todos/2')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


//--------------------(async/await)---------------------

// async function asyncFn() {
//     //Всегда возвращает Промисы
//     return 'Success from asyncFn'
// }

// const asyncFnArr = async () => {
//     //Всегда возвращает Промисы
//     throw new Error('There was an error!')
//     // return 'Success from asyncFnArr'
// }

// asyncFn()
//     .then(value => console.log(value))

// asyncFnArr()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))

// const asyncFn = async () => {
//     //Внутри асинхронных ф-ий можно ожидать результатов других Промисов
//     await <Promise>
// }

// asyncFn()

// const timerPromise = () => 
//     new Promise((resolve, reject) =>
//         setTimeout(()=> resolve(), 2000))

// const asyncTimer = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('Timer ended ', endTime -  startTime)
// }

// asyncTimer()


const getData = async (url) => {
    const resolve = await fetch(url)
    const json = await resolve.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/2'

try { 
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}


