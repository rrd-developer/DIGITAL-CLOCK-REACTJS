import { useEffect, useState } from "react";

function App() {

  const date = new Date();

  const days = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const [currentDate,setCurrentDate] = useState({h:0,m:0,s:0})


  useEffect(()=>{
    setCurrentDate({h:date.getHours(),m:date.getMonth(),s:date.getSeconds()})
  })


  function Time(t){
    if(t>12){
      return t-12
    }
    return t;
  }


  function addZero(t){
    var len = t.toString().length
    if(len <= 1){
      return "0"+ t
    }
    return t
  }
  return (
    <div className="App" style={{textAlign:"center"}}>

      <h1>DIGITAL CLOCK</h1>

        <div>{Time(currentDate.h)}</div>
        :
        <div>{addZero(currentDate.m)}</div>
        :
        <div>{addZero(currentDate.s)}</div>


        <div>{date.getDay()}-{date.getDate()}-{date.getFullYear()}</div>



       <div>{days[date.getUTCDay()]}</div>


     
    </div>
  );
}

export default App;
