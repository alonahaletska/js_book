//создание массива
var dinosaurs = ['T-Rex', 'Velociraptor', 'Stegosaurus', 'Pterodactel'];


//выделение одного элемента массива 
console.log(dinosaurs[0]);//выделиться первый элемент массива (0 потому что счет элементов начинается с 0)


//изменения элементов в массиве
// выделяем нужный жлемент и переопределяем через " = "
console.log(dinosaurs[0] = 'Tyranosavr-Rex');
console.log(dinosaurs);


//узнать длину массива 
console.log(dinosaurs.length);


//доступ к последнему элементу 
console.log(dinosaurs[dinosaurs.length - 1]);


//добавление элементов к массиву
dinosaurs.push('lama', 'Cat');
console.log(dinosaurs);


//добавление элемента в начала массива
dinosaurs.unshift("Dog", "Kitten");
console.log(dinosaurs);


//удаление последнего элемента
dinosaurs.pop();
console.log(dinosaurs);


//удалить или вернуть первый элемент 
dinosaurs.shift();
console.log(dinosaurs);


//обьединение массивов
var fruit = ['apple', 'orange', 'lemon', 'lime'];
var vegetables = ['cucumber', 'potato', 'tomato', 'pepper'];
var all = fruit.concat(vegetables);
console.log(all);


//обьеденение двух и более массивов
var fruit = ["apple", "orange", "lemon", "lime"];
var vegetables = ["cucumber", "potato", "tomato", "pepper"];
var animals = ['Cat', 'Dog', 'Horse', 'Bear'];
var All = fruit.concat(vegetables, animals);
console.log(All);


//нахождение индекса элемента массива 
var vegetables = ["cucumber", "potato", "tomato", "pepper"];
console.log(vegetables.indexOf("tomato"));


//превращение массива в строку
var fruit = ["apple", "orange", "lemon", "lime"];
console.log(fruit.join('!'));