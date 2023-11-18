import _ from 'lodash'
import { MovieCard } from './MovieCard'
import { useEffect, useState } from 'react'
import { FilterGroup } from './FilterGroup'

export const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([])
  const [filterMovies, setfilterMovies] = useState([])
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState({
    by: 'default',
    order: 'asc'
  })
  useEffect(() => {
    cargarDatos()
  }, [])

  useEffect(() => {
    if (sort.by !== 'default') {
      const sorteredMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
      setfilterMovies(sorteredMovies)
    }
  }, [sort])

  const cargarDatos = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=b206319c653018769a8894d6b1f9b98e`)
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

  const handleSort = (e) => {
    const { name, value } = e.target
    setSort({ ...sort, [name]: value })
  }
  // console.log(sort)
  return (
    <section className='' id={type}>
      <header className='py-[10px] px-[30px] flex items-center justify-between mb-[5px]'>
        <h2 className='text-black dark:text-[#ffe400] flex items-center text-[26px] font-[700]'>{title}{' '}{emoji}</h2>
        <div className='flex items-center'>
          <FilterGroup minRating={minRating} onRatingClick={handleRating} ratings={[8, 7, 6]} />
          <select className='border-none outline-none rounded-sm text-[16px] font-[500] h-[30px] px-[5px] py-0 my-0 mx-[10px] text-black' name='by' onChange={handleSort} value={sort.by}>
            <option value='default'>SortBy</option>
            <option value='release_date'>Date</option>
            <option value='vote_overage'>Rating</option>
          </select>
          <select className='border-none outline-none rounded-sm text-[16px] font-[500] h-[30px] px-[5px] py-0 my-0 mx-[10px] text-black' name='order' onChange={handleSort} value={sort.order}>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
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
