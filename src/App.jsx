import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import UniversityList from './components/UniversityList/UniversityList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <UniversityList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
