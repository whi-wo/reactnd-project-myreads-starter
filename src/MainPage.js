import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Book from './Book';


class MainPage extends Component {
render() {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>My Books!</h1>
			</div>
			<div className="list-books-content">
				<div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
							{
								this.props.books
								.filter(book => book.shelf === "currentlyReading")
								.map(book => (
									<li key={book.id}>
										<Book
											book={book}
											moveShelf={this.props.moveShelf}
										/>
									</li>
								))}
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Want to Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{
									this.props.books
									.filter(book => book.shelf === "wantToRead")
									.map(book => (
										<li key={book.id}>
											<Book
											 	book={book}
												moveShelf={this.props.moveShelf}
											/>
										</li>
									))}
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
							{
								this.props.books
								.filter(book => book.shelf === "read")
								.map(book => (
									<li key={book.id}>
										<Book
											book={book}
											moveShelf={this.props.moveShelf}
										/>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
				</div>
				<div className="open-search">
					<NavLink
						to="/search"
							>Add a book
					</NavLink>
				</div>
			</div>
			);
				}
				}
export default MainPage;
