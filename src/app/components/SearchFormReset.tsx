"use client"
import Link from 'next/link'
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        
        if(form) form.reset();
    }
  return (
    <div>
      <button type = "submit" onClick={reset}>
                        <Link href = "/" className='text-white'>X</Link>
                    </button>
    </div>
  )
}

export default SearchFormReset
