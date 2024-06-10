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
            <p class="text-8xl font-normal pl-6 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
            <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
            <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6 lg:opacity-100 opacity-0'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute lg:right-52 lg:top-14 lg:opacity-100 opacity-0" />
                <center><br />
                <p className="text-white lg:text-8xl text-6xl shadow-trans">Weather</p>
                <br />
                <p className="text-white lg:text-4xl text-2xl">TEMPERATURE - {tempData}C</p>
                <p className="text-white lg:text-4xl text-2xl">HUMIDITY - {humidityData}%</p>
                <p className="text-white lg:text-4xl text-2xl">WINDSPEED - {windData}Kmph</p>
                <br />
                <button onClick={weatherData} className="easer text-white text-2xl h-10 w-40 bg-black rounded-3xl border-2 border-white hover:text-black hover:bg-white">Generate</button>
                </center>
        </div>
    )
}

export default Weather