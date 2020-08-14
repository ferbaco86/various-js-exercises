function Book(title,author,pages,read) 
{
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.sayTitle = function() {
    console.log(title);
   // return title + "by" + this.author + "," + this.pages + "pages" + "," + this.read;
  }
}


let newBook = new Book("The Hobbit", "J.J.R. Tolkien", 256, "not read yet");


console.log(newBook.sayTitle);


 