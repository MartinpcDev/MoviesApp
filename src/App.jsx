import { useEffect, useState } from 'react'
import { FaFireAlt } from 'react-icons/fa'
import { MovieList } from './components/MovieList'
import { NavBar } from './components/NavBar'
import { CiStar } from 'react-icons/ci'
import { LuPartyPopper } from 'react-icons/lu'
import { Route, Routes } from 'react-router-dom'
import { SingleMovie } from './components/SingleMovie'

export const App = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  return (
    <html className='w-screen min-h-screen bg-white text-black dark:bg-black dark:text-white scroll-smooth'>
      <div className='font-montserrat transition-colors duration-300 ease-in-out'>
        <NavBar setTheme={setTheme} />
        <main>
          <Routes>
            <Route path='/' element={<MovieList type='popular' title='Popular' emoji={<FaFireAlt className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />} />
            <Route path='/top_rated' element={<MovieList type='top_rated' title='Top Rated' emoji={<CiStar className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />} />
            <Route path='/upcoming' element={<MovieList type='upcoming' title='Upcoming' emoji={<LuPartyPopper className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />} />
            <Route path='/movie/:movieId' element={<SingleMovie />} />
          </Routes>
        </main>
      </div>
    </html>
  )
}
