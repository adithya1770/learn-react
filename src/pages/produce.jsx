import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Produce(){

    const [produceName, setproduceName] = useState("");
    const [produceCost, setproduceCost] = useState("");
    const [sellerName, setsellerName] = useState("");
    const [quantity, setquantity] = useState();
    const [dat , setDat] = useState([]);

    const prod = async () => {
        const { error } = await supabase.from('produce').insert({producename:produceName,sellername:sellerName,cost:produceCost,quantity_kgs:quantity})
            if (!error) {
                const displayEle = document.getElementById("Message");
                displayEle.innerText = 'Stock Succesfully Uploaded!';
            }
        }
    
    
    const view = async () => {
        const { data , error } = await supabase.from('produce').select('*')
        if(!error){
            console.log("Great Success!")
        }
        setDat(data)
    }
    

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
            <p className="absolute right-20 top-40">Beta Version v1.0A</p>
            <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
            <p className="text-8xl text-white shadow-trans pl-5">MarketPlace</p>
            <div className="pl-10"><br />
            <input type="text" placeholder="Produce Name" onChange={(e) => {setproduceName(e.target.value)}} className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center"/> <br /><br />
            <input type="text" placeholder="Produce Cost" onChange={(e) => {setproduceCost(e.target.value)}} className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center"/> <br /><br />
            <input type="text" placeholder="Seller Name" onChange={(e) => {setsellerName(e.target.value)}} className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center" /> <br /><br />
            <input type="text" placeholder="Quantity (Kgs)" onChange={(e) => {setquantity(e.target.value)}} className="placeholder-black w-64 h-10 text-2xl rounded-3xl text-center"/> <br /><br />
            <button onClick={prod} className="text-3xl bg-black h-10 w-64 text-white rounded-3xl text-center absolute left-80 top-80">Publish</button><br />
            </div><br />
            <button onClick={view} className="text-3xl bg-black h-10 w-64 text-white rounded-3xl text-center absolute left-80 top-96">View Details</button>
            <div className="absolute right-20 h-96 top-52 w-160 text-center bg-white rounded-3xl bg-opacity-70">
            <p className="text-center absolute top-40 left-1 text-yellow-50 text-6xl">Data will be visible here</p>
            {dat.map((dataify) => (
                <div className="relative z-20">
                    <p>Commodity : {dataify.producename}</p>
                    <p>Seller : {dataify.sellername}</p>
                    <p>Cost : {dataify.cost}</p>
                    <p>Quantity : {dataify.quantity_kgs}</p>
                    <hr />
                </div>
            ))}
            </div>
            <p className="absolute bottom-52 left-80 text-3xl text-white rounded-full text-center" id="Message"></p>
        </div>
    )
}

export default Produce