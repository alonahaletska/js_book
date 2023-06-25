//нарисовать столько котиков сколько мы хотим 
var drawCats = function (howManyTimes) {//можно вместо var использовать let или const
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(11);