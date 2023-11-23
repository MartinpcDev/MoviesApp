import { FaFireAlt } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { LuPartyPopper } from 'react-icons/lu'
import { ButtonDarkMode } from './ButtonDarkMode'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ setTheme }) => {
  return (
    <nav className='w-full min-h-[80px] flex flex-col items-center gap-1 md:justify-between px-[30px] border-b-[1px] border-solid border-[#e6e6e6] md:flex-row pb-4 text-center'>
      <h1 className='text-[30px] text-black dark:text-[#ffe400] font-[700]'>Movie Maniac</h1>
      <div className='flex flex-col gap-3 items-center sm:flex-row'>
        <ButtonDarkMode setTheme={setTheme} />
        <NavLink className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' to='/'>Popular<FaFireAlt className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></NavLink>
        <NavLink className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' to='/top_rated'>Top Rated<CiStar className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></NavLink>
        <NavLink className='flex items-center text-[20px] font-[500] text-black dark:text-[#fff] no-underline py-0 px-[15px]' to='/upcoming'>Upcoming<LuPartyPopper className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></NavLink>
      </div>
    </nav>
  )
}
