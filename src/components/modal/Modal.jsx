import dayjs from 'dayjs';
import React, { useRef } from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_URL } from '../../api/api';
import noPoster from '../../assets/no-poster.png';
import { add_to_favouries, remove_from_favourites } from '../../store/slicers/MovieSlice';
import clickoutside from '../../utils/clickoutside';
import './modal.scss';

const MovieDetails = ({setShowModal}) => {
 
    const data = useSelector(state => state.movie.selectedData);
    const dispatch = useDispatch();
    const boxRef=useRef(null);

    const [id] = data.map((item) => item.id)
    const favorites = useSelector(state => state.movie.favouriteMovieData);
    const isItemPresent = favorites.some((item) => item.id ===id);
    const isLocation = window.location.href.includes('/favourites')
    clickoutside(boxRef,() => setShowModal(false));

    
  return (
    <div className="overlay">
        <div className='movieDetails_modal' ref={boxRef}>   
            <div className="closeShow" onClick={() => setShowModal(false)}>
                <AiOutlineCloseCircle  className='closeIcon'/>
            </div> 
            <div className="modal_details">
                {data.map((item) => (
                    <div className="details" key={item.id}>
                        <div className="left">
                            <div className="item_img">
                                <img src={item?.backdrop_path ?`${IMAGE_URL+item?.backdrop_path}` : noPoster}/>
                            </div>
                        { !isLocation ? 
                                isItemPresent ?  <button disabled>In Favourites</button> :
                                <button onClick={() => dispatch(add_to_favouries(item))}>Add to Watchlist</button>
                            : 
                            <button 
                            onClick={() => {setShowModal(false); dispatch(remove_from_favourites(item?.id))}}
                            >Remove</button>}
                            
                        </div>
                        <div className='right' >
                            <div className="title">
                                <h1 style={{color:'white'}}>{`${item?.original_title}`}</h1>
                                {dayjs(item?.realse_dat).format("MMM D,YYYY")}
                                <p>{`${item?.vote_average.toFixed(1)}`}</p>
                            </div>
                            <div className="overview">
                                <p>{item?.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default MovieDetails