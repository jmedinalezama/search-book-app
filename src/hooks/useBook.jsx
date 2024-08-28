import { useState, useEffect } from 'react'

export function useBook ({ url = '' }) {
  const [books, setBooks] = useState()
  const [search, setSearch] = useState(() => {
    if (url !== '') return url
    else return null
  })

  useEffect(() => {
    const getBooks = async () => {
      if (search === null) return

      const res = await fetch(search)
      const data = await res.json()

      const { books } = data
      setBooks(books)
    }

    getBooks()
  }, [search])

  const handleSearch = (search) => {
    setSearch(search)
  }

  return {
    books,
    search,
    handleSearch
  }
}
