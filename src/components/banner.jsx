
import {useState,useEffect} from 'react'
import axios from 'axios';
import api from '../Apis/api';

// Base urls
const Base_Url='https://api.themoviedb.org/3'
const Base_ImgUrl='https://image.tmdb.org/t/p/original/'

const Banner = () => {
  const [movie,setMovies]=useState([])

  useEffect(()=>{
    //  fetching the movie data
    const Fetchdata= async()=> {
      try {
        const response = await axios.get(`${Base_Url}${api.fetchTopratedmovies}`)
        console.log(response);
        setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
      } catch (error) {
        console.error(error);
      }
    }
    // calling the fetch data function
    Fetchdata()
  
      return ()=>{}
    },[])

    let trimString = function (string, len) {
      return string?.length > len ? 
             string.substring(0, len-1) + '...' :
             string;
    };
  return (
<section className='container-fluid' id='info-container'>
 <img src={`${Base_ImgUrl}${movie?.backdrop_path}`} alt=""
  className='banner'
  />
  <div className="info">
    <h3 className='text-white fw-bold'>{movie?.title || movie?.original_title}</h3>
    <p>{trimString(movie?.overview,100)}</p>
    <div class="d-grid  d-md-block" id='btn-grid'>
    <button class="btn btn-primary mx-2" type="button">Play</button>
    <button class="btn btn-primary" type="button">Pause</button>
   </div>
  </div>

</section>
  )
}

export default Banner
