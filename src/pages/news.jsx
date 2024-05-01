import { useState, useEffect } from "react";
import axios from "axios";

function News(){
    const [newsTitle, setNewsTitle] = useState(null)
    const [newsLink , setNewsLink] = useState(null)
    const [newsImg , setNewsImage] = useState(null)

    const newsData = async () => {
        const newsdata = await axios.get("https://api.thenewsapi.com/v1/news/top?api_token=zBaMNZbNofgnCa6ccBgvmYxwXBnEmyZGL2wKxm4E&locale=us&limit=3")
        const randEle = Math.ceil(Math.random()*4)
        var newsTitle = newsdata['data']['data'][randEle]['title'];
        var newsLink = newsdata['data']['data'][randEle]['url'];
        var newsImg = newsdata['data']['data'][randEle]['image_url'];
        setNewsTitle(newsTitle);
        setNewsLink(newsLink);
        setNewsImage(newsImg);
    }

    return(
        <center>
          <p class="text-8xl font-normal pl-10 tracking-wide text-white poppins-bold absolute top-4 antialiased">Farmy</p>
          <p className="absolute right-20 top-40">Beta Version v1.0A</p>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732090.png" alt="https://w7.pngwing.com/pngs/1022/900/png-transparent-open-opensource-source-logos-and-brands-line-filled-icon.png" className="h-10 w-10 absolute right-5 top-36" />
        <div className="poppins-bold">
          <br /><p className="text-8xl text-white shadow-trans">News</p><br />
          <p className="text-white text-4xl"><i>{newsTitle}</i></p><br />
          <span><a href={newsLink} className="pr-10 text-white">Link to Article</a></span>
          <a href={newsImg} className="pr-10 text-white">Click here for Image</a>
          <button onClick={newsData} className="text-white text-2xl h-10 w-40 bg-black rounded-3xl">Get News!</button>
        </div>
        <p className="absolute bottom-44 left-128 text-3xl text-white shadow-trans">Click on  <i className="pl-2 pr-2"><strong>Get News</strong></i>to Refresh News!</p>
        </center>
    )
}


export default News