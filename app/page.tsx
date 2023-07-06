import React from "react";
import Chart from "./component/Chart";
import Fields from "./component/Fields";
import List from "./component/List";

function page() {
  let senddata = [
    { fullValue: 300, currValue: 150, name: "Coffee" },
    { fullValue: 300, currValue: 120, name: "Pasta" },
  ];
  let orderdata = [
    { fullValue: 300, currValue: 150, name: "Counter" },
    { fullValue: 300, currValue: 120, name: "Online" },
  ]
  let fielddata = [
    { heading: "Total Revenue", value: "2,50,00. RS" },
    { heading: "Total Customer", value: "2,50,00. RS" },
    { heading: "Total Orders", value: "2,50,00. RS" },
    { heading: "Total Orders", value: "2,50,00. RS" },
    { heading: "Total Orders", value: "2,50,00. RS" }
  ]
  return (<div>
      <div style={{display : "flex"}}>
        {fielddata.map((itm : any,ind : any)=>{
          return (
            <div style={{width :"20%" ,background : "white" ,borderRadius :"10px", paddingBottom : "10px", marginRight:"10px"}}>
            <Fields fd={itm}/>
            </div>
          )
        })
      }
      
      </div>
      <br/>
      <div style={{display : "flex"}}>
      <div style={{  width: "30vw", background : "white" ,borderRadius :"10px", paddingBottom : "10px", marginRight:"10px" }}>
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
      </div>

      <div style={{  width: "30vw", background : "white" ,borderRadius :"10px", paddingBottom : "10px" }}>
      <div
          style={{display :"flex", alignItems :"center", fontSize: "25px", color: "black", fontWeight: "bold" , paddingLeft :"20px", marginBottom:"10px" }}
        >
          Order Mode

        </div>
        <div>
          {orderdata.map((itm: any, ind: any) => {
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
      </div>
      </div>
    </div>
  );
}

export default page;
