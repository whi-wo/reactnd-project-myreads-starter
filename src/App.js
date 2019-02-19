import React from 'react'

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books:[]
   }

   componentDidMount() {
     BooksAPI.getAll().then((books) => {
       this.setState({ books: books })
     })
   }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <MainPage/>
        //<SearchPage/>
      </div>
    )
  }
}

export default BooksApp
