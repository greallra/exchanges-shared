import { ExchangeForm, FormFields, UserForm } from '../types'

function extractDeepValueIfNecessary(value: any, objectPropertyToDig: string, shouldBeType: string) {
    if (typeof value === shouldBeType) {
        return value
    }
    return value[objectPropertyToDig];
}


export function formatPostDataExchange (data: ExchangeForm) {
    let formattedData = {
        ...data,
        learningLanguageId:  extractDeepValueIfNecessary(data.learningLanguage, 'id' , 'string'),
        teachingLanguageId: extractDeepValueIfNecessary(data.teachingLanguage, 'id' , 'string'),
        duration: extractDeepValueIfNecessary(data.duration, 'value' , 'string'),
        capacity: extractDeepValueIfNecessary(data.duration, 'value' , 'string'),
    }
    delete formattedData.learningLanguage;
    delete formattedData.teachingLanguage;
    return formattedData;
}

export function formatPostDataUser (data: UserForm) {
    let formattedData = {
        ...data,
        learningLanguageId:  extractDeepValueIfNecessary(data.learningLanguage, 'id' , 'string'),
        teachingLanguageId: extractDeepValueIfNecessary(data.teachingLanguage, 'id' , 'string'),
    }
    delete formattedData.learningLanguage;
    delete formattedData.teachingLanguage;
    return formattedData;
}

// export function updateFormFieldsWithSavedData(formFields: Array, savedData: object) {
//     return formFields.map((field) => {
//         // if data given to alter field contains field property and has a value, assign it to the field value
//         const value = savedData[field.property];
//         if (value) {
//            field.value = value
//         }
//         return field
//     })
// }

export function updateFormFieldsWithDefaultData(formFields: FormFields, defaultData: object) {
    return formFields.map((field) => {
        // if data given to alter field contains field property and has a value, assign it to the field value
        const value = defaultData[field.property];
        if (value) {
           field.value = value
        }
        return field
    })
}