import './fonts.css';
import Login from './login';
import { useState } from 'react';
import { supabase } from '../Supabase/supabase';

function Home(){

    const [feedBack, setfeedBack] = useState("");

    const sendFeed = async () => {
        const { error } = await supabase.from('feedback').insert({feed_back:feedBack})
        if (!error) {
          const msgEle = document.getElementById("Message1");
          msgEle.innerText = "Feedback Submitted!"
        }
    }

    return(
        <div>
        <div className="poppins-bold absolute lg:bottom-5 lg:pl-160 pl-6 bottom-64">
                    <br /><input type="text" placeholder='Enter Feedback' class="text-black"  onChange={(e) => setfeedBack(e.target.value)} className='hover:shadow-2xl text-center placeholder-black h-10 w-64 rounded-full'/> <br />
                    <center><button onClick={sendFeed} className='lg:pl-2 lg:w-20 lg:h-10 text-center lg:text-xl text-white rounded-full'>Send!</button>
                    <p id="Message1" className='text-white' ></p></center>
        </div>
        <div className='h-24 w-24 bg-white absolute lg:left-170 rounded-2xl top-6 left-32 '>
        <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky lg:h-24 lg:w-24 lg:top-3 lg:right-5'/></a>
        </div>
            <p className="fonter animated-text absolute lg:text-10xl lg:left-128 lg:top-64 top-80 left-6 text-8xl">Farmy</p>
        </div>
    )
}

export default Home


