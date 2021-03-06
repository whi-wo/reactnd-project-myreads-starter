import React, { Component } from 'react'

class Book extends Component {
render () {
	//if there is no image for the book, the image will not display (an empty string)
	let searchedThumbnail = this.props.book.imageLinks ?
	this.props.book.imageLinks.thumbnail : "";

	return (
	<div className="book">
		<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 192, backgroundImage:
				  `url("${searchedThumbnail}")`}}>
			</div>
			<div className="book-shelf-changer">
				<select value={this.props.book.shelf}
				onChange={(event) => this.props.moveShelf(this.props.book,
					event.target.value
				)}
					>
					<option value="move" disabled>Move book to...</option>
					<option value="none">None</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
				</select>
			</div>
		</div>
		<div className="book-title">{this.props.book.title}</div>
		<div className="book-authors">{this.props.book.authors}</div>
	</div>
);
}
}
export default Book;
