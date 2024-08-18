import { esUpdateDoc, esAddDoc, esAddUser, esGetOneDoc } from './api/calls'
import { checkUserIsValidToJoin } from './business'
import { validateForm } from './forms/validation'
import { formatPostDataExchange, updateFormFieldsWithDefaultData, formatPostDataUser, formatLanguages, appendAuthDataToUser,
    formatUserData
 } from './forms/formatters'
import { exchangeFormFields, exchangeFormFieldsRN, userFormFields, userFormFieldsRN } from './forms/formFields'
import { isFirebaseId } from './utils'

import {
    Language,
    ExchangeServer,
    ExchangeForm,
    User,
    UserForm,
    Participants,
    FormFields,
} from './types'


export { 
    esAddDoc,
    esAddUser,
    esUpdateDoc,
    esGetOneDoc,
    checkUserIsValidToJoin, 
    validateForm,
    formatPostDataExchange,
    formatPostDataUser,
    formatLanguages,
    formatUserData,
    appendAuthDataToUser,
    // updateFormFieldsWithSavedData,
    updateFormFieldsWithDefaultData,
    exchangeFormFields,
    exchangeFormFieldsRN,
    userFormFields,
    userFormFieldsRN,
    isFirebaseId
 
};

export type {
    Language,
    ExchangeServer,
    ExchangeForm,
    User,
    UserForm,
    Participants,
    FormFields,
}