import './homepage.scss'
import Header from '../../Components/Header/Header'
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
import Whoami2 from '../../assets/images/whoami.jpg'
import { useEffect, useState } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'

// --------trending images---------------
import Lord from '../../assets/images/lord.jpg'
import Godzilla from '../../assets/images/godzilla.jpg'
import Inception from '../../assets/images/inception.jpg'
import Interstellar from '../../assets/images/interstellar.jpg'
import Joker from '../../assets/images/joker.jpg'
import Thor from '../../assets/images/thor.jpg'
import Wednesday from '../../assets/images/wednesday.jpg'
import { CgProfile } from 'react-icons/cg'
import Footer from '../../Components/Footer/Footer'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// --------end of trending images---------------

const Homepage = () => {

const [currentMovie, setCurrentMovie] = useState(0)
const [activeCategory, setActiveCategory] = useState(0)
const [fade, setFade] = useState(false)

// ------------movie data--------------- */}
const recentMovie = [
  {
    title: 'Spider-man',
    year: '2023',
    duration: '2h 14min',
    genre: 'Sci-fi',
    synopsis: 'mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities',
    background: Spider,
    imdb: 7.4
  },
  {
    title: 'Spider-verse',
    year: '2023',
    duration: '2h 14min',
    genre: 'Sci-fi',
    synopsis: 'mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities mile morales adventure into the multiverse following gwen to a world of unimaginable possibilities',
    background: SpiderTwo,
    imdb: 7.2
  },
  {
    title: 'Flash',
    year: '2023',
    duration: '2h 14min',
    genre: 'Sci-fi',
    synopsis: 'Barry allen adventure into the time travel following the death of his mother to a world of twisted chaos',
    background: Flash,
    imdb: 7.2
  },
  {
    title: 'Who am i',
    year: '2022',
    duration: '1h 50min',
    genre: 'Biography',
    synopsis: 'Benjamin, a young haker, join a group of rebel youth to explore the freedom and power of the dark web.',
    background: Whoami,
    imdb: 7.2
  },
]

const movieCategories = ['Sci-fi', 'Drama', 'Action', 'Horror', 'Comedy']

const categoryList = [
  {
    title:'unthinkable',
    year: '2015',
    imdb: '7',
    image: Unthinkable
  },
  {
    title:'Flash',
    year: '2015',
    imdb: '7',
    image: FlashNew
  },
  {
    title:'jason Bourn',
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
    title:'Transformer',
    year: '2015',
    imdb: '7',
    image: Transformer
  },
  {
    title:'Spider-man',
    year: '2015',
    imdb: '7',
    image: AnimatedSpider
  },
]


const trendingList = [
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
]
// ------------movie data--------------- */}

useEffect(() => {
  const changeCurrentMovie = setInterval(() => {
    setFade(true);
    setTimeout(() => {
      setCurrentMovie((prevMovie) => 
        prevMovie === recentMovie.length - 1 ? 0 : prevMovie + 1
      );
      setFade(false);
    }, 500); // Half of the transition time
  }, 5000);
  
  return () => clearInterval(changeCurrentMovie);
}, [recentMovie.length]);

// ----------------Function handlers-------------

const handleScrollSelect = (index)=>{
  setCurrentMovie(index)
}

const handleCategorySelection = (index)=>{
  setActiveCategory(index)
}


  return (
    <div className='homepage-container'>
      <div className="homepage-wrapper">


        <section className="hero-section" style={{backgroundImage: `url(${recentMovie[currentMovie].background})`}}>
          <Header/>
          <div className={`hero-content ${fade ? 'fade' : ''}`} >

    {/* ------------------movie detials------------------ */}
            <div className="movieDetails" style={{opacity: fade ? 0 : 1}}>
              <h1>{recentMovie[currentMovie].title}</h1>
              <div className="info">
                <span>{recentMovie[currentMovie].genre}</span>
                <span>{recentMovie[currentMovie].duration}</span>
                <span>{recentMovie[currentMovie].year}</span>
                <span>IMDB {recentMovie[currentMovie].imdb}</span>
              </div>
              <p>{recentMovie[currentMovie].synopsis}</p>
              <div className="cta">
                <button><MdOutlineFileDownload/> Download</button>
              </div>
            </div>
    {/* ------------------movie list------------------ */}
          <div className='movie-list'>
            {
              recentMovie.map((eachMovie, index)=>{
                return(
                  <div onClick={()=>{handleScrollSelect(index)}} key={index} className={`movie-card ${currentMovie === index ? 'showUp' : ''}`}>
                    <img src={eachMovie.background} alt="card image" />
                    <h1>{eachMovie.title}</h1>
                  </div>
                )
              })
            }
          </div>
          </div>
        </section>


    {/* ------------------movie category------------------ */}
        <section className="category">
          <h1 className='section-title'>Category</h1>
          <div className="category-title">
            {
              movieCategories.map((eachCategory, index)=>{
                return(
                  <span onClick={()=>{handleCategorySelection(index)}} className={`${activeCategory === index ? 'active' : ''}`} key={index}>{eachCategory}</span>
                )
              })
            }
          </div>
          <div className="category-movies">
            {
              categoryList.map((eachList, index)=>{
                return(
                  <div key={index} className="category-card">
                    <img src={eachList.image} alt="category poster" />
                    <h3>{eachList.title}</h3>
                    <div className='ratings'>
                    <p>{eachList.year}</p>
                    <p>{eachList.imdb}</p>
                    </div>
                </div>
                )
              })
            }
            <Link to='/search'>
              <FaGreaterThan/>
            </Link>
          </div>
        </section>


  {/* -------------Trending movies section---------------- */}
        <section className="trending">
            <h1 className='section-title'>Trending</h1>
            
            {/* ----------Trending container---------- */}
            <div className='trending-container'>
            {
              trendingList.map((eachList, index)=>{
                return(
                  <div key={index} className="trending-card">
                    <img src={eachList.image} alt="category poster" />
                    <h3>{eachList.title}</h3>
                    <div className='ratings'>
                    <p>{eachList.year}</p>
                    <p>{eachList.imdb}</p>
                    </div>
                </div>
                )
              })
            }
            <FaGreaterThan/>
            </div>
        </section>


        {/* ----------Trending container---------- */}
        <section className="discussion">
          <h1 className='section-title'>Discussion</h1>
          <div className='discussion-container'>
            {['Lord of the Rings','Inception','Interstellar','GOdzilla'].map((eachDiscussion, index)=>{
              return(
                <div key={index} className='discussion-card'>
                  <h3>
                    {eachDiscussion}
                  </h3>
                  <div className="comments">
                    <div className="comment">
                      <p>This movie is amazing. I absolutely love it.</p>
                      <div className='comment-profile'>
                        <CgProfile/>
                        <span>By John Doe</span>
                      </div>
                    </div>
                    <div className="comment">
                      <p>I can&apos;t wait to see more from this amazing director.</p>
                      <div className='comment-profile'>
                        <CgProfile/>
                        <span>By Alan Shearer</span>
                      </div>
                    </div>
                    <div className="comment">
                      <p>I&apos;ve heard so many great things about this movie. I can't wait to see it.</p>
                      <div className='comment-profile'>
                        <CgProfile/>
                        <span>By Sam Johnson</span>
                      </div>
                    </div>
                    <button className='read-more'>Read More</button>
                  </div>
              </div>
              )
            })}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage