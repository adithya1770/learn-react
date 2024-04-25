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
          <br /><p>News</p>
          <p>{newsTitle}</p>
          <a href={newsLink}>Link to Article</a><br />
          <a href={newsImg}>Click here for Image</a><br />
          <button onClick={newsData}>Click</button>
        </div>
        </center>
    )
}


export default News