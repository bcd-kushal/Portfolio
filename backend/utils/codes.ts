import dotenv from "dotenv";
dotenv.config();

const AUTH_KEY = {
    SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "",
    TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "",
    USER_ID: process.env.EMAILJS_USER_ID || "",
    NAME: process.env.EMAILJS_MY_NAME || "",
    TARGET_CLIENT_URL: process.env.TARGET_URL || "",

    CLIENT_URL: process.env.SITE_URL || "",

    PORT: process.env.PORT,
    SERVER_NAME: process.env.SERVER_NAME || "",

    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_KEY: process.env.SUPABASE_KEY || ""
}

export default AUTH_KEY;