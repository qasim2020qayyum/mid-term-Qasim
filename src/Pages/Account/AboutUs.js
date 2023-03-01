import React, { useState,useEffect } from 'react'
import AboutData from './AboutData';

const AboutUs = () => {

  const [items, setItems] = useState(AboutData);
  
  
  return (
    <>
      

      {
        items.map((elem) => {
          const { id, category, mainHead1, mainHead2, head1, head1P, head2, head2P, head3, head3P, head4, head4P } = elem;
          
          return (
            <>
              
                <div className='about-us text-2xl font-serif px-20 my-4' key={id}>
                  <h1 className='text-green-600 text-left font-bold text-3xl mb-8'>{category} </h1>
                  <p className='font-serif text-justify px-8'>{mainHead1}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{mainHead2}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{head1P}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{head2P}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{head3P}</p><br/><br/>
                  <p className='font-serif text-justify px-8'>{head4P}</p><br/><br/><hr/>
                </div>
            </>
          )
            
        })
      }
    </>
  )
}

export default AboutUs