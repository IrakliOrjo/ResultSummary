import { useState } from 'react'

import './index.css'
import memory from './assets/icon-memory.svg'
import reaction from './assets/icon-reaction.svg'
import visual from './assets/icon-visual.svg'
import verbal from './assets/icon-verbal.svg'

function App() {


  return (
    <div className=' min-h-screen flex justify-center white items-center'>
      <div className='flex flex-col md:flex-row white md:rounded-[1.8em] md:shadow-lg md:min-h-[25em]'>
     <div className='blue_gradient white rounded-b-[1.8rem] md:rounded-[1.8rem] md:min-w-[20em] p-4 flex flex-col
      justify-center items-center md:justify-evenly
     '>
      <p className='light_lavender mb-4 text-[.9rem] md:text-[1.2rem]'>Your Result</p>
      <div className='circle_gradient rounded-full w-[6.5em] h-[6.5em]
      flex flex-col justify-center items-center md:w-[9em] md:h-[9em]
      '>
        <p className='text-white font-bold text-[2.5rem] md:text-[2.8rem]'>76</p>
        <p className='text-[.7rem] light_lavender md:text-[.9rem]'>of 100</p>
      </div>
      <p className='text-white text-[1.2rem] md:text-[1.4rem] mt-4'>Great</p>
      <p className='light_lavender text-[.9rem] md:max-w-[15em] text-center max-w-[20em]'>You scored higher than 65% of the people who have taken these tests.</p>
     </div>
     <main className='flex flex-col p-6 md:py-6 md:rounded-[1.8em] white md:min-w-[20em] md:min-h-[25em]'>
      <h1 className='dark_blue font-[700] mb-5'>Summary</h1>
      <div className='flex flex-col gap-4 mb-6 '>
          <div className='flex justify-between rounded-lg bg-rose-50 p-3'>
            <div><img className='inline-block mr-3' src={reaction} alt='reaction icon' />
                <p className='light_red font-[700] text-[.9rem] inline'>Reaction </p>
            </div>
            <div className=''>
              <p className='text-[.9rem] font-bold'>80 <span className=' text-gray-400'>/ 100</span></p>
            </div>
          </div>
           <div className='flex justify-between rounded-lg bg-yellow-50 p-3'>
          <div><img className='inline-block mr-3' src={memory} alt='reaction icon' />
               <p className='orange_yellow font-[700] text-[.9rem] inline'>Memory </p>
          </div>
          <div className=''>
            <p className='text-[.9rem] font-bold'>92 <span className=' text-gray-400'>/ 100</span></p>
          </div>
        </div>
         <div className='flex justify-between rounded-lg bg-teal-50 p-3'>
          <div><img className='inline-block mr-3' src={verbal} alt='reaction icon' />
               <p className='green_teal font-[700] text-[.9rem] inline'>Verbal </p>
          </div>
          <div className=''>
            <p className='text-[.9rem] font-bold'>61 <span className=' text-gray-400'>/ 100</span></p>
          </div>
        </div>
         <div className='flex justify-between rounded-lg bg-blue-50 p-3'>
          <div><img className='inline-block mr-3' src={visual} alt='reaction icon' />
               <p className='cobalt_blue font-[700] text-[.9rem] inline'>Visual </p>
          </div>
          <div className=''>
            <p className='text-[.9rem] font-bold'>72 <span className=' text-gray-400'>/ 100</span></p>
          </div>
        </div>
        
      </div>
      <button className='dark_blue_bg rounded-3xl text-white
      p-3 text-[1.1rem]
      '>Continue</button>
     </main>
     </div>
    </div>
  )
}

export default App
