import React, { useState } from 'react'
import { supabase } from '../src/Supabase/supabase'

function Home(){

    const [feedBack, setfeedBack] = useState("")

    const sendFeed = async () => {
        const { error } = await supabase.from('feedback').insert({feed_back:feedBack})
        if (!error) {
          console.log("data inserted successfully")
        }
    }

    const styler1 = {
        color : "White",
        backgroundColor : "darkGreen",
        borderRadius : "5px"
    }

    return (
        <div class="h-40 w-60 absolute left-40 top-40 border-2" style={styler1}>
            <center>
                    <p>FEEDBACK</p> <br />
                    Enter your Feedback : <input type="text" placeholder='enter feedback' class="text-black"  onChange={(e) => setfeedBack(e.target.value)}/> <br />
                    <br />
                    <button onClick={sendFeed}>Send!</button>
            </center>
        </div>
    )
}

export default Home