import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
	}

getSearchedBooks = () => {
	BooksAPI.search(query).then((searchedBooks) => {
		this.setState({ searchedBooks: searchedBooks  })
	})
}

render() {
	if (this.state.query) {

	} else {
		this.setState({ searchedBooks: searchedBooks  }) 
	}
	return (
	<div className="search-books">
		<div className="search-books-bar">
			<button className="close-search" onClick={() => this.setState(
				{ showSearchPage: false })}>Close</button>

			<div className="search-books-input-wrapper">
				<input
				type="text"
				placeholder="Search by title or author"
				value={this.state.query}
				onChange={(event) => this.updateQuery(event.target.value)}
				/>
			</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
				{this.state.searchedBooks.map(searchedBook => (
					<li key={searchedbook.id}>
					<Book
						book={searchedBook} />
						</li>
				))}
				</ol>
			</div>
		</div>
	);
}
}
export default SearchPage;
