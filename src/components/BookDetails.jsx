import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SEARCH_BOOK_BY_ISBN } from '../constanst'
import { Details } from './Details'
import { Loading } from './Icons'

export function BookDetails () {
  const { isbn13 } = useParams()
  // console.log(isbn13)

  const [bookDetails, setBookDetails] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isbn13) return

    setLoading(true)

    const getDetailsBook = async () => {
      const res = await fetch(`${SEARCH_BOOK_BY_ISBN}${isbn13}`)
      const data = await res.json()
      setBookDetails(data)
      setLoading(false)
    }

    getDetailsBook()
  }, [isbn13])

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Información sobre el libro</h2>
      {
        loading && <div style={{ display: 'flex', justifyContent: 'center' }}><Loading /></div>
      }
      {
        bookDetails && <Details book={bookDetails} />
      }
    </section>
  )
}
