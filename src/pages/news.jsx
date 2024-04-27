import { useState } from "react";

function News(){
    const [newsTitle , setNewsTitle] = useState(null)
    const [newsLink , setNewsLink] = useState(null)
    const [newsImg , setNewsImage] = useState(null)

    const newsData = async () => {
        const newsdata = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=723e5c7c20c9473085b57c52196d02f7")
        const news = await newsdata.json()
        for(let i=0;i<=1;i++){
          var newsTitle = news['articles'][i]['title']
          var newsLink = news['articles'][i]['url']
          var newsImg = news['articles'][i]['urlToImage']
          setNewsTitle(newsTitle)
          setNewsLink(newsLink)
          setNewsImage(newsImg)
        }
    }

    return(
        <center>
        <div className="poppins-bold">
          <br /><p className="text-8xl text-white">News</p><br />
          <p className="text-white text-4xl"><i>{newsTitle}</i></p><br />
          <span><a href={newsLink} className="pr-10 text-white">Link to Article</a></span>
          <a href={newsImg} className="pr-10 text-white">Click here for Image</a>
          <button onClick={newsData} className="text-white text-2xl h-10 w-40 bg-black rounded-3xl">Get News!</button>
        </div>
        </center>
    )
}


export default News