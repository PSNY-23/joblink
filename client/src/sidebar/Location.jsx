import React from 'react'
import InputField from '../components/InputField'

function Location({ handleChange }) {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div className='flex flex-col gap-1'>
        <label className='sidebar-label-container' htmlFor='all'>
          <input type="radio" name='location' id='all' value='' onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>

        <InputField handleChange={handleChange} value='London' title='London' name='location' />
        <InputField handleChange={handleChange} value='Seattle' title='Seattle' name='location' />
        <InputField handleChange={handleChange} value='Madrid' title='Madrid' name='location' />
        <InputField handleChange={handleChange} value='Boston' title='Boston' name='location' />
      </div>
    </div>
  )
}

export default Location
