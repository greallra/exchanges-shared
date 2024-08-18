import { esUpdateDoc, esAddDoc, esAddUser, esGetDoc, esDeleteDoc, esDeleteDocs, esSetDoc } from './api/calls'
import { checkUserIsValidToJoin } from './business'
import { validateForm } from './forms/validation'
import { formatPostDataExchange, updateFormFieldsWithDefaultData, updateFormFieldsWithSavedData, formatPostDataUser, formatLanguages, appendAuthDataToUser,
    formatUserData, formatExchange, formatUsersData
 } from './forms/formatters'
import { exchangeFormFields, exchangeFormFieldsRN, userFormFields, userFormFieldsRN } from './forms/formFields'
import { isFirebaseId, checkForLanguageChange } from './utils'
import { timeFilterExchanges, nextTenDays } from './utils/timeHelpers'

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
    esDeleteDocs, 
    esSetDoc,
    esGetDoc,
    esDeleteDoc,
    checkUserIsValidToJoin, 
    validateForm,
    formatPostDataExchange,
    formatUsersData,
    formatPostDataUser,
    formatLanguages,
    formatExchange,
    formatUserData,
    appendAuthDataToUser,
    updateFormFieldsWithSavedData,
    updateFormFieldsWithDefaultData,
    exchangeFormFields,
    exchangeFormFieldsRN,
    userFormFields,
    userFormFieldsRN,
    isFirebaseId,
    checkForLanguageChange,
    timeFilterExchanges, 
    nextTenDays,
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