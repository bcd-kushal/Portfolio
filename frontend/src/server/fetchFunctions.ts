const X_API_KEY = process.env.X_API_KEY || ""
const BACKEND = process.env.BACKEND || ""

// ============ INBOX ====================================
export const addSubscription = ({ email }: { email: string }) => {
    const url = `${BACKEND}/inbox/subscription/add`
    fetch(url, {
        headers: {
            "Content-type": "application/json",
            "x-api-key": X_API_KEY
        },
        body: JSON.stringify({ email }),
        method: "POST"
    })
}

export const addMessage = ({ name, link, message }: { name: string, link: string, message: string }) => {
    const url = `${BACKEND}/inbox/message/add`
    fetch(url, {
        headers: {
            "Content-type": "application/json",
            "x-api-key": X_API_KEY
        },
        body: JSON.stringify({ name, link, message }),
        method: "POST"
    })
}