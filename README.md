Simple React application to keep track of personal readings.

## Installation

Requirements to run this project include [Node](https://nodejs.org) v6.0.0 or above. From within the project main folder:

1. Install all project's dependencies:

```bash
npm install
```

Go ahead and start the development server by running:

```bash
npm start
```

Open [http://localhost:3000]() to view it in the browser.

Inside `package.json` you'll find some additional scripts you can run to build assets, testing and deploying the application in production.

## User Guide

The project has been built from scratch prior to Phase 1, although closely following all requirements for the projects and indications provided as comments in the code inside the starter repository.

## Features
- A couple of external react libraries have been loaded for icons and a loading spinner indicator, to offer some nice feedback to the end user.
- The code has been structured in a number of components, although not every single component has already been isolated and wired up.
- The main page fetches data from the backend, storing all required pieces of state without manually setting predefined bookshelves. This makes it possible to dynamically build all necessary shelves and remove them from display as soon as a bookshelf is empty.
- Errors from the server should be handled correctly.
- Implemented two different versions for the `BooksAPI.update()` endpoint, one for each route, for the following reasons:
  - In the main `/` route state updates for `books` can happen in a simple way, by concatenating the updated `book` at the end of the `books` array.
  - In the `/search` route, an `update()` helper has been used to keep track of and return the updated book at the exact index in the array. This way the book wouldn't "jump" at the end of the query results after re-rendering.
- To compensate for inaccurate informations, a modal has been added to display additional informations for each book.
- By hitting the `/search` route, the focus is immediately set to the input, so the end user just have to type his query.
- Search requests have been debounced to alleviate the server and frequent `403 forbidden` responses.

