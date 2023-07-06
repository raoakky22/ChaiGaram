import { relative } from 'path'
import React from 'react'
import List from './List'

function Chart(props:any) {

  return (

    <div style={{position:'relative'}}>
        <div className='chart' style={{ width: `${props.cs.fullValue}px`, textAlign : 'end'}}>{props.cs.currValue} </div>
        <div className='chart-bck' style={{ width: `${props.cs.currValue}px`}}> </div>
    </div>
  
  )
}

export default Chart