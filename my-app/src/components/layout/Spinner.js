import React from 'react'
import wait from './wait.gif'

//This is the loading image
function Wait() {
  return (
    <div>
      <img
        src={wait}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Wait
