import React from "react";
// import "sss.png"
import x from '../src/sss.png'

function App() {
  return (
    <div style={{border:"2px #1761a0 solid", borderRadius: "5px", width:" 400px" ,textAlign: "center", marginLeft: "auto" ,marginRight: "auto", marginTop: "100px"}}>
        <img src={x}/>
        <p style={{fontSize:" 17px;"}}>.تم ايقاف عمل الشركة حتى اشعارا أخر </p>
        <p>دمتم سالمين</p>
        <p>The company has been suspended until further notice.</p>
        <p>Stay safe</p>
        <p>For Contact:</p>
        <p>info@alhibarenewableenergy.com</p>
    </div>
  );
}

export default App;
