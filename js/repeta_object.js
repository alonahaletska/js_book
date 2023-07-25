const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3',],
  trackCount: 3,
};

console.log(playlist); 



//методы обьекта 
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
trackCount: 3,
    //getName: function ()
    getName (){//сейчас пишут так , без функции Метод обьекта 
        console.log('getName ;)'); 
},
};

console.log(playlist); 


//метод изменения имени
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  changeName(newName) {
    console.log('this внутри changeName:' , this);
    
    this.name = newName;
    },
};

playlist.changeName('Новое имя');
console.log(playlist);


//добавление трека
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  changeName(newName) {
    console.log('this внутри changeName:' , this);
    
    this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
  },
};

playlist.changeName('Новое имя');
console.log(playlist);

playlist.addTrack("Новый трек");
console.log(playlist);



//добавление  рейтинга
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  changeName(newName) {
    console.log('this внутри changeName:' , this);
    
    this.name = newName;
},
addTrack(track) {
    this.tracks.push(track);
},
updateRating(newRating) {
    this.rating = newRating;
},
getTrackCount() {
    return this.tracks.length;
},
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

playlist.addTrack("Новый трек");

playlist.updateRating(4);

playlist.getTrackCoun();

console.log(playlist);



//перебор массива в обьекте 

