const FORM = document.getElementById("portfolio-contact-form");
const RESET_TIME = 5000;
const resetField = ( element ) => {
    setTimeout(() => {
        element.innerHTML = "";
        element.style.background = "transparent";
    }, RESET_TIME );
}

// ===[ FORM AUTHENTICITY ]==============================================================
const NAME_FIELD = document.getElementById("name");
const EMAIL_FIELD = document.getElementById("email");
const MESSAGE_FIELD = document.getElementById("message");

const ERROR_NAME_FIELD = document.getElementById("error-name");
const ERROR_EMAIL_FIELD = document.getElementById("error-email");
const ERROR_MESSAGE_FIELD = document.getElementById("error-message");
const ERROR_TOTAL_FIELD = document.getElementById("error-total");

let ALLOWED_TO_SUBMIT_FORM = false;
let VALID_NAME = true;
let VALID_EMAIL = false;
let VALID_MESSAGE = true;

const evaluateFormAuthnticity = () => { 
    ALLOWED_TO_SUBMIT_FORM = VALID_NAME & VALID_EMAIL & VALID_MESSAGE;
    ERROR_TOTAL_FIELD.style.background = "transparent";
    ERROR_TOTAL_FIELD.innerHTML = "";
}

NAME_FIELD.addEventListener("keyup", () => {
    const curr_name = NAME_FIELD.value;
    const regex = /^[a-zA-Z\s'-]*$/;

    if(regex.test(curr_name)){
        ERROR_NAME_FIELD.innerHTML = "";
        VALID_NAME = true;
    }
    else{
        ERROR_NAME_FIELD.innerHTML = "Invalid name syntax";
        VALID_NAME = false;
    }
    evaluateFormAuthnticity();
});

EMAIL_FIELD.addEventListener("keyup", () => {
    const curr_email = EMAIL_FIELD.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(regex.test(curr_email) && curr_email[curr_email.indexOf('@')-1]!=='.' && curr_email[curr_email.indexOf('@')-1]!=='-'){
        ERROR_EMAIL_FIELD.innerHTML = "";
        VALID_EMAIL = true;
    }
    else{
        ERROR_EMAIL_FIELD.innerHTML = "Incomplete or malformed email";
        VALID_EMAIL = false;
    }
    evaluateFormAuthnticity();
});



// ===[ BACKEND HANDLING + EMAILING ]==============================================================

FORM.addEventListener("submit", async function (e) {
    e.preventDefault();


    if(!ALLOWED_TO_SUBMIT_FORM){
        ERROR_TOTAL_FIELD.style.background = "var(--accent20)";
        ERROR_TOTAL_FIELD.innerHTML = "Invalid inputs... cant submit";
        resetField(ERROR_TOTAL_FIELD);
        return;
    }
    else{
        ERROR_TOTAL_FIELD.style.background = "transparent";
        ERROR_TOTAL_FIELD.innerHTML = "";
    }
    

    const form_name = document.getElementById("name").value;
    const form_mail = document.getElementById("email").value;
    const form_msg  = document.getElementById("message").value;


    // set the form back to reset firstly --------------->>
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // listen to backend --------------------------------->>
    let response = await fetch("https://kushal-server.up.railway.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: form_name,
            email: form_mail,
            message: form_msg,
            visiting_url: window.location.href,
        }),
    });

    // email to writer then ------------------------------>>
    if (response.ok) {
        const text = await response.text();
        const CREDS = JSON.parse(text).data.codes;

        // create form to send email data
        const form = new FormData(FORM);
        var formData = new FormData();
        formData.append("service_id", CREDS.service_id);
        formData.append("template_id", CREDS.template_id);
        formData.append("user_id", CREDS.user_id);
        formData.append("my_name", CREDS.name);
        formData.append("writers_name", form_name);
        formData.append("writers_email", form_mail);

        const sendTypes = {
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
        };

        $.ajax(CREDS.api, sendTypes)
            .done(() => { 
                ERROR_TOTAL_FIELD.style.background = "var(--green20)";
                ERROR_TOTAL_FIELD.style.color = "var(--green)";
                ERROR_TOTAL_FIELD.innerHTML = "Thanks for the response!"; 
                resetField(ERROR_TOTAL_FIELD); 
            })
            .fail((err) => {
                ERROR_TOTAL_FIELD.style.background = "var(--error20)";
                ERROR_TOTAL_FIELD.style.color = "var(--error)";
                ERROR_TOTAL_FIELD.innerHTML = "There was an error parsing this request"; 
                resetField(ERROR_TOTAL_FIELD); 
            });

    }
    else{
        ERROR_TOTAL_FIELD.style.background = "var(--error20)";
        ERROR_TOTAL_FIELD.style.color = "var(--error)";
        ERROR_TOTAL_FIELD.innerHTML = "Faulty server... Please try later"; 
        resetField(ERROR_TOTAL_FIELD); 
    }

});
