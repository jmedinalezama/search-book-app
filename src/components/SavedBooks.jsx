import { useStorageBook } from '../hooks/useStorageBook'
import { Book } from './Book'
import { BookmarkFill } from './Icons'

export function SavedBooks () {
  const { booksLocalStorage: books, handleRemoveBook } = useStorageBook()

  return (
    <>
      <section className='grid-1-5'>
        {
          books &&
          (
            books.length > 0
              ? books.map(book => {
                return (
                  <div key={book.isbn13} className='book-card'>
                    <Book book={book} />
                    <button
                      className='book-save'
                      onClick={() => handleRemoveBook(book)}
                    >
                      <BookmarkFill />
                    </button>
                  </div>
                )
              }
              )
              : <h3 className='no-results'>No se encontraron libros guardados</h3>
          )
        }
      </section>
    </>
  )
}
