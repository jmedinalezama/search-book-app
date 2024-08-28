import './Details.css'

export function Details ({ book }) {
  const { image, rating, title, subtitle, authors, publisher, language, pages, year, desc, price, url } = book

  const convertRating = (rating) => {
    let ratingValue = ''

    for (let i = 0; i < parseInt(rating); i++) {
      ratingValue += '⭐'
    }

    return ratingValue
  }

  return (
    <article className='book-details'>
      <div>
        <img src={image} alt={title} />
        <a href={url} target='_blank' rel='noreferrer'>Ver más...</a>
      </div>
      <aside>
        <p>{convertRating(rating)}</p>
        <h3>{title}</h3>
        <h4>{subtitle} / páginas: {pages}</h4>
        <p>Autor: <i>{authors}</i>- {year} </p>
        <p>Editora / idioma: {publisher} / {language}</p>
        <h3>Precio: {price}</h3>
        <p>{desc}</p>

      </aside>
    </article>
  )
}
