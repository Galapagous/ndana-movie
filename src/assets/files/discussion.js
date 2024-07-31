import Movie1 from '../images/mov1.jpg'
import Movie2 from '../images/mov2.jpg'
import Movie3 from '../images/mov3.jpg'
import Movie4 from '../images/mov4.jpg'
import Movie5 from '../images/mov5.jpg'
import Movie6 from '../images/mov6.jpg'
import Movie7 from '../images/mov7.png'
import Movie8 from '../images/mov8.jpg'
import Movie9 from '../images/mov9.jpg'
import Movie10 from '../images/mov10.jpg'
import Movie11 from '../images/mov11.jpg'

export const trailers = [
    { title: 'The Last Kingdom: Seven Kings Must Die', image: Movie1 },
    { title: 'The Super Mario Bros. Movie', image: Movie2 },
    { title: 'Trailer 3', image: Movie3 },
  ]

export  const continueWatching = [
    { title: 'Dark Season 3', image: Movie4, episode: 'Episode 3' },
    { title: 'Transformers: Dark of the Moon', image: Movie5, episode: 'Episode 5' },
    { title: 'Lupin Season 2', image: Movie6, episode: 'Episode 2' },
    { title: 'Avatar: The Way of Water', image: Movie7, episode: 'Episode 1' },
  ]

export  const youMightLike = [
    { title: 'The Flash (2023)', image: Movie8, genre: 'Fantasy' },
    { title: 'Manifest', image: Movie9, genre: 'Mystery' },
    { title: 'Elemental', image: Movie10, genre: 'Animation' },
    { title: 'Interstellar', image: Movie11, genre: 'Sci-fi' },
  ]

export  const discussions = [
    { title: "Spider-Man's new suit", comments: 324, likes: 1.2 },
    { title: "Best Spider-Verse character?", comments: 156, likes: 0.8 },
    { title: "Multiverse theories", comments: 89, likes: 0.5 },
  ]

export const latestMovies = [
    {title: 'Spider-man', image: Movie8},
    {title: 'The Great Gatsby', image: Movie9},
    {title: 'The Great debators', image: Movie10},
    {title: 'The Dictator', image: Movie11}
]

export const discussion = [
  {
    title: 'Spider-Man\'s new suit',
    content: 'This is an amazing new suit! I love it!',
    author: 'John Doe',
    likes: 20,
    replies: [
      {
        author: 'Jane Smith',
        content: 'I agree! It looks amazing too.',
        likes: 15
      },
      {
        author:'patric viera',
        content: 'marvel did work on this'
      }
    ]
  },
  {
    title: 'Godzilla',
    content: 'Godzilla is a huge monster. I think it will be a huge story.',
    author: 'micheal lopez',
    likes: 20,
    replies: [
      {
        author: 'Jack Daniels',
        content: 'Godzilla is not a monster. It is a being from another dimension.',
        likes: 15
      },
      {
        author:'Masson Jefferson',
        content: 'Godzilla is a fictional character.'
      }
    ]
  }
]