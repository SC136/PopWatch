import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const bookings = useSelector(state => state.booking.bookings);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">PopWatch</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Movies</Link>
        <Link to="/bookings" className="nav-link">
          My Bookings ({bookings.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
