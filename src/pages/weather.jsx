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
            <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
            <p className="absolute right-20 top-40">Beta Version v1.0A</p>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
                <center><br />
                <p className="text-white text-8xl shadow-trans">Weather</p>
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