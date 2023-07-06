import React from 'react'

function List(props:any) {
  return (
    <div style={{height:'10%',position:'relative'}}>
    <div style={{fontWeight : 'bold'}}>{props.ls.name}</div>
    </div>
  )
}

export default List