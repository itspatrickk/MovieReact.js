import { useState,useEffect } from "react";
import './App.css';
import './search.svg'
import MovieCard  from "./movieCard";

//a31bc7dc api key 
const API_URL ='http://www.omdbapi.com?apikey=a31bc7dc';

// const movie1 = {
//     "Title": "Avengers Assemble",
//     "Year": "2012–2019",
//     "imdbID": "tt2455546",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
// }
 

const App=() =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');

    // const handleKeyDown = (event) => {
    // if (event.key === 'Enter') {
    //   setSearchTerm(searchTerm);
    // };
     
    const searchMovies = async (title) =>{
        const response =  await fetch(`${API_URL}&s=${title}`);
        const data =   await response.json();

        setMovies(data.Search);
        
    }
   
    
    // useEffect(()=>{
    //         searchMovies('Avengers');
    //     },[])

    return(
        <div className="app">
            <h1>Free Movies</h1>
            <div className="search">
                <input 
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
               
                />
                <img src="SearchIcon" 
                alt="search" 
                onClick={()=>searchMovies(searchTerm)}

                />
            </div>
            {
                movies ?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (<MovieCard movie={movie}/>))}
                    </div>
                )
                :
                (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;