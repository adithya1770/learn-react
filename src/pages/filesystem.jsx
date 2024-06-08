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
        <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6'>
        <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
        </div> 
        <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
        <p className="absolute right-20 top-40">Beta Version v1.0A</p>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
        <p className="text-center text-white text-8xl shadow-trans">Document Locker</p>
            <center>
                <div className="h-100 w-64 bg-white bg-opacity-20 rounded-3xl absolute left-128 top-72">
                <br />
                <input type="text" onChange={(e) => {setfileName(e.target.value)}} placeholder="File Description" className="placeholder-black h-10 w-64 rounded-3xl text-center border-2 border-black hover:shadow-2xl"/><br/><br />
                <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder="User Name"  className="placeholder-black h-10 w-64 rounded-3xl text-center border-2 border-black hover:shadow-2xl"/> <br /><br />
                <input type="file" onChange={(e) => {setFile(e.target.files[0])}} className="text-white"/> <br /><br />
                <button onClick={storage} className="h-10 w-32 bg-black text-white rounded-3xl border-2 border-white hover:text-black hover:bg-white">Upload</button>
                </div>
                <div className="absolute top-80 right-96 h-100 w-80 bg-white bg-opacity-20 rounded-3xl "><br />
                    <p className="text-white">Auto File Retrival System</p><br />
                    <input type="text" onChange={(e) => {setRetrive(e.target.value)}} placeholder="Exact Filename with Extension" className="placeholder-black rounded-3xl text-center h-10 w-72 border-2 border-black hover:shadow-2xl" /> <br /><br />
                    <button onClick={retrive} className="h-10 w-32 bg-black text-white rounded-3xl border-2 border-white hover:text-black hover:bg-white">Retrive</button>
                </div>
                <p className="absolute bottom-48 right-96 h-10 w-80 pt-2 text-xl bg-black text-white rounded-full text-center " id="Message">No File Uploaded</p>
            </center>
        </div>
    )
}

export default Filesys