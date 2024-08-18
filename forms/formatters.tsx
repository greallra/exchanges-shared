import { ExchangeForm, FormFields, UserForm, Language, User } from '../types'
import { isFirebaseId } from '../utils'

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
        capacity: extractDeepValueIfNecessary(data.capacity, 'value' , 'string'),
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

export function formatLanguages (languages: Array<Language>) {
    return languages.map((lang) => {
        return {
            ...lang,
            label: lang.name
        }
    })
}

// WOuld need type from FIrebase
export function appendAuthDataToUser (user) {
    return {
        uid: user.uid,
        accessToken: user.accessToken,
        email: user.email,
        // metadata: user.metadata,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
    }
}

export function formatUserData(user: User, languages: Array<Language>) {
    let result = {...user}
    if (user.dob) {
        result.dob = new Date(formatISO(user.dob.seconds * 1000))
    }
    return {
        ...result,
        teachingLanguageUnfoled: getObjectById(user.teachingLanguageId, languages),
        learningLanguageUnfoled: getObjectById(user.learningLanguageId, languages),

    }
}

export function getObjectById(id: string, items: Array){
    if (!id || !isFirebaseId(id) || !items || items.length === 0) {
        return ''
    }
    return items.find( item => item.id === id) || '';
}
