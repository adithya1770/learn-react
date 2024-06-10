import { useState } from "react";
import resource from "./resource.json"

function Plants(){
    const [plantName, setplantName] = useState("")
    const [scientificName, setscientificName] = useState(null)
    const [plantImage, setPlantImage] = useState(null)
    const [details, setPlantDetails] = useState("");



    const plantData = async () => {
      for(let i=0;i<=99;i++){
        if(plantName===resource.query[i].name){
          setPlantImage(resource.query[i].thumbnail_url);
          setscientificName(resource.query[i].scientific_name)
          setPlantDetails(resource.query[i].description)
        }
      }
    }

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-6 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
          <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
          <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6 lg:opacity-100 opacity-0'>
              <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute lg:right-52 lg:top-14 lg:opacity-100 opacity-0" />
        <div className="container mx-auto px-4">
        <p className="text-white lg:text-8xl text-6xl shadow-trans text-center">HortiFind</p>
        <div className="flex flex-col items-center mt-4">
          <input
            type="text"
            id="plantName"
            name="plantName"
            className="placeholder-black  easer rounded-3xl lg:w-80 w-full lg:h-10 h-8 text-center border-2 border-black hover:shadow-2xl mb-4"
            placeholder="Enter Plant Name"
            onChange={(e) => setplantName(e.target.value)}
          />
          <button
            onClick={plantData}
            className="lg:h-10 h-20 lg:w-40 w-20 easer bg-black text-white rounded-3xl border-2 border-white hover:text-black hover:bg-white mt-4 lg:mt-0"
          >
            Find
          </button>
          <div className="absolute bottom-32 lg:bottom-12 lg:right-160 text-white text-3xl">
          <a href="./src/pages/plantNames.txt" download="Detailsaboutplants.txt">
           Plant Details
          </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5 bg-white bg-opacity-95 rounded-xl shadow-lg shadow-black p-4 w-full h-44 overflow-y-scroll lg:overflow-hidden lg:h-44 lg:w-196">
          <div className="lg:flex-1 lg:pl-52">
            <p className="text-black italic font-bold underline lg:pl-20 sm:pl-4">{scientificName}</p>
            <p className="text-black lg:mt-2 sm:mt-4">{details}</p>
          </div>
          <div className="lg:flex-1 lg:pl-4 lg:mt-0 sm:mt-4">
            <img src={plantImage} className="lg:w-64 sm:w-full lg:h-40 sm:h-auto contrast-200" />
          </div>
        </div>
      </div>
      </div>
    )

}

export default Plants