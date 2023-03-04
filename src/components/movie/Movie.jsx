import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectParticularMovie } from '../../store/slicers/MovieSlice';

import Modal from '../modal/Modal';
import Pagination from '../pagination/Pagination';
import './movie.scss';
import MovieCard from './MovieCard';

const Movie = ({data}) => {
    const [show,setShow] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (item) => {
        dispatch(selectParticularMovie([item]));
        setShowModal(true);
    }

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(10);
    const lastIndex = currentPage * postPerPage ;
    const firstIndex= lastIndex - postPerPage;

    const currentPosts = data?.slice(firstIndex,lastIndex);

  return (
    <div className='movie_container' >
        <div className="contentWrapper">
            <div className="movies">
                {currentPosts?.map((item) => 
                 (
                 <MovieCard item={item} key={item?.id} handleClick={handleClick}/>
                 )
                )}
            </div>
            { showModal ?<Modal  setShowModal={setShowModal}/> : ''} 

            {
                data.length <=10 ? '' :
                <Pagination 
                    totalPost={data?.length} postPerPage={postPerPage} 
                    setCurrentPage={setCurrentPage} currentPage={currentPage}
                />
            }
        </div>
    </div>
  )
}

export default Movie