import { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { useParams } from 'react-router-dom'

export const SingleMovie = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  useEffect(() => {
    cargarMovie()
  }, [movieId])

  const cargarMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b206319c653018769a8894d6b1f9b98e`)
    const data = await response.json()
    setMovie(data)
  }
  console.log(movie)
  return (
    <section className='w-full h-auto sm:min-h-screen flex flex-col gap-5 text-center py-8'>
      <h2 className='text-3xl text-yellow-400'>{movie.original_title}</h2>
      <div className='flex flex-col flex-wrap justify-center items-center gap-10 sm:flex-row'>
        <img className='w-[452px] h-auto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='' />
        <div className='w-[452px] flex flex-col items-center gap-4'>
          <p className='text-[#ffe400]'>{movie.release_date}</p>
          <p className='flex items-center text-[#ffe400]'>{movie.vote_average}<CiStar className='w-[20px] h-[20px] ml-[5px]' /></p>
          <p className=''>{movie.overview}</p>
        </div>
      </div>
    </section>
  )
}
