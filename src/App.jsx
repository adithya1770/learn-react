import { useState } from 'react'
import './App.css'
import { supabase }  from './Supabase/supabase'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import Weather from './pages/weather'
import Plants from './pages/plants'
import Transaction from './pages/transaction'
import News from './pages/news'
import Filesys from './pages/filesystem'
import Produce from './pages/produce';
import Docs from './pages/docs';
import Home from './pages/home';

function App() {

  const [feedBack, setfeedBack] = useState("");
  const [message, setMessage] = useState("")

    const sendFeed = async () => {
        const { error } = await supabase.from('feedback').insert({feed_back:feedBack})
        if (!error) {
          const msgEle = document.getElementById("Message1");
          msgEle.innerText = "Feedback Submitted!"
        }
    }

  return (
      <div class="h-screen w-screen bg-cover bg-center bg-no-repeat bg-custom poppins-bold">
        <div className='h-full w-full bg-white bg-opacity-20'>
        <div class="flex h-36 w-45 bg-custom1 bg-cover bg-no-repeat bg-opacity-50 p-4">
        </div>
        <div class="lg:h-10 sm:h-8 lg:w-auto sm:w-full bg-white">
            <a href="/produce"><span class="material-symbols-outlined lg:pl-24 pl-2 lg:pr-16 lg:text-4xl text-3xl hover:text-green-500">storefront</span></a>
            <a href="/login"><span class="material-symbols-outlined lg:pl-16 pl-2 ml-4 lg:pr-16  lg:text-4xl text-3xl hover:text-green-500">login</span></a>
            <a href="/weather"><span class="material-symbols-outlined lg:pl-16 pl-2 ml-4 lg:pr-16 lg:text-4xl text-3xl hover:text-green-500">cloud</span></a>
            <a href="/plants"><span class="material-symbols-outlined lg:pl-16 pl-2 ml-4 lg:pr-16 lg:text-4xl text-3xl hover:text-green-500">grass</span></a>
            <a href="/news"><span class="material-symbols-outlined  lg:pl-16 pl-1 ml-4 lg:pr-16 lg:text-4xl text-3xl hover:text-green-500">feed</span></a>
            <a href="/transaction"><span class="material-symbols-outlined lg:pl-16 ml-4 pl-1 lg:pr-16 lg:text-4xl text-3xl hover:text-green-500">paid</span></a>
            <a href="/filesystem"><span class="material-symbols-outlined lg:pl-16 pl-1 ml-4 lg:pr-16 s lg:text-4xl text-3xl hover:text-green-500">home_storage</span></a>
        </div>

        <div class="h-32 w-full bg-custom1 absolute bottom-0">
          <footer className='poppins-bold text-white absolute left-4'><br />
            <p><b> Adithya P S </b></p>
            <p>Contact me at:</p>
            <p><i>bytesadithya@gmail.com</i></p>
          </footer>
        </div>
        <div className="poppins-bold absolute bottom-5 pl-160">
                    <br /><input type="text" placeholder='Enter Feedback' class="text-black"  onChange={(e) => setfeedBack(e.target.value)} className='hover:shadow-2xl text-center placeholder-black h-10 w-64 rounded-full'/> <br />
                    <center><button onClick={sendFeed} className='pl-5 w-20 h-10 text-center text-xl text-white rounded-full'>Send!</button>
                    <p id="Message1" className='text-white' ></p></center>
            </div>
        <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/weather" element={<Weather />} />
          <Route path="/plants" element={<Plants />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/transaction" element={<Transaction />}/>
          <Route path="/filesystem" element={<Filesys />}/>
          <Route path="/produce" element={<Produce />}/>
          <Route path="/docs" element={<Docs />}/>
        </Routes>
        </div><br />
        <a href="/docs" className='absolute bottom-3 left-4 text-white'>Documentation [Click Here]</a>
        <div className='h-24 w-24 bg-white absolute lg:right-12 right-3 rounded-full lg:bottom-4 bottom-5'>
        <a href="https://github.com/adithya1770/learn-react"><img src="https://www.svgrepo.com/show/368145/social-github.svg" className='h-24 w-24 sticky lg:right-12 right-2 bottom-2'/></a>
        </div>
      </div>
      </div>
  )
}

export default App
