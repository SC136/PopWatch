import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedMovie } from '../store/slices/bookingSlice';

function Home() {
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();

  const handleBooking = (movie) => {
    dispatch(setSelectedMovie(movie));
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Popular Movies</h1>
        <p>Book your tickets now!</p>
      </div>
      
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image"><img src={movie.image} alt={movie.title} className="movie-img" /></div>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-genre">{movie.genre}</p>
            <p className="movie-rating"> {movie.rating}</p>
            <p className="movie-price">₹{movie.price}</p>
            <Link to={`/movie/${movie.id}`} onClick={() => handleBooking(movie)}>
              <button className="btn-book">Book Ticket</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
