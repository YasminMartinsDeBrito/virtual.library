import { createContext, useState } from "react";

import bookA from '../../assets/book_a.svg';
import bookB from '../../assets/book_b.svg';
import bookC from '../../assets/book_c.svg';
import bookD from '../../assets/book_d.svg';
import bookE from '../../assets/book_e.svg';
import bookF from '../../assets/book_f.svg';
import bookG from '../../assets/book_g.svg';
import bookH from '../../assets/book_h.svg';
import bookI from '../../assets/book_i.svg';

export const BooksContext = createContext([]); 

const shelf = [
        {   id: 1,
            img: bookC,
            name: 'livro.c',
            tamanho: 8,
            color: 'b.laranja',
        },
        {   id: 2,
            img: bookA,
            name: 'livro.a',
            tamanho: 6,
            color: 'c.amarelo',
        },
        {   id: 3,
            img: bookB,
             name: 'livro.b',
             tamanho: 4,
             color: 'a.vermelho',
        },
        {   id: 4,
              img: bookE,
              name: 'livro.e',
              tamanho: 1,
              color: 'e.azul claro', 
        },
        {    id: 5,
             img: bookI,
             name: 'livro.i',
             tamanho: 5,
             color: 'd.verde', 
        },
        {   id: 6,
            img: bookH,
            name: 'livro.h',
            tamanho: 7,
            color: 'f.azul escuro', 
         },
        {   id: 7,
            img: bookG,
            name: 'livro.g',
            tamanho: 2,
            color: 'h.rosa',  
         },
         {   id: 8,
              img: bookD,
              name: 'livro.d',
              tamanho: 9,
              color: 'g.violeta',
         },
         {   id: 9,
              img: bookF,
              name: 'livro.f',
              tamanho: 3,
              color: 'i.rosa', 
         }
];

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState( shelf );
        
        
        const onDragEnd =(book, startBook, endBook) => {
            const result = [...book];
            const [removed] = result.splice(startBook, 1);
            result.splice(endBook, 0, removed);
            return result;
        }
        
        //organizar livros
        const byOrganize = () => {
            setBooks([].concat(books).sort((a,b) => (a.id < b.id ? -1 :a.id > b.id ? 1: 0)));
        
    };

    // em ordem alfabetica
    const byAlphabet = () => {
    setBooks([].concat(books).sort((a,b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)));
};
    
    // em order tamanho
    const byNumber = () => {
       setBooks([].concat(books).sort((a,b) => (a.tamanho < b.tamanho ? -1 : a.tamanho > b.tamanho ? 1 : 0)));
      
    };

    // em ordem de cores
    const byColor = () => {
        
        setBooks([].concat(books).sort((a,b) => (a.color < b.color ? -1 :a.color > b.color ? 1: 0)));
    };
    
    const createBook = (newBook) => {
        if(newBook.name === books.name){
            console.log('nome ja cadastrado')
        }
        else{
            setBooks([...books,newBook]);
            localStorage.setItem('@libray: books', books);
        }
    };

    // remover livros
    const deleteBook = (removeBook) => {
        const remove = books.filter((book) => book.id !== removeBook.id);
        setBooks(remove);
    };

   
    return (
        <BooksContext.Provider value={{
            books,
            setBooks,
            createBook,
            deleteBook,
            byAlphabet,
            byNumber,
            onDragEnd,
            byColor,
            byOrganize,
            shelf,
            }}>
            {children}
          
        </BooksContext.Provider>
    )

};