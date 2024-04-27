import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Transaction(){
    const [transaction, setTransaction] = useState("")
    const [Date, setDate] = useState("")


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

    return(
        <div className="poppins-bold">
          <center><br />
          <p className="text-white text-8xl">Transaction</p><br />
          <input type="text" placeholder="Price" className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center" onChange={(e)=>{setTransaction(e.target.value)}} /> <br /><br />
          <input type="date" className="placeholder-black w-64 h-10 rounded-3xl text-center text-2xl" onChange={(e)=>{setDate(e.target.value)}}/> <br /><br />
          <button onClick={tranSact} class="bg-black h-10 w-32 text-white rounded-3xl">Record</button>
          </center>
        </div>
    )
}


export default Transaction