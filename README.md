# PopWatch - Movie Ticket Booking Website

A simple and clean movie ticket booking website built with React, Vite, Redux, and React Router.

## Features

- **Browse Movies**: View a list of popular movies with ratings and prices
- **Select Showtimes**: Choose from available showtimes for each movie
- **Seat Selection**: Interactive seating arrangement to select your seats
- **Booking Management**: Complete checkout process with payment method selection
- **Booking History**: View all your confirmed bookings

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **CSS** - Single index.css file for all styling

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx         # Navigation component
├── pages/
│   ├── Home.jsx           # Movies listing page
│   ├── MovieDetails.jsx   # Movie booking page
│   ├── Checkout.jsx       # Checkout page
│   ├── Confirmation.jsx   # Booking confirmation page
│   └── Bookings.jsx       # My bookings page
├── store/
│   ├── store.js           # Redux store configuration
│   └── slices/
│       ├── moviesSlice.js # Movies state management
│       └── bookingSlice.js # Booking state management
├── App.jsx                # Main app component with routes
├── main.jsx               # App entry point with Redux Provider
└── index.css              # All styling
```

## Getting Started

### Installation

1. Navigate to the project directory
2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Usage

1. **Home Page** - Browse all available movies
2. **Book Ticket** - Click on a movie to select showtimes and seats
3. **Checkout** - Review your booking and select payment method
4. **Confirmation** - Get your booking confirmation
5. **My Bookings** - View all your confirmed bookings

## Features in Detail

### Redux State Management

- **Movies Slice**: Manages the list of available movies
- **Booking Slice**: Manages selected movie, showtime, seats, and booking history

### Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)

## Styling

All CSS is contained in a single `index.css` file with:
- Dark theme with Netflix-inspired colors
- Smooth transitions and hover effects
- Responsive grid layouts
- Mobile-first media queries

## Sample Movies

The app comes with 6 pre-loaded movies:
1. The Matrix
2. Inception
3. Interstellar
4. The Dark Knight
5. Pulp Fiction
6. Forrest Gump

Each movie has multiple showtimes and seats available for booking.

## Color Scheme

- Primary Color: #e50914 (Netflix Red)
- Background: #141414 (Dark)
- Text: #ffffff (White)
- Secondary Color: #221f1f

---

Enjoy booking your movie tickets! 🎬
