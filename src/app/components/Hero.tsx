import React from 'react'
import SearchForm from './SearchForm'

const Hero = () => {
  return (
    <div className='text-white w-full px-50 py-12 '>
      

    <h1 className='text-6xl text-center w-[80%] m-auto leading-tight  '>
        Exploring the <span className = "text-green-400">Mind,</span> Code, and Language <span className='text-green-400'>—</span> One Post at a Time</h1>
        
        <div className='flex mt-12'>
        <SearchForm />
        </div>
        
    </div>
  )
}

export default Hero
