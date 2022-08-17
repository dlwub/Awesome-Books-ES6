import setLocalStorage from './setStorage.js';
import getLocalStorage from './getStorage.js';
import Book from './Book.js';
import inArray from './inArray.js';

const addBook = (title, author) => {
  // Check for empty book and add book to booksArray
  if (title && author) {
    const book = new Book(title, author);
    let booksArray = getLocalStorage();
    if (!inArray(title, booksArray)) {
      booksArray = [...booksArray, book];
      setLocalStorage(booksArray);      
    }
  }
};

export default addBook;
