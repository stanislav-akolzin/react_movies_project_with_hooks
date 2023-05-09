import React, { useState } from "react";

const Search = (props) => {
    const {
        handleSearch = Function.prototype,
    } = props;

    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            runSearch()
        }
    }

    const handleFilter = (event) => {
        setFilter(event.target.value);
    }

    const runSearch = () => {
        {
            filter === "" ? (
                handleSearch(searchText)
            ) : handleSearch(`${searchText}&type=${filter}`)
        }
    }

    return <div className="row">
        <div className="col s12">
            <div className="input-field">
                <input
                    className="validate"
                    type="search"
                    placeholder="Search"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="btn search-btn" onClick={() => runSearch()}>Search</button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value=""
                        checked={filter === ""}
                        onChange={handleFilter}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value="movie"
                        checked={filter === "movie"}
                        onChange={handleFilter}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="filter"
                        type="radio"
                        value="series"
                        checked={filter === "series"}
                        onChange={handleFilter}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    </div>
}

export { Search }