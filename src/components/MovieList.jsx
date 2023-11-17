import { FaFireAlt } from 'react-icons/fa'
import { MovieCard } from './MovieCard'
import { useEffect, useState } from 'react'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [filterMovies, setfilterMovies] = useState([])
  const [minRating, setMinRating] = useState(0)
  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b206319c653018769a8894d6b1f9b98e')
    const data = await response.json()
    setMovies(data.results)
    setfilterMovies(data.results)
  }

  const handleRating = (rate) => {
    if (rate === minRating) {
      setMinRating(0)
      setfilterMovies(movies)
    } else {
      setMinRating(rate)
      const filtered = movies.filter(movie => movie.vote_average >= rate)
      setfilterMovies(filtered)
    }
  }

  return (
    <section className=''>
      <header className='py-[10px] px-[30px] flex items-center justify-between mb-[5px]'>
        <h2 className='text-[#ffe400] flex items-center text-[26px]'>Popular<FaFireAlt className='w-[25px] h-[25px] ml-[7px]' /></h2>
        <div className='flex items-center'>
          <ul className='flex items-center list-none text-[16px]'>
            <li
              className={
                minRating === 8
                  ? 'py-[5px] px-[10px] cursor-pointer activo'
                  : 'py-[5px] px-[10px] cursor-pointer'
}
              onClick={() => handleRating(8)}
            >
              8+ star
            </li>
            <li
              className={
              minRating === 7
                ? 'py-[5px] px-[10px] cursor-pointer activo'
                : 'py-[5px] px-[10px] cursor-pointer'
}
              onClick={() => handleRating(7)}
            >
              7+ star
            </li>
            <li
              className={
              minRating === 6
                ? 'py-[5px] px-[10px] cursor-pointer activo'
                : 'py-[5px] px-[10px] cursor-pointer'
}
              onClick={() => handleRating(6)}
            >
              6+ star
            </li>
          </ul>
          <select className='border-none outline-none rounded-sm text-[16px] font-[500] h-[30px] px-[5px] py-0 my-0 mx-[10px] text-black' name='' id=''>
            <option className='' value=''>SortBy</option>
            <option value=''>Date</option>
            <option value=''>Rating</option>
          </select>
          <select className='border-none outline-none rounded-sm text-[16px] font-[500] h-[30px] px-[5px] py-0 my-0 mx-[10px] text-black' name='' id=''>
            <option value=''>Ascending</option>
            <option value=''>Descending</option>
          </select>
        </div>
      </header>
      <div className='flex flex-wrap justify-evenly'>
        {
          filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </section>
  )
}
