import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { confirmBooking, resetBooking } from '../store/slices/bookingSlice';

function Checkout() {
  const booking = useSelector(state => state.booking);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    dispatch(confirmBooking());
    navigate('/confirmation');
  };

  const handleCancel = () => {
    dispatch(resetBooking());
    navigate('/');
  };

  if (!booking.selectedMovie || !booking.selectedShowtime || booking.selectedSeats.length === 0) {
    return (
      <div className="error">
        <h2>No booking in progress</h2>
        <button onClick={() => navigate('/')} className="btn-book">Go back to Movies</button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1>Checkout</h1>
        
        <div className="checkout-card">
          <div className="checkout-item">
            <span className="label">Movie:</span>
            <span className="value">{booking.selectedMovie.title}</span>
          </div>
          <div className="checkout-item">
            <span className="label">Showtime:</span>
            <span className="value">{booking.selectedShowtime}</span>
          </div>
          <div className="checkout-item">
            <span className="label">Seats:</span>
            <span className="value">{booking.selectedSeats.join(', ')}</span>
          </div>
          <div className="checkout-item">
            <span className="label">Number of Tickets:</span>
            <span className="value">{booking.selectedSeats.length}</span>
          </div>
          <div className="checkout-divider"></div>
          <div className="checkout-total">
            <span className="label">Total Amount:</span>
            <span className="total-value">₹{booking.totalPrice}</span>
          </div>
        </div>

        <div className="payment-methods">
          <h3>Payment Method</h3>
          <label className="payment-option">
            <input type="radio" name="payment" defaultChecked />
            <span>Credit/Debit Card</span>
          </label>
          <label className="payment-option">
            <input type="radio" name="payment" />
            <span>Net Banking</span>
          </label>
          <label className="payment-option">
            <input type="radio" name="payment" />
            <span>UPI</span>
          </label>
        </div>

        <div className="checkout-actions">
          <button className="btn-confirm" onClick={handleConfirm}>
            Confirm Booking
          </button>
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
