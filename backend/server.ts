
/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                AUTH KEYS SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/
import dotenv from "dotenv"
dotenv.config()

const AUTH_KEY = {
    SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "",
    TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "",
    USER_ID: process.env.EMAILJS_USER_ID || "",
    NAME: process.env.EMAILJS_MY_NAME || "",

    PORT: process.env.PORT || 3001,
    SERVER_NAME: process.env.SERVER_NAME || "",

    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_KEY: process.env.SUPABASE_KEY || "",

    API: process.env.API || "",
}







/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                UTILITIES SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/

// errors ======================================================
const checkIsObject =   (x:any) => { return(Object.prototype.toString.call(x)==='[object Object]'?true:false)}
const checkIsArray =    (x:any) => { return(Object.prototype.toString.call(x)==='[object Array]'?true:false)}



// errors ======================================================
const ERROR_CODES = {
    SYNTAX_ERROR: { status: false, err: "syntax error" }
};


// date and time ======================================================
function getAspect({w,h}:{w:number,h:number}) {
    const aspect = w/h
    const gcd = (a:number, b:number):number => { return b === 0 ? a : gcd(b, a % b) }
    const divisor = gcd(w, h)
    const numerator = w / divisor
    const denominator = h / divisor
    return `${numerator}:${denominator}`
}


// date and time ======================================================
function getTimeDate() {
    const fixSpacing = (n:number) => { return n.toString().length===1? '0'+String(n) : String(n) }
    const time = new Date()
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return(`[${fixSpacing(time.getDate())}-${MONTHS[time.getMonth()]},${fixSpacing(time.getHours())}:${fixSpacing(time.getMinutes())}:${fixSpacing(time.getSeconds())}]`)
}


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

    const time = `${day}-${month}-${year},${hours}:${minutes}:${seconds}:${milliseconds}`
    const id = pre + uid.substring(0,8) + day + uid.substring(9,13) + month + uid.substring(14,18) + year + uid.substring(19,23) + hours + uid.substring(24,28) + minutes + uid.substring(28,32) + seconds + uid.substring(32,36) + milliseconds
       //      01    23456789             01    2345                  67      8901                   23     4567                   89      0123                   45        6789                   01        2345                   678
       //      0                          1                                     2                                                          3                                                       4                                
    
    
    return { id: id, time: time, status: true }
    
} 






/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                INITIALIZATION SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/
import express, { NextFunction, Request, Response, json } from "express"
import { Express } from "express"
import cors from "cors"

const app:Express = express()
const PORT:Number = parseInt(String(AUTH_KEY.PORT))
const SERVER_NAME:String = AUTH_KEY.SERVER_NAME || "Node Server"







/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                MIDDLEWARES SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/
const checkOrigin = (req:Request, res:Response, next:NextFunction) => {

    const ALLOWED_SITES = [ "https://portfolio.kushalkumarsaha.com/", "https://kushalkumarsaha.com/", "https://services.kushalkumarsaha.com/" ]
    const SERVER_URL = req.protocol + '://' + req.get('host') + req.originalUrl

    // GET -------------
    if (req.method.toLowerCase()==="get") {
        return next()
    } 

    // POST ------------
    else if (req.method.toLowerCase()==="post") {

        try{
            if(req.body.origin) {
                const origin = req.body.origin 
        
                // check protocol
                if(!origin.protocol || !['https:'].includes(origin.protocol))
                    return res.status(403).json({error:'forbidden, unsafe environment'})
            
                // check href and origin
                if(origin.href!==origin.origin+'/' || !ALLOWED_SITES.includes(origin.href) || origin.host.length<=0 || origin.origin.indexOf(origin.host)<=-1)
                    return res.status(403).json({error:'forbidden, unauthorized access'})

                return next()
            }
            else 
                return res.status(403).json({error:"'origin' not defined"})
        }
        catch {
            return res.status(403).json({error:"'origin' not defined"})
        }
        
    }

    // rest ------------
    else {
        return res.status(403).send('Forbidden. Unauthorized access.')
    }
}

const logOrigin = (req:Request, res:Response, next:NextFunction) => {
    const timestamp = getTimeDate()
    try {
        if(req.method.toLowerCase()==='get')
            console.log(`--> ${timestamp} /GET:: ${req.url}`)
        else if(req.method.toLowerCase()==='post' && req.body.origin)
            console.log(`--> ${timestamp} /POST:: ${req.body.origin.href || req.url}`)
    }
    catch {
        console.log(`--> ${timestamp} /${req.method.toUpperCase()}: __unknown_origin`)
    }
    return next()
}

app.use(json())
app.use(cors())
app.use(checkOrigin)
app.use(logOrigin)








/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                SUPABASE SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(AUTH_KEY.SUPABASE_URL, AUTH_KEY.SUPABASE_KEY)

// /portfolio/contact-me ------------------------------------------------------
interface addWriterProps { name:string, email:string, message:string }
const addWriter = async ( props:addWriterProps ) => {
    const name = props.name || "___no_name___"
    const email = props.email || "___no_email___"
    const message = props.message || "___no_message___"

    if(email==="___no_email___")
        return { success: false, data: "required field: email does not exist" }

    const new_id = newID("pm")
    const clean_id = ('id' in new_id) ? new_id.id : null

    const { data, error } = await supabase
        .from('portfolio-mails')
        .insert([{
            id: clean_id,
            name: name,
            email: email,
            message: message
        }])
        .select()

    
    if( error ){
        console.log(`--> ${getTimeDate()} /ERR: Insert writer from portfolio to database failed = ${error}`)
        return { success: false, data: `Error while adding data to db:\n${error}` }
    }

    return { success: true, data: data }
}

// /user-traffic/portfolio ------------------------------------------------------
interface GeoProps { country:any, regionName:any, city:any, zip:any, lat:any, lon:any, org:any }
interface LocationProps { ip:string }
interface NetworkProps { maxBandwidth:any, networkType:any, latency:any }
interface DeviceProps { platform:any, height:any, width:any, isMobile:any, cpu_cores:any, browser:any, architecture:any, model:any, battery: { percentage:any, charging:any, willDischargeAfter:any, willFullyChargeAfter:any } }
interface savePortfolioTrafficProps { geo:GeoProps, location:LocationProps, time:string, network:NetworkProps, device:DeviceProps }
const savePortfolioTraffic = async ( props:savePortfolioTrafficProps ) => {
    const new_id = newID("tp")
    const clean_id = ('id' in new_id) ? new_id.id : null

    const newTrafficData = {
        id:         clean_id,
        date:       (props.time.substring(1,7) + "-" + String(new Date().getFullYear())).replace('-',' '),
        time:       props.time.substring(8,16),
        ipv4:       props.location.ip,
        ipv6:       null,
        country:    props.geo.country,
        region:     props.geo.regionName,
        city:       props.geo.city,
        zip:        props.geo.zip,
        lat:        props.geo.lat,
        lon:        props.geo.lon,
        org:        props.geo.org,
        max_bandwidth: props.network.maxBandwidth,
        network:    props.network.networkType,
        latency:    props.network.latency,
        platform:   props.device.platform,
        height:     props.device.height,
        width:      props.device.width,
        aspect:     getAspect({w:props.device.width,h:props.device.height}),
        is_mobile:  props.device.isMobile,
        cpu_cores:  props.device.cpu_cores,
        browser:    props.device.browser[(props.device.browser.length-1)],
        battery:    props.device.battery.percentage,
        charging:   props.device.battery.charging,
        total_charge_after: props.device.battery.willFullyChargeAfter,
        total_discharge_after: props.device.battery.willDischargeAfter,
        architecture: props.device.architecture,
        model:      props.device.model
    }

    const { data, error } = await supabase 
        .from('traffic-portfolio')
        .insert([ newTrafficData ])
        .select()
    
    if( error ){
        console.log(`--> ${getTimeDate()} /ERR: Insert traffic to database failed = ${error}`)
        return { success: false, data: `Error while adding data to db:\n${error}` }
    }
    return { success: true, data: data }
}






/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                REQUEST LISTENING SPACE
    *****************************************************************************************************************************
    ******************************************************************************************************************************/

// GET/-------------
app.get("/", cors(), (req,res) => {
    res.status(200).json({
        error: "Kushal Kumar's server unauthorized access...",
        visit: {
            official: "https://kushalkumarsaha.com/",
            portfolio: "https://portfolio.kushalkumarsaha.com/",
            github: "https://github.com/bcd-kushal/"
        }, 
        request_type: req.method
    })

    console.log(req.query)
})



// POST/-------------
app.post("/portfolio/contact-me", cors(), async (req,res) => {
    let name = "", email = "", message = ""
    try { name = req.body.name }        catch {}
    try { email = req.body.email }      catch {}
    try { message = req.body.message }  catch {}

    const supaResponse = await addWriter({ name: name, email: email, message: message })

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
})


import axios from 'axios'

app.post("/user-traffic/portfolio", cors(), async (req,res) => {
    let origin = {}, spatial = {}, location = {}, device = {}, network = {}, geo = null, time = getTimeDate()

    try { location  = req.body.location?req.body.location : null }  catch {}
    try { network   = req.body.network? req.body.network : null }   catch {}
    try { device    = req.body.device?  req.body.device : null }    catch {}
    try { spatial   = req.body.spatial? req.body.spatial : null }   catch {}
    try { origin    = req.body.origin?  req.body.origin : null }    catch {}

    // get geolocation data
    if(checkIsObject(location)) {
        const GEOLOCATION_PROVIDING_API = "http://ip-api.com/json/"
        const URI = GEOLOCATION_PROVIDING_API + (('ip' in location) ? location.ip : "")

        const geoPromise = await axios({ url: URI, method: "GET" })
        geo = geoPromise.data
    }

    // get device specs data
    /* ------ work to be done here ------------------ */

    // save to supabase
    const dbAddResponse = await savePortfolioTraffic({
        location: location,
        device: device,
        network: network,
        geo: geo,
        time: time
        // spatial: spatial,
    })
    if(!dbAddResponse.success)
        console.log(`--> ${time} /ERR: Error while adding traffic-data to database`)
})

app.post("*", cors(), async (req,res) => {
    res.status(404).json({ error:"NOT FOUND. INVALID ROUTE."})
})






/*  *****************************************************************************************************************************
    *****************************************************************************************************************************
                                                PORT RUN SERVER
    *****************************************************************************************************************************
    ******************************************************************************************************************************/
app.listen(PORT,()=>{ console.log(`${SERVER_NAME} listening on PORT:${PORT}`)})
