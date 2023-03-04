import React, { useState } from 'react';
import './favourites.scss'
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_URL } from '../../api/api';
import noPoster from '../../assets/no-poster.png';
import { selectParticularMovie } from '../../store/slicers/MovieSlice';
import Modal from '../../components/modal/Modal';


const Favourites = () => {
  const data = useSelector(state => state.movie.favouriteMovieData);
  const [showModal,setShowModal] = useState(false);
  const dispatch = useDispatch();
 
  const handleClick = (item) => {
    dispatch(selectParticularMovie([item]));
    setShowModal(true);
  };


 


  return (
    <div className='favouritesWrapper'>
      {data.length === 0 ? (
        <p className='no_items'>No items, please add movies</p>
      ) : (
        <>
        {data.map((item) => (
          <div className="img_container" key={item?.id} onClick={() => handleClick(item)} >
             <img src={item?.backdrop_path ?`${IMAGE_URL+item?.backdrop_path}` : noPoster} />
             <div className="icon_container"  >
             </div>
          </div>
        ))}
        </>
      )}
      {data.length > 0 && (
        <>
        
        </>
      ) }
       { showModal  ? <Modal  setShowModal={setShowModal}/> : ''}
       
    </div>
  )
 
}

export default Favourites