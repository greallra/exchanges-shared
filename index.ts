import { esUpdateDoc, esAddDoc, esAddUser } from './api/calls'
import { checkUserIsValidToJoin } from './business'
import { validateForm } from './forms/validation'
import { formatPostDataExchange, updateFormFieldsWithDefaultData, formatPostDataUser } from './forms/formatters'
import { exchangeFormFields, exchangeFormFieldsRN, userFormFields, userFormFieldsRN } from './forms/formFields'

export { 
    esAddDoc,
    esAddUser,
    esUpdateDoc,
    checkUserIsValidToJoin, 
    validateForm,
    formatPostDataExchange,
    formatPostDataUser,
    // updateFormFieldsWithSavedData,
    updateFormFieldsWithDefaultData,
    exchangeFormFields,
    exchangeFormFieldsRN,
    userFormFields,
    userFormFieldsRN
};
