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
            <center>
            <br /><p>Agricultre</p>
            Enter Plant Name :<input type="text" id="plantName" name="plantName" onChange={(e) => setplantName(e.target.value)}/>
            <p>{ scientificName }</p>
            <img src={ plantImage } class="w-32 h-40"/>
            <button onClick={plantData}>Click</button>
            </center>
        </div>
    )

}

export default Plants