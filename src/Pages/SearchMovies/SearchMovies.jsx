import React from 'react'
import './searchMovies.scss'
import Header from '../../Components/Header/Header'
import { FiMoreHorizontal } from 'react-icons/fi'

// ----------importing movies----------
import Spider from '../../assets/images/miles2.jpg'
import SpiderTwo from '../../assets/images/spider2.jpg'
import Flash from '../../assets/images/flash4.jpg'
import FlashNew from '../../assets/images/flashNew.jpg'
import Unthinkable from '../../assets/images/unthinkable.jpg'
import Jason from '../../assets/images/jason.jpg'
import Kingdom from '../../assets/images/kingdom.jpg'
import Transformer from '../../assets/images/transformer.jpg'
import AnimatedSpider from '../../assets/images/miles3.jpg'
import Whoami from '../../assets/images/whoami.png'
import Lord from '../../assets/images/lord.jpg'
import Godzilla from '../../assets/images/godzilla.jpg'
import Inception from '../../assets/images/inception.jpg'
import Interstellar from '../../assets/images/interstellar.jpg'
import Joker from '../../assets/images/joker.jpg'
import Thor from '../../assets/images/thor.jpg'
import Wednesday from '../../assets/images/wednesday.jpg'
// ----------importing movies----------

const SearchMovies = () => {
  const genre = ['all','horror', 'drama', 'sci-fi', 'action', 'mystery', 'psychology-thriller', 'animation']
  const year = ['2024', '2023', '2022', '2020', '2019', '2018', '2017', '2016']
  const rating = ['10-9','9-8', '8-7', '7-6', '6-5', '5-4', '4-3', '3-2', '2-1']
  const order = ['latest', 'oldest', 'asc', 'desc']
  
  // -------trending movies--------
  const searchList = [
    {
      title:'FlashNew',
      year: '2015',
      imdb: '7',
      image: FlashNew
    },
    {
      title:'Flash',
      year: '2015',
      imdb: '7',
      image: Flash
    },
    {
      title:'SpiderTwo',
      year: '2015',
      imdb: '7',
      image: SpiderTwo
    },
    {
      title:'Lord',
      year: '2015',
      imdb: '7',
      image: Lord
    },
    {
      title:'Wednesday',
      year: '2015',
      imdb: '7',
      image: Wednesday
    },
    {
      title:'Thor',
      year: '2015',
      imdb: '7',
      image: Thor
    },
    {
      title:'Godzilla',
      year: '2015',
      imdb: '7',
      image: Godzilla
    },
    {
      title:'Inception',
      year: '2015',
      imdb: '7',
      image: Inception
    },
    {
      title:'Lord',
      year: '2015',
      imdb: '7',
      image: Lord
    },
    {
      title:'Wednesday',
      year: '2015',
      imdb: '7',
      image: Wednesday
    },
    {
      title:'Thor',
      year: '2015',
      imdb: '7',
      image: Thor
    },
    {
      title:'Godzilla',
      year: '2015',
      imdb: '7',
      image: Godzilla
    },
    {
      title:'Inception',
      year: '2015',
      imdb: '7',
      image: Inception
    },
    {
      title:'Inception',
      year: '2015',
      imdb: '7',
      image: Inception
    },
    {
      title:'Lord',
      year: '2015',
      imdb: '7',
      image: Lord
    },
    {
      title:'Wednesday',
      year: '2015',
      imdb: '7',
      image: Wednesday
    },
    {
      title:'Thor',
      year: '2015',
      imdb: '7',
      image: Thor
    },
    {
      title:'Godzilla',
      year: '2015',
      imdb: '7',
      image: Godzilla
    },
    {
      title:'Inception',
      year: '2015',
      imdb: '7',
      image: Inception
    },
    {
      title:'Interstellar',
      year: '2015',
      imdb: '7',
      image: Interstellar
    },
    {
      title:'Joker',
      year: '2015',
      imdb: '7',
      image: Joker
    },
    {
      title:'Jason',
      year: '2015',
      imdb: '7',
      image: Jason
    },
    {
      title:'Kingdom',
      year: '2015',
      imdb: '7',
      image: Kingdom
    },
    {
      title:'Spider',
      year: '2015',
      imdb: '7',
      image: Spider
    },
  ]
  // -------trending movies--------

  return (
    <div className='search-container'>
      <Header/>
      {/* ------------Filter section------------ */}
      <section className="search-section">
        <h3>Search Term</h3>
        <div className='search-box'>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className='filter-selectors'>
          <div className='filters'>
            <label htmlFor='rating'>Genre</label>
            <select name='rating' id='rating'>
              {rating.map((eachGenre, index)=>{
                return(
                  <option key={index} value={eachGenre}>{eachGenre}</option>
                )
              })}
            </select>
          </div>
          <div className='filters'>
            <label htmlFor='genre'>Rating</label>
            <select name='genre' id='genre'>
              {genre.map((eachGenre, index)=>{
                return(
                  <option key={index} value={eachGenre}>{eachGenre}</option>
                )
              })}
            </select>
          </div>
          <div className='filters'>
            <label htmlFor='year'>Year</label>
            <select name='year' id='year'>
              {year.map((eachGenre, index)=>{
                return(
                  <option key={index} value={eachGenre}>{eachGenre}</option>
                )
              })}
            </select>
          </div>
          <div className='filters'>
            <label htmlFor='order'>Order by</label>
            <select name='order' id='order'>
              {order.map((eachGenre, index)=>{
                return(
                  <option key={index} value={eachGenre}>{eachGenre}</option>
                )
              })}
            </select>
          </div>
        </div>
      </section>


      {/* ------------Filter section------------ */}
      <section className="result-section">
        <div className="pagination">
          <button>Prev</button>
          {[1,2,3,4,5,6,7,8].map((eachPage, index)=>{
            return(
              <button key={index}>{eachPage}</button>
            )
          })}
          <button><FiMoreHorizontal/></button>
          <button>Next</button>
        </div>

        {/* ------Search result-------- */}
        <div className="search-result">
          {searchList.map((eachMovie, index)=>{
            return(
              <div key={index} className='movie-card'>
                <img src={eachMovie.image} alt="movie poster" />
                <div className='movie-details'>
                  <h3>{eachMovie.title}</h3>
                  <span>{eachMovie.year}</span>
                </div>
              </div>
            )
          })}
        </div>
        {/* ------Search result-------- */}
        <div className="pagination">
          <button>Prev</button>
          {[1,2,3,4,5,6,7,8].map((eachPage, index)=>{
            return(
              <button key={index}>{eachPage}</button>
            )
          })}
          <button><FiMoreHorizontal/></button>
          <button>Next</button>
        </div>
      </section>
    </div>
  )
}

export default SearchMovies