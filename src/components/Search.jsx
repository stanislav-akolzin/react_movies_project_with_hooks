import React from "react";

class Search extends React.Component {
    state = {
        searchText: '',
        filter: ''
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.runSearch()
        }
    }

    handleFilter = (event) => {
        this.setState({filter: event.target.value})
    }

    runSearch = () => {
        {
            this.state.filter === "" ? (
                this.props.handleSearch(this.state.searchText)
            ) : this.props.handleSearch(`${this.state.searchText}&type=${this.state.filter}`)
        }
    }

    render() {
        const { searchText, filter } = this.state;
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        className="validate"
                        type="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(event) => this.setState({ searchText: event.target.value })}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button className="btn search-btn" onClick={() => this.runSearch()}>Search</button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            value=""
                            checked={filter===""}
                            onChange={this.handleFilter}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            value="movie"
                            checked={filter==="movie"}
                            onChange={this.handleFilter}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            value="series"
                            checked={filter==="series"}
                            onChange={this.handleFilter}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </div>
    }
}

export { Search }