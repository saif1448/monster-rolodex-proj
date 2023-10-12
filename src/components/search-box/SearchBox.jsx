import React from 'react'
import './SearchBox.css'

const SearchBox = ({ placeholder, className, onSearchChange }) => {
    return (
        <input
            type='search'
            className={className}
            placeholder={placeholder}
            onChange={onSearchChange} />
    )
}

export default SearchBox