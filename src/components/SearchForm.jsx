import { useState } from 'react'
import './SearchForm.css'
import { SEARCH_BOOK_NAME } from '../constanst'

export function SearchForm ({ handleSearch }) {
  const [form, setForm] = useState({ search: '' })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(`${SEARCH_BOOK_NAME}${form.search}`)
  }

  return (
    <section className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='java, python, js,...'
          name='search'
          value={form.search}
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Buscar</button>
      </form>
    </section>
  )
}
