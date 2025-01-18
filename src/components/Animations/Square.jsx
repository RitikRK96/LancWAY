import React from 'react'
import Squares from './Squares';

<Squares
  speed={0.5}
  squareSize={40}
  direction='diagonal' // up, down, left, right, diagonal
  borderColor='#fff'
  hoverFillColor='#222'
/>
function Square() {
  return (
    <div>Square</div>
  )
}

export default Square