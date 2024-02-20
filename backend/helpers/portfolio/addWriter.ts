import { createClient } from "@supabase/supabase-js";
import newID from "../../utils/newID";
import AUTH_KEY from "../../utils/codes";

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

export default addWriter