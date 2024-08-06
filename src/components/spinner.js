import React,{Components} from 'react'
import loading from './loading.gif'

function spinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  )
}

export default spinner
