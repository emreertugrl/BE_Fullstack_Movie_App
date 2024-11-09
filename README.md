# BE Fullstack Movie App

## Project Description

The Movie App is a dynamic web application that allows users to explore movies, view detailed information about each movie. Built with React and a modern development stack, the application provides an easy-to-use interface for movie enthusiasts to discover new films and keep track of favorites.

## Features

- 🎥 Browse and search movies by title
- 🌐 Fetch movie data from an external API
- 📖 View detailed information about each movie, including cast, genre, and release date
- 📱 Responsive design for mobile, tablet, and desktop devices

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- React: for building interactive user interfaces
- React Router: for seamless page navigation
- Axios: for making API requests to fetch movie data
- React Icons: for a visually enhanced UI
- React Toastify: for notifications
- Vite: for fast development server setup
- TailwindCSS: for a responsive and consistent design layout

### Backend

- Node.js
- Express.js
- CORS: to handle cross-origin resource sharing
- Nodemon: for automatic server restarts during development

## API Endpoints

| Method | Endpoint          | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | `/api/movies`     | Get a list of all movies        |
| GET    | `/api/movies/:id` | Get details of a specific movie |
| POST   | `/api/movies`     | Create a movie to movies.json   |
| DELETE | `/api/movies:id`  | Remove a movie from movies.json |

## Setup and Installation

### Backend

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/emreertugrl/BE_Fullstack_Movie_App.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd .\backend\
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd .\frontend\
   ```
2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at:
   ```bash
   http://localhost:5173
   ```

## Visual

<img src="./frontend/public/movie.gif" alt="movie-app-gif">

## Contact

For any questions or suggestions, feel free to reach out:

- Email: emreertugrl7@gmail.com
- LinkedIn: [emreertugrul7](https://www.linkedin.com/in/emreertugrul7/)
