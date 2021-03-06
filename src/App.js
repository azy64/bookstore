import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Book from './components/Book';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import NoWhere from './components/NoWhere';
import store from './redux/configStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact element={<Book />} path="/" />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={NoWhere} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
