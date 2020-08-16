import React, { useState,useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const[title,setTitle] =  useState(
        ''
    );
    const[author,setAuthor] =  useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,'holii')
        dispatch({type:'ADD_BOOK',book:{
            title,author
        }})
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit }>
            <label type="text">Title:</label>
            <input type="text" value={title} required onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <label type="text">Author:</label>
            <input type="text" value={author} required onChange={(e) => {
                setAuthor(e.target.value)
            }} />
            <input type="submit" value="Add a book" />
        </form>
    );
}

export default BookForm;