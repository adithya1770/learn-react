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
    

    const downloadProd = async () => {
        const { data , error } = await supabase.from('produce').select('*')
        if(!error){
            console.log("Great Success!")
        }
        setDat(data)
        const seller = dat.map(item => item.sellername).join("\n");
        const produce = dat.map(item => item.producename).join("\n");
        const cost = dat.map(item => item.cost).join("\n");
        const quantity = dat.map(item => item.quantity_kgs).join("\n");
        const infoBlob = new Blob([seller, produce, cost, quantity], { type: 'text/plain' });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(infoBlob);
        element.download = "RetrivedMarketInfo.txt";
        element.click();
        const msg = document.getElementById("msg");
        msg.innerText = "File Downloaded";

    }
    

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-6 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
            <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
            <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6 lg:opacity-100 opacity-0'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute lg:right-52 lg:top-14 lg:opacity-100 opacity-0" />
            <p className="lg:text-8xl text-white shadow-trans lg:pl-5 text-5xl pl-10">MarketPlace</p>
            <div className="lg:pl-10"><br />
            <input type="text" placeholder="Produce Name" onChange={(e) => {setproduceName(e.target.value)}} className="placeholder-black lg:w-64 w-80 ml-7 lg:h-10 text-2xl rounded-3xl text-center border-2 border-black hover:shadow-2xl"/><br /><br />
            <input type="text" placeholder="Produce Cost" onChange={(e) => {setproduceCost(e.target.value)}} className="placeholder-black lg:w-64 w-80 ml-7 lg:h-10 text-2xl rounded-3xl text-center border-2 border-black hover:shadow-2xl"/><br /><br />
            <input type="text" placeholder="Seller Name" onChange={(e) => {setsellerName(e.target.value)}} className="placeholder-black lg:w-64 w-80 ml-7 lg:h-10 text-2xl rounded-3xl text-center border-2 border-black hover:shadow-2xl" /><br /><br />
            <input type="text" placeholder="Quantity (Kgs)" onChange={(e) => {setquantity(e.target.value)}} className="placeholder-black lg:w-64 w-80 ml-7 lg:h-10 text-2xl rounded-3xl text-center border-2 border-black hover:shadow-2xl"/><br /><br />
            <button onClick={prod} className="text-3xl bg-black lg:h-10 lg:w-64 text-white rounded-3xl text-center absolute lg:left-80 lg:top-80 left-32 border-2 border-white hover:text-black hover:bg-white w-48">Publish</button><br />
            </div><br />
            <button onClick={downloadProd} className="text-3xl bg-black lg:h-10 lg:w-64 text-white rounded-3xl text-center absolute lg:left-80 lg:top-96 top-100 left-20 border-2 border-white hover:text-black hover:bg-white w-64">View Details</button>
            <div className="lg:absolute lg:right-20 lg:h-96 lg:top-52 lg:w-160 text-center bg-white rounded-3xl bg-opacity-70">
            <p className="text-center lg:absolute lg:top-20 lg:left-1 lg:text-yellow-50 lg:text-6xl lg:w-full mt-20 text-black" id="Message">Data will be visible here</p>
            </div>
        </div>
    )
}

export default Produce