class Media { //Create a parent class and the main constructor
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() { //Add getters and setters for each parameters
    return this._title;
  }
  set title(newTitle){
    this._title = newTitle;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(complete) {
    this._isCheckedOut = complete;
  }
  get ratings() {
    return this._ratings;
  }
  set ratings(vote) {
    this._ratings.push(vote);
  }
  getAverageRating() {
    let average = this.ratings.reduce((a, b) => a + b);
    return average / this.ratings.length;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(rating) {
    this.ratings = rating;
  }
}

class Book extends Media { //Create the subclass from Media
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  set author (authorName) {
    this._author = authorName;
  }
  get pages() {
    return this._pages;
  }
  set pages(numOfPages) {
    this._pages = numOfPages;
  }
}

class Movie extends Media {
  constructor (title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  set director(directorName) {
    this._director = directorName;
  }
  get runTime() {
    return this._runTime;
  }
  set runTime(time) {
    this._runTime = time;
  }
}

class Cd extends Media {
  constructor (title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  set artist(artistName) {
    this._artist = artistName;
  }
  get songs() {
    return this._songs;
  }
  set songs (nameOfSongs) {
    this._songs.push(nameOfSongs);
  }
  addSong(newSong) {
    this.songs = newSong;
  }
  
}
const favBook = new Book ("Gone with the wind", "Margaret Mitchell", 1594)
console.log(favBook);
favBook.addRating(9);
favBook.addRating(7);
favBook.addRating(8);
favBook.addRating(10);


const favSong = new Cd ("Yellow", "Coldaplay", ["The Scientist", "Adventure of a life time", "Viva la vida", "Fix you"])
console.log(favSong);
favSong.toggleCheckOutStatus();
favSong.addRating(9);
favSong.addRating(8);
favSong.addRating(10);
favSong.addRating(10);

const favMovie = new Movie ("Everest", "Baltasar Kormákur", 123); //Create a new object based on the Movie subclass
console.log(favMovie);
favMovie.toggleCheckOutStatus();
favMovie.addRating(9);
favMovie.addRating(8);
favMovie.addRating(10);


   
 