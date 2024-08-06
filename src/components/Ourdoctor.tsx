import React from 'react'

const Ourdoctor = () => {
  return (
    <div className='bg-pattern4-bg bg-slate-50 h-[800px] w-full'>
       <div className="  flex flex-col items-center text-center py-8 gap-2 ">
          <h1>Our Doctor</h1>
          <h2 className="text-2xl font-semibold">Our Dedicated Doctors Team</h2>
          <img src="/activity.png" alt="icon" className="  h-10 w-10" />
        </div>
        <div className='grid grid-flow-col justify-center gap-8'>
            <img src="/doctors/team-1.png" alt="img" className='border-4 border-white transition duration-700 ease-in-out hover:scale-110 hover: ... ' />
          
           <img src="/doctors/team-2.png" alt="img" className='border-4 border-white transition duration-700 ease-in-out hover:scale-110 hover: ...' />
          
            <img src="/doctors/team-3.png" alt="img" className='border-4 border-white transition duration-700 ease-in-out hover:scale-110 hover: ...' />
            <img src="/doctors/team-4.png" alt="img" className='border-4 border-white transition duration-700 ease-in-out hover:scale-110 hover: ...' />

        </div>
       
        <p className='text-center my-10 font-light'>Don’t hesitate, contact us for better help and services Explore all Dr. Team</p>

        
    </div>
  )
}

export default Ourdoctor
