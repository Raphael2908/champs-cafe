import validator from 'validator';

export function bookingValidation(body) {
    let date = new Date(body.date_booked)
    let errorBag = {}

    const date_booked = validator.isDate(date)
    const email = validator.isEmail(body.email)
    const phone_num = validator.isMobilePhone(String(body.phone_num))

    if(date_booked == false){
        errorBag.date_booked = "Invalid date"
    }
    if(email == false){
        errorBag.email = "Invalid email"
    }
    if(phone_num == false){
        errorBag.phone_num = "Invalid Phone Number"
    }

    return {
        isValid: date_booked && email && phone_num,
        errorBag: errorBag
    }
}