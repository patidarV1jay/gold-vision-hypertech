import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const GuideDetails = ({question,answer, open, id, handleClick}) => {

  return (
   
        <div className='questions'>
            <div>
                <h6 className='faqQuestions' onClick={() => handleClick(id)} >
                    {question}            
                    <FaAngleDown className='angleDown'/>
  
                     </h6>
                {open && <p className='faqAnswer'>{answer}</p>}
                </div>            
        </div>
  
  )
}

export default GuideDetails