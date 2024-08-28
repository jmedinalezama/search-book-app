import { BookDetails } from './components/BookDetails'
import { NewBooks } from './components/NewBooks'
import { SavedBooks } from './components/SavedBooks'
import { SearchBooks } from './components/SearchBooks'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <main>
      <h1 className='title'>Buscador de libros</h1>

      <HashRouter>
        <nav style={{ textAlign: 'center' }}>
          <NavLink to='/'>Novedades</NavLink>
          <NavLink to='/buscar'>Buscar</NavLink>
          <NavLink to='/saved'>Guardados</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<NewBooks />} />
          <Route path='/buscar' element={<SearchBooks />} />
          <Route path='/saved' element={<SavedBooks />} />
          <Route path='/book/:isbn13' element={<BookDetails />} />
        </Routes>

      </HashRouter>

    </main>
  )
}

export default App
