//операции со строками


//узнать длину строки

// var stroka = 'fhjhdfehfuirjgfhrkhfghdytjtudjudjjg';
// stroka.length;
// console.log(stroka.length);



//сложение строк

// var one = 'jfjhrhr ';
// var two = 'djfhrgruyeuregt';
// console.log(one + two);



// найти отдельный символ из строки

// var myName = 'Nick';
// myName[0];
// myName[2];
// myName[3];
// console.log(myName[3]);



//найти кодовое послание сложивши все вторые символы строк

// var coW1 = 'are';
// var coW2 = 'tubas';
// var coW3 = 'unsafe';
// var coW4 = '?!';
// console.log(coW1[1] + coW2[1] + coW3[1] + coW4[1]);



//отрезать часть строки используем свойство .slice

// var longSrting = 'My long srting is long';
// console.log(longSrting.slice(3, 14));



//пишем строку большими буквами

// var string = 'Hello there how are you';
// console.log(string.toUpperCase());



//пишем строку маленькими буквами

// var string = "HELLO THERE HOW ARE YOU";
// console.log(string.toLowerCase());



//измененеие строки таким образом чтоб все символы были маленькими кроме первого ведь строка должна начинаться с большой буквы

// var sillyString = 'hELlo THERE hOW ARE yOu';
// var lowerSrting = sillyString.toLowerCase();
// var firstCharacter = lowerSrting[0];
// var firstCharacterUpper = firstCharacter.toUpperCase();
// var restOfString = lowerSrting.slice(1);
// console.log(firstCharacterUpper + restOfString);
//все это можно записать иначе 
var sillyString = "hELlo THERE hOW ARE yOu";
console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase() + '?');