import React from "react";

export const BookList = books => {
  return (
    <div className="item">
      <div className="image">
        <img alt={books.id} src={books.image} />
      </div>
      <div className="content">
        <div className="header">{books.title}</div>
        <div className="meta">
          <strong>Authors: {books.authors}</strong>
        </div>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{books.description}</p>
        </div>
        <div className="extra">
          <button
            type="submit"
            className="ui button"
            id={books.id}
            onClick={books.buttonFunction}
            disabled={books.dbCheck}
          >
            {books.message}
          </button>
          <a href={books.link} target="_blank" rel="noopener noreferrer">
            <button className="ui button">View on Google Books Store</button>
          </a>
        </div>
      </div>
    </div>
  );
};
