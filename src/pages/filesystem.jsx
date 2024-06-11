import { useState } from "react";
import { supabase } from "../Supabase/supabase";

function Filesys(){
    const [fileName, setfileName] = useState("")
    const [Name, setName]  = useState("")
    const [file, setFile] = useState(null)
    const [retriveName, setRetrive] = useState("")
    const [retLink, setretLink] = useState("");

    const storage = async () => {
        const { error: insertError } = await supabase.from('files_sys').insert({name:Name,filename:fileName})
        const { error : uploadError} = await supabase.storage.from('files').upload(file.name, file)
            if (!insertError && !uploadError) {
            const displayEle = document.getElementById("Message");
            displayEle.innerText = 'Document Succesfully Uploaded!';
            }
        }
    
    const retrive = async () => {
        const { data: signedUrl, error } = await supabase.storage.from('files').createSignedUrl(retriveName, 60);
        if(!error){
            console.log("data downloaded");
            window.location.href=signedUrl['signedUrl'];
            setretLink(window.location.href);
            const promptMsg = document.getElementById("Message");
            promptMsg.innerText = "Document Retrived";
        }
    }

    return(
        <div className="poppins-bold">
        <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6 lg:opacity-100 opacity-0'>
        <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
        </div> 
        <p class="text-8xl font-normal pl-6 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
        <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="lg:h-10 lg:w-10 h-7 w-7 absolute lg:right-52 lg:top-14 lg:opacity-100 opacity-0" />
        <p className="text-center text-white lg:text-8xl text-4xl shadow-trans lg:pt-0 pt-2">Document Locker</p>
            <center>
                <div className="lg:h-100 sm:h-auto lg:w-72 sm:w-full bg-white bg-opacity-20 rounded-3xl lg:absolute lg:left-128 sm:left-4 lg:top-72 sm:top-20">
                    <br />
                    <input type="text" onChange={(e) => { setfileName(e.target.value) }} placeholder="File Description" className=" easer placeholder-black h-10 lg:w-64 sm:w-full rounded-3xl lg:mb-4 text-center border-2 border-black hover:shadow-2xl" /><br />
                    <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="User Name" className=" easer placeholder-black h-10 lg:w-64 sm:w-full rounded-3xl text-center lg:mb-4 t border-2 border-black hover:shadow-2xl" /> <br />
                    <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} className="text-white lg:mb-4 lg:pl-6 pl-14" /> <br /><br />
                    <button onClick={storage} className="h-10 w-32 bg-black text-white rounded-3xl border-2 border-white hover:text-black hover:bg-white easer">Upload</button>
                </div>
                <div className="lg:absolute lg:top-80 sm:top-40 lg:right-96 sm:right-4 lg:h-100 sm:h-auto lg:w-80 sm:w-full bg-white bg-opacity-20 rounded-3xl">
                    
                    <p className="text-white">Auto File Retrieval System</p><br />
                    <input type="text" onChange={(e) => { setRetrive(e.target.value) }} placeholder="Exact Filename with Extension" className="easer placeholder-black rounded-3xl text-center h-14 w-72 lg:w-72 sm:w-full border-2 border-black hover:shadow-2xl" />
                    <button onClick={retrive} className="h-10 w-32 bg-black text-white rounded-3xl border-2 lg:mt-2 border-white hover:text-black hover:bg-white easer">Retrieve</button>
                </div>
                <p className="lg:bottom-56 lg:left-224 lg:pl-4 pt-10 text-xl absolute bottom-64 left-24 lg:opacity-100 opacity-0 text-black" id="Message">No File Uploaded</p>
            </center>
        </div>
    )
}

export default Filesys