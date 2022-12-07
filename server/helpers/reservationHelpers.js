import validator from 'validator';

function isValidName(name){
    let nameError = {}
    
    if(!name){
        nameError.isValid = false
        nameError.errorMessage = "Please enter your name"
        return nameError
    }
    return true
}


function isValidPhoneNumber(phoneNum){
    let phoneNumError = {}
    
    if(!phoneNum){
        phoneNumError.isValid = false
        phoneNumError.errorMessage = "Please enter your phone number"
        return phoneNumError
    }
    else if(validator.isMobilePhone(String(phoneNum)) == false){
        phoneNumError.isValid = false
        phoneNumError.errorMessage = "Invalid Phone Number"
        return phoneNumError
    }
    return true
}

function isValidEmail(email){
    let emailError = {}
    
    if(!email){
        emailError.isValid = false
        emailError.errorMessage = "Please enter your email"
        return emailError
    }
    else if(validator.isEmail(email) == false){
        emailError.isValid = false
        emailError.errorMessage = "Invalid Email"
        return emailError
    }
    return true
}

function isValidDate(date){
    let dateError = {}
    
    if(!date){
        dateError.isValid = false
        dateError.errorMessage = "Please enter the date you want to reserve"
        return dateError
    }
    else if(validator.isDate(new Date(date)) == false){
        dateError.isValid = false
        dateError.errorMessage = "Invalid date"
        return dateError
    }
    return true
}

export function reservationValidation(body) {
    let errorBag = {}

    const validName = isValidName(body.name)
    const validPhoneNumber = isValidPhoneNumber(body.phone_num)
    const validEmail = isValidEmail(body.email)
    const validDate = isValidDate(body.date_booked)

    if(validName != true){
        errorBag.name = validName.errorMessage
    }

    if(validEmail != true){
        errorBag.email = validEmail.errorMessage
    }

    if(validPhoneNumber != true){
        errorBag.phone_num = validPhoneNumber.errorMessage
    }

    if(validDate != true){
        errorBag.date_booked = validDate.errorMessage
    }

    return {
        isValid: validName == true && validPhoneNumber == true && validEmail == true && validDate == true,
        errorBag: errorBag
    }
}