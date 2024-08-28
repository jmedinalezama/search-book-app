import { SearchForm } from './SearchForm'
import { Book } from './Book'
import { useBook } from '../hooks/useBook'
import { useStorageBook } from '../hooks/useStorageBook'
import { BookmarkFill, BookmarkStroke } from './Icons'

export function SearchBooks () {
  const { books, search, handleSearch } = useBook({ url: '' })

  const { handleSaveBook, handleRemoveBook, checkInLocalStorage } = useStorageBook()

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
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
              })
              : <h3 className='no-results'>No se encontraron resultados para <span>{search.substring(36, search.length)}</span></h3>
          )
        }
      </section>
    </>
  )
}
