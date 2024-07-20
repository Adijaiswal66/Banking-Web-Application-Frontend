import React from 'react'
import Navbar from './Navbar'

function Base({title="Welcome to our website",chidren}) {
  return (
    <div>
      <Navbar />
        {chidren}
      <h1>This is footer</h1>
    </div>
  )
}

export default Base
