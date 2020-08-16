import React,{useState,useEffect} from 'react';
import {v4} from 'uuid';
import SongForm from './SongForm';

const SongList = () => {
    const[songs,setSongs] =  useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
      ])
      const addSong =(title)=>{
          setSongs([...songs,{title:title,id: v4()}])
      }

      const[age,setAge]=useState(20);

      useEffect(()=>{
          console.log('useEffect hook run',songs)
      },[songs])
    return ( 
        <div className="song-List">
            <ul>
                {songs.map( song =>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <SongForm addSong={addSong}/>
            <button onClick={()=>setAge(age+1)}>Add 1 to age:{age}</button>
        </div>
     );
}
 
export default SongList
