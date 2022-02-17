import { useContext } from "react";
import { BooksContext } from "../../Provider/Books";
import { BookItem, Container, Container2, Main } from "./styles";
import lady from '../../assets/lady.svg'
import button from '../../assets/button.svg'
import alphabet from '../../assets/filter_alphabetic.svg'
import active from '../../assets/filter_button_active.svg'
import filter from '../../assets/filter_button.svg'
import colors from '../../assets/filter_colors.svg'
import sizes from '../../assets/filter_sizes.svg'
import Ground from '../../assets/ground.svg'
import bookcase from '../../assets/bookcase.svg'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BookList = () => {

  const {
    books,
    deleteBook,
    byNumber,
    setBooks,
    byAlphabet,
    onDragEnd,
    byColor,
    byOrganize
  } = useContext(BooksContext);

 
  return (
    <Main>   
      <Container >
      <div className="relogio">
          <p>Relogio</p>
        </div>
      
        <div>
          {/* <img src={ground} alt=''/> */}
          <p>
            TECH <br />
            <strong>LIBRARY</strong>
            <br />
            <span>vizpert</span>
          </p>
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


          {/* <Droppable droppableId="books2" direction="horizontal">
            {(provided) => (
              <BookItem
              {...provided.droppableProps}
                ref={provided.innerRef}
                className="book-container"
              >
                {booksTwo.map((book, index) => (
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
                        className="book-item"
                        >
                        <img src={book.img} alt={book.name} />
                        </li>
                        )}
                        </Draggable>
                ))}
                {provided.placeholder}
              </BookItem>
              )}
            </Droppable> */}
        </DragDropContext>
          <div className="container">
            <img className='vovo'src={lady} alt=''/>
            <div className="box">
            <p>SORT BY</p>
            <img className='alphabet' onClick={() => byAlphabet()}src={alphabet } alt=' '/>
            <img className='color' onClick={() => byColor()}src={colors} alt='' />
            <img className='number' onClick={() => byNumber()} src={sizes} alt=' '/> 
            <hr/>
            <img className='organize' onClick={() => byOrganize()} src={button} alt=' '/>
            </div>
          </div>
      </Container2>
    </Main>
  );
};
export default BookList;
