import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(0);

  const handleSignUp = async () => {
    const { session, error } = await supabase.auth.signUp({ email, password });
    if (error){
      const resp = document.getElementById("authResp");
      resp.innerText = "Error signing up\t";
      console.error('Error signing up:', error.message);
    } 
    else{
      const { error } = await supabase.from('user_details').insert({ username: user, password: password })
      const resp = document.getElementById("authResp");
      resp.innerText = "User signed up\t";
      console.log('User signed up:', user);
    }
  };

  const handleSignIn = async () => {
    const { session, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error){
      console.error('Error signing in:', error.message);
      const authCred = document.getElementById("AuthResp");
      authCred.innerText = "Error signing in";
    }
    else{
      const { error } = await supabase.from('logger').insert({ username: user})
      if(error){
        console.log("Developer Issue")
      }
      console.log('User signed in:', user);
      const authCred = document.getElementById("AuthPck");
      authCred.innerText = "Welcome\t"+user;
      setLoggedIn(1);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      const authCred = document.getElementById("authResp");
      authCred.innerText = 'Error signing out';
      console.error('Error signing out:', error.message);
    } else {
      if(loggedIn === 1){
        const authCred = document.getElementById("authResp");
        authCred.innerText = 'User signed out successfully';
        console.log('User signed out successfully');
      }
      else{
        const authCred = document.getElementById("authResp");
        authCred.innerText = 'User not logged in';
        console.log('User not logged in');
      }
    }
  };


  return (
    <div>
      <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6'>
      <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
      </div>
      <center>
      <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
      <div>
      <p className="text-8xl text-white shadow-trans">Accounts</p>
      <input className="placeholder-black h-12 w-96 rounded-3xl text-center mt-5 text-3xl border-2 border-black hover:shadow-2xl" type="text" required placeholder="User Name" onChange={(e) => setUser(e.target.value)} /> <br />
      <input className="placeholder-black h-12 w-96 rounded-3xl text-center mt-3 text-3xl border-2 border-black hover:shadow-2xl" type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
      <input className="placeholder-black h-12 w-96 rounded-3xl text-center mt-3 text-3xl border-2 border-black hover:shadow-2xl" type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
      <button className="bg-black h-12 w-36 text-white rounded-xl mt-3 mr-2 ml-2 text-2xl border-2 border-white hover:text-black hover:bg-white" onClick={handleSignUp}>Sign Up</button>
      <button className="bg-black h-12 w-36 text-white rounded-xl mt-4 mr-4 ml-2 text-2xl border-2 border-white hover:text-black hover:bg-white" onClick={handleSignIn}>Sign In</button>
      <button className="bg-black h-12 w-36 text-white rounded-xl mt-4 mr-4 text-2xl border-2 border-white hover:text-black hover:bg-white" onClick={signOut}>Sign out</button> 
      <p id="AuthPck" className="text-3xl text-black italic absolute top-36 right-10"></p>
      <p id="authResp" className="text-4xl text-black mt-5 italic pt-1"></p>
      </div> 
      </center>
    </div>
  );
}

export default Login