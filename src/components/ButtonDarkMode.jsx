import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export const ButtonDarkMode = ({ setTheme }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={handleClick} type='button'>
      {
        active ? <FaSun /> : <FaMoon />
      }
    </button>

  )
}
