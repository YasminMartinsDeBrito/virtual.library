import { useContext } from "react";
import { BooksContext } from "../../Provider/Books";
import { BookItem, Container } from "./styles";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BookList = () => {
  const {
    books,
    deleteBook,
    byNumber,
    setBooks,
    // twoBooks,
    // setTwoBooks,
    byAlphabet,
    reorder,
  } = useContext(BooksContext);

  console.log(books);

  return (
    <>
      <Container>
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
              reorder(prevBooks, source.index, destination.index)
            );
          }}
        >
          <BookItem>
            <Droppable droppableId="books">
              {(droppableProvided) => (
                <ul
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                >
                  {books.map((bookList, index) => (
                    <Draggable
                      key={bookList.name}
                      draggableId={bookList.name}
                      index={index}
                    >
                      {(draggableProvided) => (
                        <li
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                        >
                          <img src={bookList.img} alt={bookList.name} />
                          <p>{bookList.tamanho}</p>
                          <p>{bookList.name}</p>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </ul>
              )}
            </Droppable>
          </BookItem>
        </DragDropContext>

        <div>
          <button onClick={() => byNumber(books)}>ordem Tamanho</button>
          <button onClick={() => byAlphabet(books)}>ordem alfabetica</button>
        </div>
      </Container>
    </>
  );
};
export default BookList;
