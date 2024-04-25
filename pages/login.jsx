import { useState } from "react";
import { supabase } from "../src/Supabase/supabase";

function Login(){
    const [user, setUser] = useState("");
    const [psw, setPsw] = useState("");
    const [auser, setaUser] = useState("");
    const [apsw, setaPsw] = useState("");

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

    return(
        <div>
          <div class="h-128 w-64 border-2">
          <center>
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
        <p class="absolute top-1 left-160 font-extrabold font-mono italic">Welcome, {auser}</p> 
        </center>
        </div>
        </div>
    )


}

export default Login