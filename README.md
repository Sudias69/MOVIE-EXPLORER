# 🎬 Movie Explorer

A simple React app to search for movies and view their details, powered by the [OMDB API](https://www.omdbapi.com/).

🔗 **Live Demo:** [sudias69.github.io/MOVIE-EXPLORER](https://sudias69.github.io/MOVIE-EXPLORER)

## Features

- 🔍 Search for movies by title
- 🎥 View detailed movie info (genre, release date, plot, poster)
- ⏳ Loading state while fetching data
- 🧭 Client-side routing with React Router (Home → Movie Details)

## Tech Stack

- **React** (with Hooks: `useState`, `useEffect`, `useRef`)
- **React Router** for navigation
- **Vite** for build tooling
- **OMDB API** for movie data
- Deployed on **GitHub Pages**
  
## Live Preview
-https://sudias69.github.io/MOVIE-EXPLORER/
## Project Structure

```
src/
├── Components/
│   ├── MovieCard.jsx
│   └── MovieList.jsx
├── Pages/
│   ├── Home.jsx
│   └── Details.jsx
├── Navbar.jsx
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A free [OMDB API key](https://www.omdbapi.com/apikey.aspx)

### Installation

```bash
git clone https://github.com/sudias69/MOVIE-EXPLORER.git
cd MOVIE-EXPLORER
npm install
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Deployment

This project is deployed to GitHub Pages using the `gh-pages` package.

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to the `gh-pages` branch. Make sure `vite.config.js` has the correct `base` path and `App.jsx`'s `<Router>` has the matching `basename` set to the repository name.

## Known Notes

- The OMDB API is called over `https://` to avoid mixed-content issues on GitHub Pages (which serves over HTTPS).
- If a movie has no poster available, OMDB returns `"N/A"` — a fallback image can be shown in that case.

## License

This project is for learning purposes.
