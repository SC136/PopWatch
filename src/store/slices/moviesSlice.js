import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    {
      id: 1,
      title: 'Dhurandhar 2: The Revenge',
      genre: 'Action, Thriller',
      rating: '8.9/10',
      price: 550,
      image: 'https://th.bing.com/th?id=OIF.RUgzXMIumQZ%2b1%2fMyyBzk7Q&w=322&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg',
      showtimes: ['10:00 AM', '2:00 PM', '6:00 PM', '9:00 PM'],
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Thriller, Sci-Fi',
      rating: '8.8/10',
      price: 450,
      image: 'https://tse2.mm.bing.net/th/id/OIP.Iwd0OLkWWrb3KzR-RRiJ9wHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3.jpg',
      showtimes: ['11:00 AM', '3:00 PM', '7:00 PM', '10:00 PM'],
    },
    {
      id: 3,
      title: 'Dhurandhar 1: The Beginning',
      genre: 'Action, Thriller',
      rating: '8.9/10',
      price: 200,
      image: 'https://www.masala.com/cloud/2025/10/20/Dhurandhar.jpeg',
      showtimes: ['10:30 AM', '2:30 PM', '6:30 PM', '9:30 PM'],
    },
    {
      id: 4,
      title: 'Kalki 2898 AD',
      genre: 'Action, Sci-Fi, Historical',
      rating: '9.0/10',
      price: 150,
      image: 'https://m.media-amazon.com/images/M/MV5BNDkzZjZmNTYtZjAxMC00M2U3LWEyMjctMjY2NDEwYWE1MzBmXkEyXkFqcGc@._V1_.jpg',
      showtimes: ['10:00 AM', '1:00 PM', '5:00 PM', '8:00 PM'],
    },
    {
      id: 5,
      title: 'Interstellar',
      genre: 'Drama, Sci-Fi, Adventure, Thriller',
      rating: '8.9/10',
      price: 420,
      image: 'https://th.bing.com/th/id/OIP.uiaj_IMaC7h3NoieAhcmVwHaLG?w=114&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3.jpg',
      showtimes: ['12:00 PM', '4:00 PM', '8:00 PM'],
    },
    {
      id: 6,
      title: 'Formula 1: The Movie',
      genre: 'Sports,Drama,Action',
      rating: '8.8/10',
      price: 320,
      image: 'https://tse2.mm.bing.net/th/id/OIP.yrTYgG6UCawpNtuupZwPRAHaK-?rs=1&pid=ImgDetMain&o=7&rm=3.jpg',
      showtimes: ['11:30 AM', '3:30 PM', '7:30 PM'],
    },
  ],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state) => {
      return state;
    },
  },
});

export const { getMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
