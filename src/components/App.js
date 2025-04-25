
import React from "react";
import './../styles/App.css';
import WeatchDisplay from "./WeatherApp"
const App = () => {
  const [data,setData] = React.useState(null)

  React.useEffect(()=>{
  setData({ temperature: 25, conditions: "Sunny" })
},[])
  return (
    <div>
    {data&&  <WeatchDisplay data={data}/>}
    </div>
  )
}

export default App
