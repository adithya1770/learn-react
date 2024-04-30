import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Transaction(){
    const [transaction, setTransaction] = useState("")
    const [Date, setDate] = useState("")
    const [accNum , setaccNum] = useState();
    const [accNumber, setaccNumber] = useState();
    const [transDet, settransDet] = useState([]);


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
        const { error } = await supabase.from('transactions').insert({trans_id:randStr,price:transaction,account:accNum,date:Date})
            if (!error) {
              const displayEle = document.getElementById("Message");
              displayEle.innerText = 'Details Succesfully Uploaded!';
            }
            else{
              console.log("no such record")
            }
    }


    const detail = async () => {
      const { data, error } = await supabase.from('transactions').select('*').eq('account', accNumber)
      if(!error){
        settransDet(data);
      }
    }

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
          <p className="absolute right-20 top-40">Beta Version v1.0A</p>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
          <center><br />
          <p className="text-white text-8xl shadow-trans">Transaction</p><br />
          <input type="text" placeholder="Price" className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center" onChange={(e)=>{setTransaction(e.target.value)}} /> <br /><br />
          <input type="phone" placeholder="Account Number" className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center" onChange={(e)=>{setaccNum(e.target.value)}} /> <br /><br />
          <input type="date" className="placeholder-black w-64 h-10 rounded-3xl text-center text-2xl" onChange={(e)=>{setDate(e.target.value)}}/> <br /><br />
          <button onClick={tranSact} class="bg-black h-10 w-32 text-white rounded-3xl">Record</button>
          </center>
          <div className="h-100 w-96 bg-black text-white absolute top-52 left-2 text-sm rounded-3xl ">
            <center>
              <br />
              <p>Account Transaction Detail Retriver System</p><br /><br />
          <input type="text" placeholder="Account Number" className="placeholder-black text-black w-64 h-10 text-2xl rounded-3xl text-center" onChange={(e)=>{setaccNumber(e.target.value)}} /> <br /><br />
            <button onClick={detail} className="bg-black h-8 w-32 text-white text-xl rounded-3xl">Retrive</button>
            {transDet.map((detail) => (
              <div>
                <hr />
              <p className="inline-block">|Transaction ID : {detail.trans_id} |</p>
              <p className="inline-block">Price : {detail.price}|</p>
              <p className="inline-block">A/C Number : {detail.account}|</p>
              <p>|Date of Transaction : {detail.date}|</p>
              </div>
            ))}
            </center>
          </div>
          <p className="absolute bottom-30 left-128 text-3xl text-white rounded-full text-center" id="Message"></p>
        </div>
    )
}


export default Transaction