import React from "react";
import Chart from "./component/Chart";
import List from "./component/List";

function page() {
  let senddata = [
    { fullValue: 300, currValue: 150, name: "coffee" },
    { fullValue: 300, currValue: 120, name: "pasta" },
  ];
  return (
    <div style={{  width: "30vw", background : "white" ,borderRadius :"10px", paddingBottom : "10px" }}>
      <div
        style={{display :"flex", alignItems :"center", fontSize: "25px", color: "black", fontWeight: "bold" , paddingLeft :"20px", marginBottom:"10px" }}
      >
        Monthly Popular Item
      </div>
      <div>
        {senddata.map((itm: any, ind: any) => {
          return (
            <div className="disp" style={{
              paddingRight : "20px"}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90px"
                }}
              >
                <List ls={itm} />
              </div>{" "}
              <div>
                <Chart cs={itm} />
              </div>
              <br />
            </div>
          );
        })}
      </div>

      {/* <div className="disp">
        <List ls={listdata} /> &nbsp;&nbsp;&nbsp; <Chart cs={senddata} />
      </div> */}
    </div>
  );
}

export default page;
