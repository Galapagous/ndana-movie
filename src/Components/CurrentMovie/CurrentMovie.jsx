import { useState } from 'react'
// import Sample from '../assets/images/mov9.jpg'
import { Link } from 'react-router-dom'

const CurrentMovie = ({background, title}) => {
    const [viewTitle, setViewTitle] = useState(false)
  return (
    <Link to={`/single/${title}`} onMouseOver={()=>{setViewTitle(true)}} onMouseLeave={()=>{setViewTitle(false)}} className='latest-movies-movie'>
      <img src={background}/>
      {viewTitle && <h1>{title}</h1>}
    </Link>
  )
}

export default CurrentMovie