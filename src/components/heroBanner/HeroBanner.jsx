import React from 'react';
import { useDispatch } from 'react-redux';
import bgImage from '../../assets/bgImage.png'
import { fetchSearchData } from '../../store/slicers/MovieSlice';
import './heroBanner.scss';

const HeroBanner = ({query , setQuery}) => {
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(query.length>=3)
        {
            dispatch(fetchSearchData(query));
        }
        else 
        {
         alert('please enter minimum of 3 letters to serach');
        }       
    }



  return (
    <div className="banner_container">
        <div className='contentWrapper'>
            <div className="image_container">
                <img src={bgImage} alt='background image'/>
            </div>
            <div className="opacity_layer"></div>

            <div className="content">
                    <span className="title">Welcome.</span>
                    <span className='subtitle'>Millions of Movies to discover on your fingertips.</span>
                    <form className="searchInput" onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            placeholder='search for a movie' 
                            onChange={(e) => setQuery(e.target.value.length >=3 ? e.target.value : '')}
                        />
                        <button>search</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner