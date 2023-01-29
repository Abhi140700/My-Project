import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm , setSearchTerm] = useState();
  const navigate = useNavigate();

  const submit = (event) =>{
    event.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={submit} className='bg-white d-flex rounded-pill' >
        <input type="text" placeholder='Search...' className=" ps-4 search-bar  rounded-pill border-0" value={searchTerm} onChange={(event) =>{setSearchTerm(event.target.value)}} />
        <IconButton type='submit' sx={{ color: 'red' ,pr : 2}}>
            <Search/>
        </IconButton>
    </form>
  )
}

export default SearchBar


