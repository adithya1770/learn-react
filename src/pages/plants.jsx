import { useState } from "react";
import resource from "./resource.json"

function Plants(){
    const [plantName, setplantName] = useState("")
    const [scientificName, setscientificName] = useState(null)
    const [plantImage, setPlantImage] = useState(null)
    const [details, setPlantDetails] = useState("");


    const plantData = async () => {
      for(let i=0;i<=20;i++){
        if(plantName===resource.query[i].name){
          setPlantImage(resource.query[i].thumbnail_url);
          setscientificName(resource.query[i].scientific_name)
          setPlantDetails(resource.query[i].description)
        }
      }
  }

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
          <p className="absolute right-20 top-40">Beta Version v1.0A</p>
          <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
            <center>
            <br /><p className="text-8xl text-white shadow-trans">HortiFind</p><br />
            <input type="text" id="plantName" name="plantName" className="placeholder-black rounded-3xl w-80 h-10 text-center" placeholder="Enter Plant Name" onChange={(e) => setplantName(e.target.value)}/>
            <button onClick={plantData} className="h-10 w-40 bg-black text-white rounded-3xl">Click</button>
            <div className="h-48 w-224 bg-white mt-5 rounded-xl bg-opacity-95 shadow-lg shadow-black">
            <p className="inline-block text-black absolute italic font-bold underline pl-20">{ scientificName }</p>
            <p className="text-black inline-block absolute bottom-44 w-160 right-80">{ details }</p>
            <img src={ plantImage } class="mt-4 mr-4 w-64 h-40 absolute contrast-200"/>
            </div>
          </center>
        </div>
    )

}

export default Plants