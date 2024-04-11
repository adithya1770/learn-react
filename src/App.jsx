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
            console.log("succesfully logged in");
          }
          else{
            console.log("wrong credentials");
          }
        }
        
  }

  return (
      <div class="h-67 w-64 mx-auto bg-green-500 text-center rounded-2xl">
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
        <p>Welcome, {auser}</p> 
        <div>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
        </div>
        </div>
  )
}

export default App
