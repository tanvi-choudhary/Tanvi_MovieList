import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import './AddFavo.css'


const AddFavo = () =>{
    return (
    <>
        <span className = "txtFavoColor">Add to Favourites  </span>
        <span className = "favo" > 
        {
           <FontAwesomeIcon icon={faHeart} />
        }
         </span>
     </>
    );

}

export default AddFavo;