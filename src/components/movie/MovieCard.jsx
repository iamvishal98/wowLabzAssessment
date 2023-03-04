import dayjs from 'dayjs'
import React from 'react'
import { IMAGE_URL } from '../../api/api'
import noPoster from '../../assets/no-poster.png';

const MovieCard = ({item,handleClick}) => {
  return (
    <div className="movie" onClick={() => handleClick(item)}>
        <div className="movie_img">
            <img src={item?.backdrop_path ?`${IMAGE_URL+item?.backdrop_path}` : noPoster} />
            <span className='ratings'>{item?.vote_average.toFixed(1)}</span>
        </div>
        <div className="textBlock">
            <span className="title">
                    {item?.title || item.name}
            </span>
            <span className="date">
                {dayjs(item.realse_dat).format("MMM D,YYYY")}
            </span>
        </div>
   </div>
  )
}

export default MovieCard