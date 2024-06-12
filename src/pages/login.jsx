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
      resp.innerText = "User signed up\t, Check e-Mail";
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
      <p class="text-8xl font-normal pl-6 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
  <div className='lg:h-24 lg:w-24 sm:h-16 sm:w-16 bg-white absolute lg:right-12 sm:right-6 rounded-2xl lg:top-6 sm:top-3 lg:opacity-100 opacity-0'>
    <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
  </div>
  <center>
    <div>
      <p className="lg:text-8xl text-5xl text-white shadow-trans lg:mt-0 mt-4">Accounts</p>
      <input className="placeholder-black lg:h-12 lg:w-96 h-8 w-64 rounded-3xl text-center lg:mt-5 mt-6 lg:text-3xl sm:text-xl border-2  easer border-black hover:shadow-2xl" type="text" required placeholder="User Name" onChange={(e) => setUser(e.target.value)} /> <br />
      <input className="placeholder-black lg:h-12 lg:w-96 h-8 w-64 rounded-3xl text-center lg:mt-3 mt-4 lg:text-3xl sm:text-xl border-2  easer border-black hover:shadow-2xl" type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
      <input className="placeholder-black lg:h-12 lg:w-96 h-8 w-64 rounded-3xl text-center lg:mt-3 mt-4 lg:text-3xl sm:text-xl border-2  easer border-black hover:shadow-2xl" type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
      <button className="bg-black lg:h-12 lg:w-36 h-8 w-24 text-white rounded-xl lg:mt-3 mt-10 lg:mr-2 lg:ml-2 mr-1 ml-1 easer lg:text-2xl text-xl border-2 border-white hover:text-black hover:bg-white" onClick={handleSignUp}>Sign Up</button>
      <button className="bg-black lg:h-12 lg:w-36 h-8 w-24 text-white rounded-xl lg:mt-4 mt-3 lg:mr-4 lg:ml-2 mr-2 ml-1 lg:text-2xl easer text-xl border-2 border-white hover:text-black hover:bg-white" onClick={handleSignIn}>Sign In</button>
      <button className="bg-black lg:h-12 lg:w-36 h-8 w-24 text-white rounded-xl lg:mt-4 mt-3 lg:mr-4 mr-2 lg:text-2xl text-xl easer border-2 border-white hover:text-black hover:bg-white" onClick={signOut}>Sign out</button> 
      <p id="AuthPck" className="lg:text-5xl anime italic absolute lg:top-96 top-128 shadow-xl text-4xl lg:right-10 right-16"></p>
      <p id="authResp" className="lg:text-4xl sm:text-2xl text-black lg:mt-5 sm:mt-3 italic pt-1"></p>
    </div> 
  </center>
</div>


  );
}

export default Login