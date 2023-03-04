import React from 'react';
import './header.scss';
import {BiCameraMovie} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeData, set_isSearch } from '../../store/slicers/MovieSlice';


const Header = () => {
    const favouritesLength = useSelector(state => state.movie.favouriteMovieData.length)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigateToHome = () => {
      navigate('/');
      dispatch(removeData([]));

    }

  return (
    <div className='header'>
     
            <div className="navbar">
                <div className="logo" onClick={() => handleNavigateToHome()}>
                    <BiCameraMovie className='logo_icon'/>
                </div>
                <div className="favourites" >
                  <Link to='/favourites' target='_blank'>
                    <AiOutlineHeart className='favourites_icon' />
                  </Link>

                    <span>{favouritesLength}</span>
                </div>
            </div>
    
    </div>
  )
}

export default Header