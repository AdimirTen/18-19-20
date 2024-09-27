
let num = prompt("Some number")

if (num%2 === 0) {
alert("Четное")
}
else if (num%2 === 1) {
    alert("Нечетное")
}
else {
    alert("Число не введено")
}

let num1 = prompt("first number")

let num2 = prompt("second number")

if (num1>num2) {
    alert("first number is bigger")
}
else if (num1<num2) {
alert("second number id bigger")
}
else if (num1===num2) {
    alert("равно")
}
else {
    alert("число не введено")
}

let year = prompt("year")

if (year%4 ===0 ) {
    alert("високосный год")
}
else if (year % 4 !== 0) {
    alert("невисокосный год")
}
else {
    alert("год не введен")
}

let variable = prompt("var")

if (variable == String) {
    alert("Строка")
}
else if (variable == Number) {
    alert("Int")
}
else if (variable !== String && variable !== Number) {
    alert("Не строка и не Int")
}
else {
    alert("не введено")
}


let variable2 = "dmgwg"

    if (typeof variable2 === 'string') {
        document.write("Переменная является строкой");
    } else if (typeof variable === 'number') {
        document.write("Переменная является числом");
    } else {
        document.write("Переменная не является строкой или числом");
    }

    let hour = 12

if (hour >= 6 && hour <12) {
    console.log("good morning")
}
else if (hour >= 12 && hour <18) {
    console.log("good evening")
}
else if (hour >=18 && hour <=23) {
    console.log("good night")
}
else {
    console.log("the number is incorrect")
}

let num5 = 3
let num6 = 6
let num3 = 4

if (num1>num2 && num1>num3) {
    console.log("first number id bigger")
}
else if (num2>num1 && num2>num3) {
    console.log("second number is bigger")
}
else if (num3>num1 &&num3>num2) {
    console.log("third number is bigger")
}
else {
    console.log("Numbers are equal")
}


let login = prompt("login")
let password = prompt("password")


if (login == "Adimir" && password == 34234 ) {
    console.log("ДОступ разрешен")
}
else {
    console.log("Доступ запрещен")
}

let monthNumber = 3

if (monthNumber === 1) {
    console.log("Январь");
} else if (monthNumber === 2) {
    console.log("Февраль");
} else if (monthNumber === 3) {
    console.log("Март");
} else if (monthNumber === 4) {
    console.log("Апрель");
} else if (monthNumber === 5) {
    console.log("Май");
} else if (monthNumber === 6) {
    console.log("Июнь");
} else if (monthNumber === 7) {
    console.log("Июль");
} else if (monthNumber === 8) {
    console.log("Август");
} else if (monthNumber === 9) {
    console.log("Сентябрь");
} else if (monthNumber === 10) {
    console.log("Октябрь");
} else if (monthNumber === 11) {
    console.log("Ноябрь");
} else if (monthNumber === 12) {
    console.log("Декабрь");
} else {
    console.log("Некорректное число. Введите число от 1 до 12.");
}

