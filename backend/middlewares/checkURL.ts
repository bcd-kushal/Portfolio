import AUTH_KEY from "../utils/codes"


const checkReferer = (req,res,next) => {
    const ALLOWED_SITE = AUTH_KEY.TARGET_CLIENT_URL
    const FULL_URL = req.body.visiting_url

    if (FULL_URL===ALLOWED_SITE) {
        next()
    } else {
        console.log("\nmiddleware detected dirty URL: ", FULL_URL)
        res.status(403).send('Forbidden')
    }
}

export default checkReferer