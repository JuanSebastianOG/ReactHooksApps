import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContexProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContext from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContexProvider>
        <AuthContext>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContext>
      </ThemeContexProvider>
    </div>
  );
}

export default App;
