import { useState } from 'react'
import './App.css'
import { supabase }  from './Supabase/supabase'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'

function App() {
  const [user, setUser] = useState("")
  const [psw, setPsw] = useState("")
  const [auser, setaUser] = useState("")
  const [apsw, setaPsw] = useState("")
  const [tempData, setTempData] = useState(null)
  const [humidityData, setHumidityData] = useState(null)
  const [windData, setWindData] = useState(null)
  const [plantName, setplantName] = useState("")
  const [scientificName, setscientificName] = useState(null)
  const [plantImage, setPlantImage] = useState(null)
  const [newsTitle , setNewsTitle] = useState(null)
  const [newsLink , setNewsLink] = useState(null)
  const [newsImg , setNewsImage] = useState(null)

  const credUpload = async () => {    
    const { error } = await supabase.from('user_details').insert({username:user,password:psw})
        if (!error) {
          console.log("data inserted successfully")
        }
  }

  const authUpload = async () => {
    const { data, error } = await supabase
        .from('user_details')
        .select('*')
        for(let i in data){
          if(auser === data[i].username && apsw === data[i].password){
            // use document.write or dom element to insert text
            document.write("succesfully logged in");
          }
          else{
            console.log("wrong credentials");
          }
        }
        
  }

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

  const plantData = async () => {
    const plant = await fetch("https://trefle.io/api/v1/plants?token=FyOBHT6SRBLG8hTsL12B3rqmnBPis2TgRgLHqdlVP7A");
    const dataBlock1 = await plant.json()
    for( let i=0; i<=19; i++){
      if(plantName == dataBlock1['data'][i]['common_name']){
        setscientificName(dataBlock1['data'][i]['scientific_name'])
        setPlantImage(dataBlock1['data'][i]['image_url'])
      }
    }
  }


  const newsData = async () => {
    const newsdata = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=723e5c7c20c9473085b57c52196d02f7")
    const news = await newsdata.json()
    for(let i=0;i<=9;i++){
      var newsTitle = news['articles'][i]['title']
      var newsLink = news['articles'][i]['url']
      var newsImg = news['articles'][i]['urlToImage']
      setNewsTitle(newsTitle)
      setNewsLink(newsLink)
      setNewsImage(newsImg)
    }

  }
  return (
      <div class="h-screen w-screen bg-black">
        <div>
        <div class="flex h-32 w-45 bg-slate-500">
          <p class="text-left text-8xl font-thin">Farmy</p>
        </div>
        </div>
        <center>
        <div class="h-64 w-64 bg-slate-900 rounded-xl absolute left-20 top-60">
            <p>Weather</p>
            <p>{tempData}</p>
            <p>{humidityData}</p>
            <p>{windData}</p>
            <button onClick={weatherData}>Click</button>
        </div>
        </center>
        <center>
        <div class="h-64 w-64 bg-slate-900 rounded-xl absolute right-20 top-60">
            <p>Agricultre</p>
            Enter Plant Name :<input type="text" id="plantName" name="plantName" onChange={(e) => setplantName(e.target.value)} />
            <p>{ scientificName }</p>
            <img src={ plantImage } />
            <button onClick={plantData}>Click</button>
        </div>
        </center>
        <center>
        <div class="bg-slate-900 rounded-xl h-64 w-80 relative top-40">
          <p>News</p>
          <p>{newsTitle}</p>
          <a href={newsLink}>Link to Article</a><br />
          <a href={newsImg}>Click here for Image</a><br />
          <button onClick={newsData}>Click</button>
        </div>
        </center>
        <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
        </div>
        </div>
  )
}

export default App
