import React from "react"
import { Movies } from "./Movies"
import { Preloader } from "./Preloader"
import { Search } from "./Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    handleSearch = (searchText) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false})
            )
    }

    render() {
        const { movies, loading } = this.state;
        return <main className="content container">
            <Search handleSearch={this.handleSearch} />
            {console.log(movies)}
            {
                loading ? (
                    <Preloader />
                ) : <Movies movies={movies} />
            }
        </main>
    }
}

export { Main }