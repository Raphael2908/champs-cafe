import axios from "axios";

const config = useRuntimeConfig()

const sendMsg = async function(body) { 
    let message = `Hi Sir ${body.name}, has contacted you from champs cafe. 
    \n His/Her contacts are: 
    \n email: ${body.email}
    \n phone number: ${body.phone_number}
    \n This is what ${body.name} has to say:
    \n "${body.message}"`
    
    return axios.post(`https://api.telegram.org/bot${config.reinhardt}/sendMessage`, {
        chat_id: config.chatId,
        text: message
    }).then((event) => {
        return 'success'
    }).catch(function (error) {
        return error
    });
}

const validEmail = function(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const validator = function(body){
    let errorBag = {}
    
    if(body.name == ''){
        errorBag.name = 'Please enter a name'
    }
    if(validEmail(body.email) == null){
        errorBag.email = 'Please enter a valid email'
    }
    if(body.message == ''){
        errorBag.message = 'Please enter a message'
    }

    return errorBag
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    // Validate
    const errorBag = validator(body)
    if(errorBag.name || errorBag.email || errorBag.message){
        return errorBag
    }
    else{
        // Send Message
        return await sendMsg(body)
    }
})

