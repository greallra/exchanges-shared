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
        return fieldNew
    })
}