import React, { useState } from "react"
import { Movies } from "./Movies"
import { Preloader } from "./Preloader"
import { Search } from "./Search"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = (searchText) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            }
            )
    }

    return <main className="content container">
        <Search handleSearch={handleSearch} />
        {
            loading ? (
                <Preloader />
            ) : <Movies movies={movies} />
        }
    </main>
}

export { Main }