import { NEW_BOOKS } from '../constanst'
import { useBook } from '../hooks/useBook'
import { Book } from './Book'
import { BookmarkFill, BookmarkStroke } from './Icons'
import { useStorageBook } from '../hooks/useStorageBook'

export function NewBooks () {
  const { books } = useBook({ url: NEW_BOOKS })

  const { handleSaveBook, handleRemoveBook, checkInLocalStorage } = useStorageBook()

  return (
    <>
      <section className='grid-1-5'>
        {
          books &&
          (
            books.length > 0
              ? books.map(book => {
                const isSaved = checkInLocalStorage(book)

                return (
                  <div key={book.isbn13} className='book-card'>
                    <Book book={book} />
                    <button
                      className='book-save'
                      onClick={() => isSaved ? handleRemoveBook(book) : handleSaveBook(book)}
                    >
                      {isSaved
                        ? <BookmarkFill />
                        : <BookmarkStroke />}
                    </button>
                  </div>
                )
              }
              )
              : <h3 className='no-results'>No se encontraron novedades</h3>
          )
        }
      </section>
    </>
  )
}
