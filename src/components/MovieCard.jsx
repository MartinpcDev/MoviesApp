import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className='relative w-[200px] h-[300px] m-[15px] overflow-hidden rounded-[10px] text-[#fff] shadow-[rgba(0,0,0,0.25)] shadow-md hover:scale-110 transition-all ease-in-out duration-300'
      rel='noreferrer'
    >
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster' />
      <div className='absolute top-0 w-full h-full p-[10px] from-black flex flex-col justify-end opacity-0 hover:opacity-100 transition-all ease-in-out duration-200'>
        <h3 className='text-[16px] text-[#ffe400]'>{movie.original_title}</h3>
        <div className='flex items-center justify-between text-[12px] text-[500] my-[5px] mx-0 text-[#ffe400]'>
          <p>{movie.release_date}</p>
          <p className='flex items-center'>{movie.vote_average}<CiStar className='w-[20px] h-[20px] ml-[5px]' /></p>
        </div>
        <p className='text-[12px] italic'>{movie.overview.slice(0, 100) + '...'}</p>
      </div>
    </Link>
  )
}
