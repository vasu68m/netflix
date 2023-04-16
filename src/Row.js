import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl,isLargeRow}){
 
const [movies, setMovies] = useState([]);  

// code which runs on specific conditions/variables

useEffect(()=>{
 async function fetchData(){
    const request = await axios.get(fetchUrl);
    // console.log(request.data.results);
    setMovies(request.data.results);
    return request;
 }
fetchData();
},[fetchUrl]);

// const opts = {
//   height: "390",
//   width: "100%",
//   playerVars:{

//   autoplay:1,
//   },
// };

// const handleClick =(movie)=>{

//   if(trailerUrl){
//     setTrailer("");

//   }else{
//     movieTrailer(movie?.name || "")
//   .then((url)=>{


//   }).catch((error)=>console.log(error));
//   }
// };

// console.log(movies);
console.table(movies);

  return (
    <div className="row">
    <h2>{title}</h2>

    <div className="rows_posters">
        {/* row_posters */}

        {movies.map(movie =>(
            <img 
            key={movie.id}
            // onClick={()=> handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name}/>
        ))}
    </div>
   {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  )
}

export default Row