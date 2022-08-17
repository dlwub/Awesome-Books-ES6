import getLocalStorage from './getStorage.js';
import setLocalStorage from './setStorage.js';

const removeBook = (title) => {
  let booksArray = getLocalStorage();
  booksArray = booksArray.filter((book) => book.Title !== title);
  setLocalStorage(booksArray);  
};

export default removeBook;
