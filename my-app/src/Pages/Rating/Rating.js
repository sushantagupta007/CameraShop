import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = (props) => {
    const rating = props.rating
    console.log(rating)
    return (
        <>
                {Array.apply(null, {length: rating}).map(Number.call, Number).map((number)=>
                    <div key={number}className="p-0 m-0"style={{display:"inline-flex"}}> 
                        <li style={{listStyleType:"none"}} className="m-0 text-center p-0"> 
                        <FontAwesomeIcon className="text-warning " icon={faStar}></FontAwesomeIcon>
                        </li>
                    </div>
                )}   
        </>
    );
};

export default Rating;