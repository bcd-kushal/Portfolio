import express, { json } from "express"
import { Express } from "express"
import cors from "cors"
import dotenv from "dotenv"

import AUTH_KEY from "./utils/codes"
import checkReferer from "./middlewares/checkURL"
import requestOrigin from "./middlewares/requestOrigin"
import addWriter from "./helpers/portfolio/addWriter"
dotenv.config()

const app:Express = express()
const PORT:Number = parseInt(AUTH_KEY.PORT) || 3010
const SERVER_NAME:String = AUTH_KEY.SERVER_NAME || "Node Server"

app.use(cors())
app.use(json())
app.use(requestOrigin)
app.use(checkReferer)


// requests listen corner ======================================
app.get("/", (req,res) => {
    res.status(200).json({
        data: {
            err: "I received your request, but GET isn't intended to run here..."
        },
        request_type: req.method
    })

    console.log(req.query)
})


app.post("/", async (req,res) => {

    const supaResponse = await addWriter({ 
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message 
    })

    if(supaResponse.success){
        res.status(200).json({
            data: {
                msg: "POST data received successfully",
                codes: {
                    // auth codes sent here, imported from AUTH_KEYS
                }
            }
        })
    }
    else{
        res.status(203).json({
            data: {
                msg: "POST data received successfully",
                err: "Server failed at database handling event"
            }
        })
    }

    console.log(req.body)
})



// listen to client ============================================
app.listen(PORT,()=>{ console.log(`${SERVER_NAME} listening on PORT:${PORT}`)})
