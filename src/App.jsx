import { useState } from 'react'
import './App.css'
import { supabase }  from './Supabase/supabase'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import Weather from './pages/weather'
import Plants from './pages/plants'
import Transaction from './pages/transaction'
import News from './pages/news'

function App() {

  const [feedBack, setfeedBack] = useState("")

    const sendFeed = async () => {
        const { error } = await supabase.from('feedback').insert({feed_back:feedBack})
        if (!error) {
          console.log("data inserted successfully")
        }
    }

  return (
      <div class="h-screen w-screen bg-cover bg-center bg-no-repeat bg-custom">
        <div class="flex h-36 w-45 bg-custom1 bg-opacity-80 p-4">
          <center>
          <p class="text-8xl font-normal pl-160 tracking-wide italic text-white poppins-bold">farmy</p>
          </center>
        </div>
        <div class="h-10 w-auto bg-white">
            <a href="/login"><span class="material-symbols-outlined pl-16 pr-16 text-4xl hover:text-green-500">login</span></a>
            <a href="/weather"><span class="material-symbols-outlined pl-16 pr-16 text-4xl hover:text-green-500">cloud</span></a>
            <a href="/plants"><span class="material-symbols-outlined pl-16 pr-16 text-4xl hover:text-green-500">grass</span></a>
            <a href="/news"><span class="material-symbols-outlined pl-16 pr-16 text-4xl hover:text-green-500">feed</span></a>
            <a href="/transaction"><span class="material-symbols-outlined pl-16 pr-16 text-4xl hover:text-green-500">paid</span></a>
        </div>
        <div class="h-32 w-full bg-green-600 absolute bottom-0">

          <center>
          <footer className='poppins-bold'>
            <p><b>| Adithya P S |</b></p>
            <p>Contact me at:</p>
            <p><i>bytesadithya@gmail.com</i></p>
            <div className="poppins-bold">
            <center>
                    Enter your Feedback  <br /><input type="text" placeholder='enter feedback' class="text-black"  onChange={(e) => setfeedBack(e.target.value)}/> 
                    <button onClick={sendFeed} className='pl-5 w-20 h-6 bg-black text-white'>Send!</button>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-github-online-project-hosting-website-logo-46235.png" href="https://github.com/adithya1770/learn-react" className='h-20 w-20 absolute left-10 bottom-1'/>
            </center>
        </div>
          </footer>
          </center>
        </div>
        <div>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/weather" element={<Weather />} />
          <Route path="/plants" element={<Plants />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/transaction" element={<Transaction />}/>
        </Routes>
        </div>
      </div>
  )
}

export default App
