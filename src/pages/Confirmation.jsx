import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetBooking } from '../store/slices/bookingSlice';

function Confirmation() {
  const bookings = useSelector(state => state.booking.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastBooking = bookings[bookings.length - 1];

  const handleBackHome = () => {
    dispatch(resetBooking());
    navigate('/');
  };

  if (!lastBooking) {
    return (
      <div className="error">
        <h2>No booking found</h2>
        <button onClick={() => navigate('/')} className="btn-book">Go back to Movies</button>
      </div>
    );
  }

  return (
    <div className="confirmation">
      <div className="confirmation-container">
        <div className="success-icon">✅</div>
        <h1>Booking Confirmed!</h1>
        <p className="success-message">Your tickets have been successfully booked.</p>

        <div className="booking-details">
          <div className="detail-item">
            <span className="detail-label">Booking ID:</span>
            <span className="detail-value">#{lastBooking.id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Movie:</span>
            <span className="detail-value">{lastBooking.movie}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date & Time:</span>
            <span className="detail-value">{lastBooking.bookingDate} at {lastBooking.showtime}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Seats:</span>
            <span className="detail-value">{lastBooking.seats.join(', ')}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Total Paid:</span>
            <span className="detail-value">₹{lastBooking.totalPrice}</span>
          </div>
        </div>

        <p className="confirmation-note">
          Please arrive 15 minutes before the showtime. Have a great time!
        </p>

        <button className="btn-home" onClick={handleBackHome}>
          Book More Tickets
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
