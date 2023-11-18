import { useEffect, useState } from 'react'
import { FaFireAlt } from 'react-icons/fa'
import { MovieList } from './components/MovieList'
import { NavBar } from './components/NavBar'
import { CiStar } from 'react-icons/ci'
import { LuPartyPopper } from 'react-icons/lu'

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

  console.log(theme)
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto font-montserrat bg-white text-black dark:bg-black dark:text-white'>
      <NavBar setTheme={setTheme} />
      <MovieList type='popular' title='Popular' emoji={<FaFireAlt className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />
      <MovieList type='top_rated' title='Top Rated' emoji={<CiStar className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />
      <MovieList type='upcoming' title='Upcoming' emoji={<LuPartyPopper className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' />} />
    </div>
  )
}
