import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import data from '../helper/data';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";



const Question = () => {
  
    const [show, setShow] = useState(false);

    
    const toggleShow = (id) => {
        setShow(show === id ? false : id);
    };

    return (
        <div className='endis' >
           {data.map(({ id, question, answer }) => (
    <Container key={id} >
    <div className="card w-75 mb-3">
    <div className="card-body">
       <p className="card-text baslik">
                    {id} - {question}
       </p>
       {show !== id ? (
           <a href="#" className="btn "
            onClick={() => toggleShow(id)}
            
           >
           <FaArrowCircleDown />
           </a>
       ) : (
           <>
               <div className="card w-100 mb-3">
                   <div className="card-body">
                     
                       <p className="card-text">{answer}</p>
                       <button className="btn " onClick={() => toggleShow(id)}>
                       <FaArrowAltCircleUp />
                       </button>
                   </div>
               </div>
           </>
       )}
            </div>
        </div>
    </Container>
            ))}
        </div>
    );
};

export default Question;
