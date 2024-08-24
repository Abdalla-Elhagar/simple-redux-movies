
import './App.css'
import MovieDetails from './components/movieDetails'
import Movies from './components/movis'

function App() {

  return (
    <div className='w-[1000px]'>
    <h1>Redux Movie</h1>
    <div className='flex justify-between flex-row w-full'>
    <Movies />
      <MovieDetails />
    </div>
      
    </div>
  )
}

export default App
