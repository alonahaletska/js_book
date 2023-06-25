//оператор "И" &&
//выполняется когда оба значения правдивы
// var hadShowder = true;
// var hasBacket = false;
// if (hadShowder && hasBacket); {
//     console.log('false');
// }


//оператор "ИЛИ" ||
// выполняется если хотя бы одно значение правдиво
// var hasApple = true;
// var hasOrange = false;
// if (hasApple || hasOrange);{
//     console.log("true");
// }


// оператор "НЕ" !
// выполняется когда из false нужно сделать true и наоборот
// var isWeekend = true;
// var needToShowerToday = !isWeekend;
// console.log(needToShowerToday);


//комбинирование логических операторов
// var isWeekend = false;
// var hadShowder = true;
// var hasApple = false;
// var hasOrange = true;
// var shouldGoSchool = !isWeekend && hadShowder && (hasApple || hasOrange);
// console.log(shouldGoSchool);


//сравнение чисел с булевыми переменными
// больше чем...
var height = 65;
var heightRestriction = 60;
if (height > heightRestriction); {
    console.log('true');
}
// меньше чем...
var height = 65;
var heightRestriction = 48;
if (height < heightRestriction);
{
    console.log('false');
}
// строгое равенство ===
var height = 65;
var heightRestriction = 48;
if (height === heightRestriction);
{
  console.log("false");
}