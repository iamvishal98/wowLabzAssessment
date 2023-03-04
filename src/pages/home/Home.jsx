import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import Movie from '../../components/movie/Movie';


const Home = () => {
    const [query , setQuery] = useState('');
    const data = useSelector(state => state.movie.data)
  return (
    <>
        <HeroBanner query={query} setQuery={setQuery}/>
        {data.length !=0 ? <Movie data={data}/> : ''}
    </>
  )
}

export default Home