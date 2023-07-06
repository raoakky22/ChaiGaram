import React from "react";
import Chart from "./component/Chart";
import List from "./component/List";

function page() {
  let senddata = [
    { fullValue: 300, currValue: 150,name:'coffee' },
    { fullValue: 300, currValue: 120,name:'pasta' },
  ];
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        className="disp"
        style={{ fontSize: "40px", color: "gray", fontWeight: "bold" }}
      >Monthly Popular Item
      </div>
      <div>
         {
        senddata.map((itm:any,ind:any)=>{
         return  (<div className="disp">
         <div><List ls={itm} /></div> &nbsp;&nbsp;&nbsp; <div><Chart cs={itm} /></div>
         <br />
       </div>)
        })
      }
        
      </div>
     
      {/* <div className="disp">
        <List ls={listdata} /> &nbsp;&nbsp;&nbsp; <Chart cs={senddata} />
      </div> */}
      
    </div>
  );
}

export default page;
