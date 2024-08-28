import { Link } from 'react-router-dom'
import './Book.css'

export function Book ({ book }) {
  const { image, title, subtitle, price, isbn13 } = book

  return (
    <>
      <Link to={`/book/${isbn13}`}>
        <img src={image} alt={title} />
      </Link>
      <h3>{title}</h3>
      <h5>{price}</h5>
      <p>{subtitle}</p>
    </>
  )
}
