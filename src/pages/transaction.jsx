import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Transaction(){
    const [transaction, setTransaction] = useState("")
    const [Date, setDate] = useState("")
    const [accNum , setaccNum] = useState();
    const [accNumber, setaccNumber] = useState();
    const [transDet, settransDet] = useState([]);
    const [vals, setVals] = useState("");

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
        const msg = document.getElementById("msg");
        msg.innerText = "Details Retrived and File Generated";
      }
    }

    const downloadInfo = () => {
        const transData = transDet.map(item => item.trans_id).join("\n");
        const transAcc = transDet.map(item => item.account).join("\n");
        const transDate = transDet.map(item => item.date).join("\n");
        const transPrice = transDet.map(item => item.price).join("\n");
        const infoBlob = new Blob([transData, transAcc, transDate, transPrice], { type: 'text/plain' });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(infoBlob);
        element.download = "RetrivedTransactionDetails.txt";
        element.click();
        const msg = document.getElementById("msg");
        msg.innerText = "File Downloaded";

    }

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased pl-6">Farmy</p>
          <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
          <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6 lg:opacity-100 opacity-0'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute lg:right-52 lg:top-14 lg:opacity-100 opacity-0" />
          <center><br />
          <p className="text-white lg:text-8xl text-5xl shadow-trans">Transaction</p><br />
            <center>
                <input type="text" placeholder="Price" className="placeholder-black lg:w-64 sm:w-full h-10 lg:mb-4 mb-1 lg:text-2xl sm:text-xl rounded-3xl text-center border-2 border-black hover:shadow-2xl" onChange={(e) => { setTransaction(e.target.value) }} /> <br />
                <input type="phone" placeholder="Account Number" className="placeholder-black lg:w-64 sm:w-full h-10 lg:text-2xl sm:text-xl rounded-3xl text-center border-2 border-black hover:shadow-2xl" onChange={(e) => { setaccNum(e.target.value) }} /> <br />
                <input type="date" className="placeholder-black lg:w-64 sm:w-full lg:mt-4 mt-1 h-10 rounded-3xl text-center lg:text-2xl sm:text-xl border-2 border-black hover:shadow-2xl" onChange={(e) => { setDate(e.target.value) }} /> <br />
                <button onClick={tranSact} className="bg-black  lg:mt-4 mt-1 h-10 w-32 text-white rounded-3xl border-2 border-white hover:text-black hover:bg-white">Record</button>
            </center>
            <br />
            <div className="lg:h-100 h-auto lg:w-96 w-full bg-black lg:bg-opacity-100 bg-opacity-15 text-white absolute lg:top-52 top-100 lg:left-2 left-0 text-sm rounded-3xl lg:p-4 p-0">
                <center>
                    <p>Account Transaction Detail Retriever System</p><br />
                    <input type="text" placeholder="Account Number" className="placeholder-black text-black lg:w-64 sm:w-full h-10 lg:text-2xl sm:text-xl rounded-3xl text-center" onChange={(e) => { setaccNumber(e.target.value) }} /> <br /><br />
                    <button onClick={detail} className="bg-black h-8 w-32 text-white lg:text-xl sm:text-lg rounded-3xl border-2 border-white hover:text-black hover:bg-white">Retrieve</button>
                    <button onClick={downloadInfo} className="bg-black h-8 w-32 text-white lg:text-xl sm:text-lg rounded-3xl border-2 border-white hover:text-black hover:bg-white">Download</button>
                    <p id="msg" className="lg:text-2xl sm:text-xl mt-2"></p>
                </center>
            </div>
            <p className="absolute lg:bottom-34 sm:bottom-10 lg:right-128 sm:right-4 text-3xl text-white rounded-full text-center" id="Message"></p>
      </center>
      </div>
    )
}


export default Transaction