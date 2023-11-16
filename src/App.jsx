import { MovieList } from './components/MovieList'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto font-montserrat'>
      <NavBar />
      <MovieList />
    </div>
  )
}
