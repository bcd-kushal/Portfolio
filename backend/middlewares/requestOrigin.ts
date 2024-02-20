
const requestOrigin = (req,res,next) => {
    const FULL_URL = req.body.visiting_url
    console.log(`----> request arrived from: ${FULL_URL}`)
    next()
}

export default requestOrigin