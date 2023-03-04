import React from 'react';
import './pagination.scss';


const Pagination = ({totalPost,postPerPage,setCurrentPage,currentPage}) => {
    let pages = [];
    //console.log(totalPost,postPerPage)
    for (let i=1; i<=Math.ceil(totalPost/postPerPage); i++)
    {
        pages.push(i)
 
    }


  return (
    <div className='pagination'>
        {
            pages.map((page,index) => (
                <button key={index} onClick={()=>setCurrentPage(page)} 
                 className={page===currentPage ? 'active' : ''}>{page}
                </button>
            ))
        }
    </div>
  )
}

export default Pagination