import { useState, useEffect } from 'react'

export function useStorageBook () {
  const [booksLocalStorage, setBooksLocalStorage] = useState(() => {
    const booksFromStorage = window.localStorage.getItem('books')
    return booksFromStorage
      ? JSON.parse(booksFromStorage)
      : []
  })

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(booksLocalStorage))
  }, [booksLocalStorage])

  const handleSaveBook = (book) => {
    setBooksLocalStorage([...booksLocalStorage, book])
  }

  const handleRemoveBook = (book) => {
    const newData = booksLocalStorage.filter(item => item.isbn13 !== book.isbn13)
    setBooksLocalStorage(newData)
  }

  const checkInLocalStorage = (book) => {
    return booksLocalStorage.some(item => item.isbn13 === book.isbn13)
  }

  return {
    booksLocalStorage,
    handleSaveBook,
    handleRemoveBook,
    checkInLocalStorage
  }
}
