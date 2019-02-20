import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI';


class SearchPage extends Component {

	state = {
		query: "",
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query: query })
	}

	getSearchedBooks = (query) => {
		BooksAPI.search(query).then((searchedBooks) => {
			this.setState({ searchedBooks: searchedBooks})
		})
	}

render() {
	if (this.state.query) {
	const match = new RegExp(escapeRegExp(this.state.query)
		,'i')
	} else {
	}

	return (
	<div className="search-books">
		<div className="search-books-bar">
			<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
			<div className="search-books-input-wrapper">
				{/*
					NOTES: The search from BooksAPI is limited to a particular set of search terms.
					You can find these search terms here:
					https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					you don't find a specific author or title. Every search is limited by search terms.
				*/}
				<input type="text"
				placeholder="Search by title or author"
				value={this.state.query}
				onChange={(event) => this.updateQuery(event.target.value)}
				/>
			</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
				{this.state.searchedBooks.map(searchedBook => (
					<li key={searchedBook.id}>
						<Book= {searchedBook}/>
						</li>
				))}
				</ol>
			</div>
		</div>
	);
}
}
export default SearchPage;
