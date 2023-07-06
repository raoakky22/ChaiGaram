import React from 'react'

function Fields(props:any) {
  return (
    <div
          style={{ fontSize: "25px", color: "black", fontWeight: "bold" , paddingLeft :"20px", marginBottom:"10px" }}
        >
            <div style={{color:"gray"}}>
          {props.fd.heading}
          </div>
          <div>
          {props.fd.value}
          </div>
    </div>
  )
}

export default Fields