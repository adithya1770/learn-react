import express from "express";
import cors from "cors";
const app = express();
app.use(cors())

app.get("/", async (req, res)=>{
    const Data = await fetch("https://trefle.io/api/v1/plants?token=FyOBHT6SRBLG8hTsL12B3rqmnBPis2TgRgLHqdlVP7A")
    const realData = await Data.json()
    res.send(realData)
})

app.listen(3000);