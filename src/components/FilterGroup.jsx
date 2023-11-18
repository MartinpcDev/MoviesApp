export const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className='flex items-center list-none text-[16px]'>
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
        minRating === rate
          ? 'py-[5px] px-[10px] cursor-pointer activo'
          : 'py-[5px] px-[10px] cursor-pointer'
}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ star
        </li>
      ))}
    </ul>
  )
}
