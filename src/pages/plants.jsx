import { useState } from "react";

function Plants(){
    const [plantName, setplantName] = useState("")
    const [scientificName, setscientificName] = useState(null)
    const [plantImage, setPlantImage] = useState(null)


    const plantData = async () => {
        const plant = await fetch("https://trefle.io/api/v1/plants?token=FyOBHT6SRBLG8hTsL12B3rqmnBPis2TgRgLHqdlVP7A");
        const dataBlock1 = await plant.json()
        for( let i=0; i<=19; i++){
          if(plantName == dataBlock1['data'][i]['common_name']){
            setscientificName(dataBlock1['data'][i]['scientific_name'])
            setPlantImage(dataBlock1['data'][i]['image_url'])
          }
        }
    }

    return(
        <div className="poppins-bold">
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
          <p className="absolute right-20 top-40">Beta Version v1.0A</p>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
            <center>
            <br /><p className="text-8xl text-white shadow-trans">HortiFind</p><br />
            <input type="text" id="plantName" name="plantName" className="placeholder-black rounded-3xl w-80 h-10 text-center" placeholder="Enter Plant Name" onChange={(e) => setplantName(e.target.value)}/>
            <button onClick={plantData} className="h-10 w-40 bg-black text-white rounded-3xl">Click</button>
            <div>
            <p className="text-white inline-block">Scientific Name is { scientificName }</p>
            <img src={ plantImage } class="w-50 h-60 inline-block pl-10 pt-5"/>
            </div>
          </center>
        </div>
    )

}

export default Plants