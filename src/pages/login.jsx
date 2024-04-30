import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Login(){
    const [user, setUser] = useState("");
    const [psw, setPsw] = useState("");
    const [auser, setaUser] = useState("");
    const [apsw, setaPsw] = useState("");

    const credUpload = async () => {    
        const { error } = await supabase.from('user_details').insert({username:user,password:psw})
            if (!error) {
              if (!error) {
                const displayEle = document.getElementById("Message");
                displayEle.innerText = 'Account Created Succesfully!';
              }
            }
      }
    
    const authUpload = async () => {
        const { data, error } = await supabase
            .from('user_details')
            .select('*')
            for(let i in data){
              if(auser === data[i].username && apsw === data[i].password){
                const displayEle = document.getElementById("Message");
                displayEle.innerText = 'Succesfully Logged In!';
              }
              else{
                console.log("wrong credentials");
              }
            }
            
      }

    return(
        <div className="poppins-bold">
          <center>
            <br />
                <div  class="inline-block">
                <p className="text-8xl text-white shadow-trans">Sign Up</p><br />
                <input placeholder="Enter your User" class="placeholder-black rounded-xl h-10 w-90 text-center" type="text" name="user" id="user" onChange={(e) => {setUser(e.target.value)}}/>
                <br /><br />
                <input type="password" placeholder="Enter your Password" class="placeholder-black h-10 w-90 rounded-xl text-center" name="psw" id="psw" onChange={(e) => {setPsw(e.target.value)}}/>
                <br /><br />
                <button onClick={credUpload} class="bg-black text-white rounded-3xl h-10 w-32">Sign UP</button>
                </div>
                <div class="inline-block pl-32 h-100 w-100">
                  <br />
                <p className="text-8xl text-white shadow-trans">Log In</p><br />
                <input type="text" placeholder="Enter your User" class="placeholder-black h-10 w-90 rounded-xl text-center" name="auser" id="auser" onChange={(e) => {setaUser(e.target.value)}}/>
                <br /><br />
                <input placeholder="Enter your Password" class="placeholder-black h-10 w-90 rounded-xl text-center" type="password" name="apsw" id="apsw" onChange={(e) => {setaPsw(e.target.value)}}/>
                <br /><br />
                <button onClick={authUpload} class="bg-black h-10 w-32 text-white rounded-3xl">Log IN</button>
                </div>
            <p class="absolute top-36 right-10 font-extrabold italic text-2xl">Welcome {auser}</p> 
          </center>
          <p className="absolute bottom-36 left-128 text-5xl text-white rounded-full text-center" id="Message"></p>
        </div>
    )


}

export default Login