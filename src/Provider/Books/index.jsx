import { createContext, useState } from "react";

export const BooksContext = createContext([]);

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    
    const createBook = (newBook) => {
        setBooks([...books,newBook]);
    };

    // remover livros
    const deleteBook = (removeBook) => {
        const remove = books.filter((book) => book.name !== removeBook.name);
        setBooks(remove);
    }

   


    return (
        <BooksContext.Provider value={{books, setBooks, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )

}