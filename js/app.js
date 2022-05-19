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

let a
let b

function func() {
    let b
    a = true
    b = 10
    console.log(b)
}

func()

console.log(a)
console.log(b)

//------------------------- (4 hours)
