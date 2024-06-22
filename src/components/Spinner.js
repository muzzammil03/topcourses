import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div class="spinner"></div>
      <p className='text-bg-slate-700 text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner