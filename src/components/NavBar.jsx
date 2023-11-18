import { FaFireAlt } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { LuPartyPopper } from 'react-icons/lu'
import { ButtonDarkMode } from './ButtonDarkMode'

export const NavBar = ({ setTheme }) => {
  return (
    <nav className='flex items-center justify-between py-0 px-[30px] border-b-[1px] border-solid border-[#e6e6e6]'>
      <h1 className='text-[30px] text-black dark:text-[#ffe400] font-[700]'>Movie Maniac</h1>
      <div className='flex items-center'>
        <ButtonDarkMode setTheme={setTheme} />
        <a className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' href='#popular'>Popular<FaFireAlt className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
        <a className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' href='#top_rated'>Top Rated<CiStar className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
        <a className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' href='#upcoming'>Upcoming<LuPartyPopper className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
      </div>
    </nav>
  )
}
