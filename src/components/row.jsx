import {useState,useEffect} from 'react'
import axios from 'axios';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// Base urls
const Base_Url='https://api.themoviedb.org/3'
const Base_ImgUrl='https://image.tmdb.org/t/p/original/'
const Row = ({title,fetchUrl}) => {
  const [movie,setMovies]=useState([])
 const [isScroll,setIsScrolled]=useState(0)

  useEffect(()=>{
  //  fetching the movie data
  const Fetchdata= async()=> {
    try {
      const response = await axios.get(`${Base_Url}${fetchUrl}`)
      console.log(response);
      setMovies(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }
  // calling the fetch data function
  Fetchdata()

    return ()=>{}
  },[fetchUrl])

  const handleScrollright=()=>{
    setIsScrolled(previousState=>previousState+200)
  }
  const handleScrollleft=()=>{
    setIsScrolled(previousState=>previousState-200)
  }

  return (
    <div className='container-fluid'>
      <h1 className='fw-bold text-white fs-4'>{title}</h1>
      <div className="row align-items-center">
        <div className="col-auto">
          <button className='transparent'>
            <ArrowBackIosOutlinedIcon className='arrowleft' onClick={handleScrollleft}/>
            </button>
        </div>
        <div className="col" style={{overflow:'hidden'}}>
            <div className='d-flex' style={{transform:`translateX(-${isScroll}px)`,transition:'transform 0.5s linear '}}>
              {movie && movie.map(( items,index)=>{
                return(
                  <img key={index} src={`${Base_ImgUrl}${items.poster_path}`} 
                  alt=""
                  style={{width:'100px'}}  
                  className='mx-1'
                  />
                )
              })}
            </div>
        </div>

        <div className="col-auto">
        <button className='transparent'>
            <ArrowForwardIosOutlinedIcon className='arrowright' onClick={handleScrollright}/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Row
