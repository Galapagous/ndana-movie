// src/Components/Header/Header.jsx

import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './header.scss';
import { Input } from '@mui/material';

const Header = () => {
  const [formData, setFormData] = useState({})
  const handleSearch = (e)=>{
    e.preventDefault()
    console.log({form: formData})
    setFormData({searchInput: ''})
  }
  return (
    <header className='header-container'>
      <div className='header-content'>
        <div className='logo'>
          <h1>Ndana</h1>
        </div>
        <nav className='site-nav'>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Action</a></li>
            <li><a href="#">Horror</a></li>
          </ul>
        </nav>
        <div className='header-right'>
          <form onSubmit={handleSearch} className='search'>
            <BiSearch />
            <Input value={formData.searchInput} onChange={(e)=>{setFormData({[e.target.name]: e.target.value})}} name='searchInput' type="text" placeholder="Search movies, TV shows..." />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;