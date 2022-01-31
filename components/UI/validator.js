// import section
// import dateTime from '../Commanfunctions/dateTimeServices';
import validator from "validator";

// Function to check null/empty/undefined value
const checkNull = (elementValue, errorMessage = "Please fill out this field") => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking null value.");

        if (typeof elementValue === 'undefined' || elementValue == null || typeof elementValue === 'string' ? elementValue.trim().length === 0 : elementValue === 0) {
            return errorMessage;
        }

        if (typeof elementValue === 'undefined' || elementValue == null || Array.isArray(elementValue)) {
            if (elementValue.length === 0)
                return errorMessage;
        }

        if (typeof elementValue === 'undefined' || elementValue == null || typeof elementValue === 'boolean') {
            if (elementValue === false)
                return errorMessage;
        }
    }
    catch (error) {
        throw error;
    }
}

// Function to check email
const checkEmail = (elementValue, errorMessage = "Invalid email") => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking email.");

        // Regular expression for checking valid email    
        //  --> Old Logic
        //let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue.trim().length != 0)
            // --> Old Logic
            //if(!re.test(elementValue))
            if (!validator.isEmail(elementValue)) {
                return errorMessage;
            }
    }
    catch (error) {
        throw error;
    }
}

// Function to check number
const checkNumber = (elementValue, errorMessage = 'invalid number') => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking number.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue + "".trim().length != 0)
            if (isNaN(elementValue)) {
                return errorMessage
            }
    }
    catch (error) {
        throw error;
    }
}

const checkDigitNumber = (elementValue, errorMessage = 'invalid number') => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking number.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue + "".trim().length != 0)
            if (!(elementValue + "").match(/^\d+$/)) {
                return errorMessage
            }
    }
    catch (error) {
        throw error;
    }
}


// Function to validate Password
const validatePassword = (elementValue, errorMessage = "Password must be minimum 8 characters,one uppercase, one lowercase,one digit and one special character.") => {
    //
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking password.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue.trim().length != 0) {
            var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

            if (!elementValue.match(decimal)) {
                return errorMessage
                // if (elementValue.length > 15 || elementValue.length < 8) {
                //     return "Password must be minimum 8 characters & maximum 15 characters";
                // } else if (elementValue.search(/[a-z]/i) < 0) {
                //     return "Password must contain at least one letter.";
                // }
                // if (elementValue.search(/[0-9]/) < 0) {
                //     return "Password must contain at least one digit.";
                // }
                // if (elementValue.search(/[!@#$%^&*]/) < 0) {
                //     return "Password must contain at least one special character.";
                // }
            }
        }
    }
    catch (error) {
        throw error;
    }
}

// Function to check minimum length of value
const checkMinLength = (elementValue, minLength, errorMessage = '') => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking minimum length.");

        if (typeof minLength === 'undefined' || minLength == null || isNaN(minLength))
            throw new Error("Invalid minimum length specified.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue.trim().length != 0)
            if (elementValue.length < parseInt(minLength)) {
                return errorMessage
            }
    }
    catch (error) {
        throw error;
    }
}

// Function to check Password
const checkPassword = (elementValue1, elementValue2, errorMessage = "Passwords must be same") => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking Password.");

        if (typeof elementValue1 !== 'undefined' && elementValue1 != null && elementValue1.trim().length != 0)
            if (typeof elementValue2 !== 'undefined' && elementValue2 != null && elementValue2.trim().length != 0)

                if (elementValue1 !== elementValue2) {
                    return errorMessage
                }
    }
    catch (error) {
        throw error;
    }
}


// -------------------------------------------------------------------------------

// Function to check maximum length of value
const checkMaxLength = (element, elementValue, maxLength, errorMessage, validationObject) => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking maximum length.");

        if (typeof maxLength === 'undefined' || maxLength == null || isNaN(maxLength))
            throw new Error("Invalid maximum length specified.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue.trim().length != 0)
            if (elementValue.length > parseInt(maxLength)) {
                element = "error" + element;
                validationObject[element] = errorMessage;
            }
    }
    catch (error) {
        throw error;
    }
}







// Function to check number
const isDateGreater = (element1, element1Value, element2, element2Value, errorMessage, validationObject) => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking greater date.");

        if (typeof element1Value === 'undefined' || element1Value === null || element1Value.trim().length === 0 || isNaN(element1Value)) {
            let invalidDateMsg = element1 + " should be a date.";
            element1 = "error" + element1;
            validationObject[element1] = invalidDateMsg;
        }
        else if (typeof element2Value === 'undefined' || element2Value == null || element2Value.trim().length == 0 || isNaN(element2Value)) {
            let invalidDateMsg = element2 + " should be a date.";
            element2 = "error" + element2;
            validationObject[element2] = invalidDateMsg;
        }
        else if (parseInt(element1Value) > parseInt(element2Value)) {
            element1 = "error" + element1;
            validationObject[element1] = errorMessage;
        }
    }
    catch (error) {
        throw error;
    }
}


// // Function to check valid date
// const checkDate = (element, elementValue, format, errorMessage, validationObject) => {
//     try {
//         if (typeof errorMessage === 'undefined' || errorMessage == null || errorMessage.trim().length == 0)
//             throw new Error("Error message is not provided for checking date value.");

//         if (!dateTime.checkDate(elementValue, format)) {
//             element = "error" + element;
//             validationObject[element] = errorMessage;
//         }

//     }
//     catch (error) {
//         throw error;
//     }
// }



// Function to check mobile number
const checkMobileNumber = (elementValue, errorMessage = "invalid mobile number") => {
    try {
        if (typeof errorMessage === 'undefined' || errorMessage === null || errorMessage.trim().length === 0)
            throw new Error("Error message is not provided for checking mobile number.");

        if (typeof elementValue !== 'undefined' && elementValue != null && elementValue.trim().length != 0)
            if (!validator.isMobilePhone(elementValue, 'en-IN')) {
                return errorMessage;
            }

    }
    catch (error) {
        throw error;
    }
}





export {
    checkNull,
    checkMaxLength,
    checkMinLength,
    checkNumber,
    checkDigitNumber,
    checkEmail,
    isDateGreater,
    validatePassword,
    // checkDate,
    checkMobileNumber,
    checkPassword
};