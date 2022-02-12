import { createContext, useState } from "react";
import bookA from '../../assets/book_a.svg'
import bookB from '../../assets/book_b.svg'
import bookC from '../../assets/book_c.svg'
import bookD from '../../assets/book_d.svg'
import bookE from '../../assets/book_e.svg'
import bookF from '../../assets/book_f.svg'
// import bookG from '../../assets/book_g.svg'
// import bookH from '../../assets/book_h.svg'
// import bookI from '../../assets/book_i.svg'

export const BooksContext = createContext([]);

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([
        {
            img: bookA,
            name: 'livro.a',
            tamanho: 4,
            cor: 'amarelo',
        },
        {
            img: bookB,
            name: 'livro.b',
            tamanho: 3,
            cor: 'vermelho',
        },
        {
            img: bookC,
            name: 'livro.c',
            tamanho: 5,
            cor: 'laranja',
        },
        {
            img: bookD,
            name: 'livro.d',
            tamanho: 6,
            cor: 'violeta',
        },
        {
            img: bookE,
            name: 'livro.e',
            tamanho: 1,
            cor: 'azul claro', 
        },
        {
            img: bookF,
            name: 'livro.f',
            tamanho: 2,
            cor: 'rosa', 
        },
       
    ]);

    // const [twoBooks,setTwoBooks] = useState([
    //     {
    //         img: bookG,
    //         name: 'livro.g',
    //         tamanho: 2,
    //         cor: 'rosa', 
    //     },
    //     {
    //         img: bookH,
    //         name: 'livro.h',
    //         tamanho: 5,
    //         cor: 'azul escuro', 
    //     },
    //     {
    //         img: bookI,
    //         name: 'livro.i',
    //         tamanho: 4,
    //         cor: 'verde', 
    //     },
    // ])

    const reorder = (list,startIndex,endIndex) =>{
        const result = [...list];
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex,0,removed);

        return result;
    }

    // em ordem alfabetica
    const byAlphabet = () => {
      setBooks(books.sort((a,b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)))
     
    }

    // em order tamanho
    const byNumber = () => {
       setBooks(books.sort((a,b) => (a.tamanho < b.tamanho ? -1 : a.tamanho > b.tamanho ? 1 : 0)))
       console.log(books)
    }
    
    const createBook = (newBook) => {
        setBooks([...books,newBook]);
    };

    // remover livros
    const deleteBook = (removeBook) => {
        const remove = books.filter((book) => book.name !== removeBook.name);
        setBooks(remove);
        console.log(remove)
    }

   
    return (
        <BooksContext.Provider value={{
            books,
            setBooks,
            // twoBooks,
            // setTwoBooks,
            createBook,
            deleteBook,
            byAlphabet,
            byNumber,
            reorder
            }}>
            {children}
        </BooksContext.Provider>
    )

}