import { useState } from "react";

function Docs(){
    return(
        <div>
            <div className='h-24 w-24 bg-white absolute right-12 rounded-2xl top-6'>
            <a href="/"><img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png" className='sticky h-24 w-24 top-3 right-5'/></a>
            </div>
            <p className="absolute lg:right-40 text-white lg:top-24 lg:opacity-100 opacity-0">Beta Version v1.0A</p>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute lg:right-52 lg:top-14" />
            <h1 className="text-8xl absolute left-96">Documentation</h1>
            <div className="absolute top-72 left-96 h-124 w-192 rounded-xl bg-opacity-50 bg-white">
            <p>&#10159; Sometimes <strong className="pl-2 pr-2">Transaction Details</strong> may not be visible due to Database errors. </p><br />
            <p>&#10159; <strong className="pr-2">Authenticity</strong>of News is not guaranteed.</p><br />
            <p>&#10159; <strong className="pr-2">Excessive Record Retrival </strong>may lead to issues.</p><br />
            <p>&#10159; Functions are still under <strong className="pl-2 pr-2">Testing</strong>. May not function properly.</p><br />
            <p>&#10159; Best viewed on <strong className="pl-2">PC or Laptop (widescreen devices)</strong> not phones.</p><br />
            <p>&#10159; Any errors report to <strong className="pr-2 pl-2"><i>bytesadithya@gmail.com</i></strong></p><br />
            <p>&#10159; Select unique username and <strong className="pl-2">self-troubleshoot using inspect element.</strong></p>
            </div>
        </div>
    )
}

export default Docs