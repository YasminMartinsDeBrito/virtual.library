import { useContext } from "react";
import { BooksContext } from "../../Provider/Books";
import { BookItem, Container, Container2, Main } from "./styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import lady from '../../assets/lady.svg';
import button from '../../assets/button.svg';
import alphabet from '../../assets/filter_alphabetic.svg';
import colors from '../../assets/filter_colors.svg';
import sizes from '../../assets/filter_sizes.svg';
import Ground from '../../assets/ground.svg';
import bookcase from '../../assets/bookcase.svg';
import logo from '../../assets/logo.svg';
import clock from '../../assets/clock_base.svg';
import stripes from '../../assets/bg_stripes.svg'


const BookList = () => {
  const {
    books,
    byNumber,
    setBooks,
    byAlphabet,
    onDragEnd,
    byColor,
    byOrganize,
    byDesorganize,
    byNoalphabet,
    byNocolor,
    byNonumber,
    open
  } = useContext(BooksContext);

 
  return (
    <Main>   
      <Container >
          <img className="stripes" src={stripes} alt=' '/>
          <div className="imgs">

            <div>
              <img src={clock} alt=' '/>
            </div>
          
            <div>
              <img src={logo} alt=' '/>
            </div>
          </div>
       

      </Container>

      <Container2 >

        <img className='ground'src={Ground} alt='fundo'/>
        <DragDropContext
          onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) {
              return;
            }
            if (
              source.index === destination.index &&
              source.droppableId === destination.droppableId
              ) {
              return;
            }
            
            setBooks((prevBooks) =>
            onDragEnd(prevBooks, source.index, destination.index)
            );
          }}
        >
          <Droppable droppableId="books" direction="horizontal">
            {(provided) => (
              <BookItem  
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
              <img className='bookcase' src={bookcase} alt="book-case "/>
                {books.map((book, index) => (
                  <Draggable
                  draggableId={book.name}
                  key={book.id}
                  index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        className="book-item">
                        <img src={book.img} alt={book.name} />
               

                      </li>
                    )}
                  </Draggable>
                ))}
            <>
                {provided.placeholder}
            </>
              </BookItem>
            )}
          </Droppable>
        </DragDropContext>
          <div className="container">
            <img className='vovo'src={lady} alt=''/>
            <div className="box">
            <p>SORT BY</p>
           
            {open ? <>
                 <img className='organize' onClick={() => byDesorganize()} src={button} alt=' '/> 
                <img className='alphabet' onClick={() => byNoalphabet()} src={alphabet } alt=' '/>
                <img className='color' onClick={() => byNocolor()} src={colors} alt='' />
                <img className='number' onClick={() => byNonumber()} src={sizes} alt=' '/> 
           </> 
           : (<>
                <img className='organize' onClick={() => byOrganize()} src={button} alt=' '/>
                <img className='alphabet' onClick={() => byAlphabet()} src={alphabet } alt=' '/>
                <img className='color' onClick={() => byColor()} src={colors} alt='' />
                <img className='number' onClick={() => byNumber()} src={sizes} alt=' '/> 
               
           
            </>)}

            <hr/>
            </div>
          </div>
      </Container2>
    </Main>
  );
};
export default BookList;
