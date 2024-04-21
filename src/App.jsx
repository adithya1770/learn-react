import { useState } from 'react'
import './App.css'
import { supabase }  from './Supabase/supabase'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/contact'

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
  const [transaction, setTransaction] = useState("")
  const [Date, setDate] = useState("")

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

  const tranSact = async () => {
    const alphaStr = 'abcdefghijklmnopqrstuvwxyz';
    const numericStr = '1234567890';
    const splChar = '!@#$%^&*<>-~,.';
    let randStr = '';
    const randomStr = Math.floor(Math.random() * 20) + 1;
    const randomInt = Math.floor(Math.random() * 7) + 1;
    const randomChar = Math.floor(Math.random() * 10) + 1;
    randStr = alphaStr[randomStr]+alphaStr[randomStr+1]+numericStr[randomInt]+splChar[randomChar];
    console.log(randStr)
    const { error } = await supabase.from('transactions').insert({price:transaction,date:Date,trans_id:randStr})
        if (!error) {
          console.log("data inserted successfully")
        }
    }

  const newsData = async () => {
    const newsdata = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=723e5c7c20c9473085b57c52196d02f7")
    const news = await newsdata.json()
    for(let i=0;i<=1;i++){
      var newsTitle = news['articles'][i]['title']
      var newsLink = news['articles'][i]['url']
      var newsImg = news['articles'][i]['urlToImage']
      setNewsTitle(newsTitle)
      setNewsLink(newsLink)
      setNewsImage(newsImg)
    }
     
  }

  return (
      <div class="h-screen w-screen bg-cover bg-center bg-no-repeat bg-custom">
        <div>
        <div class="flex h-32 w-45 bg-slate-500">
          <p class="text-left text-8xl font-thin">Farmy</p>
          <div class="h-32 w-64 absolute right-80 top-10 inline-flex justify-around">
            <a href="/home" class="font-serif font-extrabold text-3xl pr-5">Feedback</a>
            <a href="/contact" class="font-serif font-extrabold text-3xl"> Contact</a>
            <p class="absolute top-10 font-extrabold font-mono italic">Welcome, {auser}</p>
          </div>
        </div>
        </div>
        <center>
        <div class="h-55 w-80 bg-slate-900 rounded-xl absolute left-256 top-40 border-2 text-yellow-400">
            <br /><p class="font-extrabold">Weather</p>
            <p>TEMPERATURE - {tempData}C</p>
            <p>HUMIDITY - {humidityData}%</p>
            <p>WINDSPEED - {windData}Kmph</p>
            <button onClick={weatherData}>Click</button>
        </div>
        </center>
        <center>
        <div class="h-96 w-64 bg-slate-900 rounded-xl absolute left-160 top-60 border-2 text-yellow-400">
            <br /><p class="font-extrabold">Agricultre</p>
            Enter Plant Name :<input type="text" id="plantName" name="plantName" onChange={(e) => setplantName(e.target.value)} />
            <p>{ scientificName }</p>
            <img src={ plantImage } class="w-32 h-40"/>
            <button onClick={plantData}>Click</button>
        </div>
        </center>
        <center>
        <div class="bg-slate-900 rounded-xl h-64 w-80 absolute top-96 left-40 border-2 text-yellow-400">
          <br /><p class="font-extrabold">News</p>
          <p>{newsTitle}</p>
          <a href={newsLink}>Link to Article</a><br />
          <a href={newsImg}>Click here for Image</a><br />
          <button onClick={newsData}>Click</button>
        </div>
        </center>
        <div class="bg-slate-900 rounded-xl h-85 w-96 absolute top-80 left-256 border-2 text-yellow-400">
          <center>
          <p>Transaction Deatails</p>
          Enter your Price: <input type="text" class="" onChange={(e)=>{setTransaction(e.target.value)}} /> <br />
          Enter Date of Transaction: <input type="date" onChange={(e)=>{setDate(e.target.value)}}/> <br />
          <button onClick={tranSact} class="bg-black text-white rounded-3xl">Record</button>
          <p>Sign Up</p>
        Enter Your User<input type="text" name="user" id="user" onChange={(e) => {setUser(e.target.value)}}/>
        <br />
        Enter Your Password<input type="text" name="psw" id="psw" onChange={(e) => {setPsw(e.target.value)}}/>
        <br />
        <button onClick={credUpload} class="bg-black text-white rounded-3xl">Sign UP</button>
        <p>Log IN</p>
        Enter Your User<input type="text" name="auser" id="auser" onChange={(e) => {setaUser(e.target.value)}}/>
        <br />
        Enter Your Password<input type="text" name="apsw" id="apsw" onChange={(e) => {setaPsw(e.target.value)}}/>
        <br />
        <button onClick={authUpload} class="bg-black text-white rounded-3xl">Log IN</button>
          </center>
        </div>
        <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact /
          >}/>
        </Routes>
        </div>
        </div>
  )
}

export default App
