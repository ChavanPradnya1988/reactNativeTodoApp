

import {
    checkEmail,
    checkMobileNumber,
    checkNull,
    validatePassword,
    checkMinLength,
    checkNumber,
    checkDigitNumber,
    checkPassword
} from './validator'


export default validator = (name, value, validationObject, isrequired = false, value2 = "") => {
    let errorMessage = ""
    if (isrequired) {
        switch (name) {
            case "categories": {
                errorMessage = checkNull(value, 'Select your category')
                break;
            }
            case "termsAccepted": {
                errorMessage = checkNull(value, '*Please agree to all the terms and conditions by checking the box')
                break;
            }
            default:
                errorMessage = checkNull(value)
        }

    }
    if (!errorMessage)
        switch (name) {
            case "firstName": {
                errorMessage = ""
                break;
            }
            case "lastName": {
                break;
            }
            case "prefix": {
                break;
            }
            case "gender": {
                break;
            }
            case "phone": {
                errorMessage = checkMobileNumber(value)
                break;
            }
            case "email": {
                errorMessage = checkEmail(value)
                break;
            }
            case "city": {
                break;
            }
            case "address": {
                break;
            }
            case "postalCode": {
                errorMessage = checkDigitNumber(value)
                if (errorMessage === "" || errorMessage === undefined)
                    errorMessage = checkMinLength(value, 6, "Postal Code must be at least 6 characters")

                break;
            }
            case "country": {
                break;
            }
            case "dob": {
                break;
            }
            case "height": {
                errorMessage = checkNumber(value)
                break;
            }
            case "heightUnit": {
                break;
            }
            case "weight": {
                errorMessage = checkNumber(value)
                break;
            }
            case "weightUnit": {
                break;
            }
            case "fitnessGoal": {
                break;
            }
            case "lifestyle": {
                break;
            }
            case "workoutWeek": {
                break;
            }
            case "workoutMin": {
                break;
            }
            case "termsAccepted": {
                break;
            }
            case "userId": {
                break;
            }
            case "createdBy": {
                break;
            }
            case "photoDefault": {
                break;
            }
            case "invitationCode": {
                errorMessage = checkMinLength(value, 6, "Invitation Code must be at least 6 characters")
                break;
            }
            case "password": {
                errorMessage = validatePassword(value)
                break;
            }
            case "duration": {
                errorMessage = checkDigitNumber(value)
                break;
            }
            case "sessions": {
                errorMessage = checkDigitNumber(value)
                break;
            }
            case "price": {
                errorMessage = checkNumber(value)
                break;
            }
            case "confirmPassword": {
                errorMessage = checkPassword(value, value2)
                break;
            }
            case "devicedPredicted": {
                errorMessage = checkDigitNumber(value)
                break;
            }
            case "noOfClientServed": {
                errorMessage = checkDigitNumber(value)
                break;
            }

            default:
                errorMessage = "";
        }
    if (errorMessage) {
        return validationObject[name] = errorMessage;
    }
}
