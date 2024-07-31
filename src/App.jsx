import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import MovieDetails from './Pages/MovieDetails/MovieDetails'
import SearchMovies from './Pages/SearchMovies/SearchMovies'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage/>
    },
    {
      path:'/single/:movieId',
      element: <MovieDetails/>
    },
    {
      path: '/search',
      element: <SearchMovies/>
    }
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
