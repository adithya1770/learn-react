import { useState } from "react";

function Weather(){
    const [tempData, setTempData] = useState(null)
    const [humidityData, setHumidityData] = useState(null)
    const [windData, setWindData] = useState(null)

    const weatherData = async () => {
        const weather = await fetch("https://api.weatherapi.com/v1/current.json?key=afe611cc2ba045048c7130922241704&q=Delhi,temp_c");
        const data = await weather.json()
        const tempData = data['current']['temp_c']
        setTempData(tempData)
        const humidityData = data['current']['humidity']
        setHumidityData(humidityData)
        const windData= data['current']['wind_kph']
        setWindData(windData)
    }

    const weatherStyling = {
        height: "230px",
        width: "225px",
        backgroundColor : "green",
        border: "10px solid white",
        position:"absolute",
        left: "650px",
        top: "250px",
        borderRadius:"15px",
        color: "white"
    }

    const buttonStyle = {
        height:"32px",
        width: "45px",
        backgroundColor:"black",
        color:"white",
        borderRadius:"15px"
    }

    return(
        <div className="poppins-bold" style={weatherStyling}>
                <center>
                <br /><p><i>Weather</i></p>
                <br />
                <hr />
                <p>TEMPERATURE - {tempData}C</p>
                <p>HUMIDITY - {humidityData}%</p>
                <p>WINDSPEED - {windData}Kmph</p>
                <hr />
                <br />
                <button onClick={weatherData} style={buttonStyle}>Click</button>
                </center>
        </div>
    )
}

export default Weather