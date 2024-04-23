import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Row from '../components/row'
// import Home from './Home'
// import Tvshows from './tvshows'
// import Movies from './movies'
// import Mylist from './mylist'
// import Popular from './popular'
import api from '../Apis/api'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const NetflixMain = () => {
  return (
    <div>
      {/* rendering the all components for building structure */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' />
        <Route path='/Tvshows' />
        <Route path='/Movies' />
        <Route path='/Mylist' />
        <Route path='/Popular' />
      </Routes>
      </BrowserRouter>
     
      <Banner/>
      <Row title='Top Trending Moves' fetchUrl={api.fetchComedymovies} />
      <Row title='TopRated Moves' fetchUrl={api.fetchTopratedmovies} />
      <Row title='Netflixoriginals'  fetchUrl={api.fetchNetflixoriginals}/>
      <Row title='Comdeymovies' fetchUrl={api.fetchComedymovies}/>
      <Row title='Romanticmovies' fetchUrl={api.fetchRomanticmovies}/>
      <Row title='Actionmovies' fetchUrl={api.fetchActionmovies} />
      <Row title='Horrormovies' fetchUrl={api.fetchHorrormovies} />
      <Row title='Documenteries'  fetchUrl={api.fetchDocumentaries}/>
    </div>
  )
}

export default NetflixMain
