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


    return(
        <div className="poppins-bold">
                <center><br />
                <p className="text-white text-8xl">Weather</p>
                <br />
                <p className="text-white text-4xl">TEMPERATURE - {tempData}C</p>
                <p className="text-white text-4xl">HUMIDITY - {humidityData}%</p>
                <p className="text-white text-4xl">WINDSPEED - {windData}Kmph</p>
                <br />
                <button onClick={weatherData} className="text-white text-2xl h-10 w-40 bg-black rounded-3xl">Generate</button>
                </center>
        </div>
    )
}

export default Weather