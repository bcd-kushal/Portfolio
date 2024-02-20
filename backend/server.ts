// auth keys ===================================================
import dotenv from "dotenv";
dotenv.config();

const AUTH_KEY = {
    SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "",
    TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "",
    USER_ID: process.env.EMAILJS_USER_ID || "",
    NAME: process.env.EMAILJS_MY_NAME || "",

    PORT: process.env.PORT,
    SERVER_NAME: process.env.SERVER_NAME || "",

    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_KEY: process.env.SUPABASE_KEY || "",

    API: process.env.API || "",

    TARGET_CLIENT_URL: process.env.TARGET_URL || ""
}


// errors ======================================================
const ERROR_CODES = {
    SYNTAX_ERROR: { status: false, err: "syntax error" }
};


// new ID ======================================================
import { v4 } from "uuid";

function newID(pre:string){

    if(pre.length<=0 || pre===undefined || pre==="")
        return ERROR_CODES.SYNTAX_ERROR;
    
    pre = (pre.length == 2)? pre : ( (pre.length < 2)? pre+"x" : pre.substring(0,2) );
    
    // Get individual components
    let day = new Date().getDate().toString().padStart(2, '0');
    let month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    let year = new Date().getFullYear().toString();
    let hours = new Date().getHours().toString().padStart(2, '0');
    let minutes = new Date().getMinutes().toString().padStart(2, '0');
    let seconds = new Date().getSeconds().toString().padStart(2, '0');
    let milliseconds = new Date().getMilliseconds().toString().padStart(3, '0');

    const uid = v4();

    // day = 10,12
    // month = 16,18
    // year = 22,24
    // hours = 28,30
    // mins = 34,36
    // secs = 40,42
    // millis = 46,...

    const time = `${day}-${month}-${year},${hours}:${minutes}:${seconds}:${milliseconds}`;
    const id = pre + uid.substring(0,8) + day + uid.substring(9,13) + month + uid.substring(14,18) + year + uid.substring(19,23) + hours + uid.substring(24,28) + minutes + uid.substring(28,32) + seconds + uid.substring(32,36) + milliseconds;
       //      01    23456789             01    2345                  67      8901                   23     4567                   89      0123                   45        6789                   01        2345                   678
       //      0                          1                                     2                                                          3                                                       4                                
    
    
    return { id: id, time: time };
    
} 


// initialization ==============================================
import express, { json } from "express"
import { Express } from "express"
import cors from "cors"

const app:Express = express()
const PORT:Number = parseInt(AUTH_KEY.PORT) || 3010
const SERVER_NAME:String = AUTH_KEY.SERVER_NAME || "Node Server"


// middlewares =================================================
const checkReferer = (req,res,next) => {
    const ALLOWED_SITE = AUTH_KEY.TARGET_CLIENT_URL
    const VISITING_URL = req.body.visiting_url || ""

    if (req.method.toLowerCase()==="post" && VISITING_URL===ALLOWED_SITE) {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
}

const requestOrigin = (req,res,next) => {
    console.log(`----> request arrived from: ${req.body.visiting_url || ""}`)
    next()
}

app.use(cors())
app.use(json())
app.use(requestOrigin)
app.use(checkReferer)


// write supabase ==============================================
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(AUTH_KEY.SUPABASE_URL, AUTH_KEY.SUPABASE_KEY)

const addWriter = async ( writerData:object ) => {
    const name = writerData.name || "___no_name___"
    const email = writerData.email || "___no_email___"
    const message = writerData.message || "___no_message___"

    if(email==="___no_email___")
        return { success: false, data: "required field: email does not exist" }

    const { data, err } = await supabase
        .from('portfolio-mails')
        .insert([{
            id: newID("pm").id,
            name: name,
            email: email,
            message: message
        }])
        .select()

    
    if( err ){
        console.log(`Error while adding data to supabase database: ${err}`)
        return { success: false, data: `Error while adding data to db:\n${err}` }
    }

    return { success: true, data: data }
}


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
                    service_id: AUTH_KEY.SERVICE_ID,
                    template_id: AUTH_KEY.TEMPLATE_ID,
                    user_id: AUTH_KEY.USER_ID,
                    name: AUTH_KEY.NAME,
                    api: AUTH_KEY.API
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
