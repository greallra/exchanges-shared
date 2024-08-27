import { envs } from "../business/constants";
import { forms } from './formFields'

const envWeb = envs[0];
const envRN = envs[1];
export const getFormFields = (form: string, env: string) => {
    if (!forms[form]) {
        throw new Error("Not a valid form name");
    }
    if (!envs.includes(env)) {
        throw new Error("Not a valid env");
    }
    return forms[form].map((field) => {
        let fieldNew = {...field}
        // common in all forms

        // user 
        if (form === 'user') {
            if (fieldNew.name === 'dob' && env === envWeb) {
                fieldNew.maxDate = new Date('01-01-2004')
                fieldNew.value = new Date('01-01-1994')
            }
            if (fieldNew.name === 'dob' && env === envRN) {
                fieldNew.maxDate = new Date('01-01-2004')
                fieldNew.value = new Date('01-01-1994')
            }
            if (fieldNew.name === 'gender' && env === envWeb) {
                fieldNew.options = [{ value: 0, index: 0, matineValue: 'male', label: 'Male' }, { value: 1, index: 1, matineValue: 'female', label: 'Female'  }]
            }
            if (fieldNew.name === 'gender' && env === envRN) {
                fieldNew.options = ['male', 'female']
            }
            if ((fieldNew.name === 'teachingLanguage'  || fieldNew.name === 'learningLanguage') && env === envWeb) {
                 fieldNew.type = "language_picker"
            }
            if ((fieldNew.name === 'teachingLanguage'  || fieldNew.name === 'learningLanguage') && env === envRN) {
                fieldNew.type = "radio2"
                fieldNew.options =  []
            }
        }
    
        if (form === 'exchange') {
            if (fieldNew.name === 'capacity' && env === envWeb) {
                fieldNew.availableValues = ['2', '4', '6', '8', '10', '12']
                fieldNew.value = ""
            }
            if (fieldNew.name === 'capacity' && env === envRN) {
                fieldNew.value = { value: null, selectedValue: null }
            }
            if (fieldNew.type === 'datetime' && env === envWeb) {
                fieldNew.value = new Date()
                fieldNew.mode = 'datetime'
                fieldNew.is24Hour = true
            }
            if (fieldNew.type === 'datetime' && env === envRN) {
                fieldNew.value = { value: null, selectedValue: null }
            }
            if (fieldNew.name === 'duration' && env === envRN) {
                fieldNew.value = { value: null, selectedValue: null }
            }
            if (fieldNew.name === 'gender' && env === envWeb) {
                fieldNew.options = [
                { value: 0, index: 0, matineValue: 'male', label: 'Male' }, 
                { value: 1, index: 1, matineValue: 'female', label: 'Female'  },
                { value: 2, index: 2, matineValue: 'any', label: 'Any Gender'  }]
            }
            if (fieldNew.name === 'gender' && env === envRN) {
                 fieldNew.options = ['male', 'female', 'Any gender']
            }
        } 
        
        return fieldNew
    })
}