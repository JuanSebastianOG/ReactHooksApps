import React,{useState} from 'react';

const SongForm = ({addSong}) => {

    const[title,setTitle] =  useState(
        ''
      );
    const handleSubmit=(e)=>{
        e.preventDefault();
        addSong(title);
        setTitle('')
    }     
    return (
        <div>
            <form onSubmit={handleSubmit }>
                <label htmlFor="name">Song Name:</label>
                <input type="text" value={title} required onChange={(e)=>{
                    setTitle(e.target.value)
                }} />
                <input type="submit" value="add a Song"/>
            </form>
        </div>

    );
}

export default SongForm;