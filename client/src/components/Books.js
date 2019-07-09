import React, { Component } from "react";
import axios from "axios";
import { BookList } from "./BookList";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books").then(response => {
      this.setState({ books: response.data });
    });
  };

  deleteBook = event => {
    axios.delete(`/api/books/${event.target.id}`).then(response => {
      this.getBooks();
    });
  };

  render() {
    return (
      <div className="ui items">
        {this.state.books.map(book => (
          <BookList
            key={book.key}
            id={book._id}
            image={book.image}
            title={book.title}
            authors={book.authors}
            description={book.description}
            link={book.link}
            message="Remove"
            buttonFunction={id => {
              this.deleteBook(id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default Books;
