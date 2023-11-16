import { FaFireAlt } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { LuPartyPopper } from 'react-icons/lu'

export const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-0 px-[30px] border-b-[1px] border-solid border-[#e6e6e6]'>
      <h1 className='text-[30px] text-[#ffe400]'>Movie Maniac</h1>
      <div className='flex items-center'>
        <a className='flex items-center text-[20px] font-[500] text-[#fff] no-underline py-0 px-[15px]' href=''>Popular<FaFireAlt className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
        <a className='flex items-center text-[20px] font-[500] text-[#fff] no-underline py-0 px-[15px]' href=''>Top Rated<CiStar className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
        <a className='flex items-center text-[20px] font-[500] text-[#fff] no-underline py-0 px-[15px]' href=''>Upcoming<LuPartyPopper className='w-[25px] h-[25px] ml-[7px] text-[#ffe400]' /></a>
      </div>
    </nav>
  )
}
