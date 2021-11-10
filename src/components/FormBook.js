import React from 'react';

export default function FormBook() {
  return (
    <div>
      <form>
        <div id="book_title">
          <input type="text" aria-labelledby="book_title" id="title" placeholder="Book title" />
        </div>
        <div id="book_author">
          <input type="text" aria-labelledby="book_title" placeholder="Book Author" id="author" />
        </div>
        <div id="save">
          <button type="button">Save</button>
        </div>
      </form>
    </div>
  );
}
