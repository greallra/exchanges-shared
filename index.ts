import { esUpdateDoc, esAddDoc, esAddUser, esGetDoc, esDeleteDoc, esDeleteDocs, esSetDoc, esGetCollection } from './api/calls'
import { checkUserIsValidToJoin } from './business'
import { validateForm } from './forms/validation'
import { formatPostDataExchange, updateFormFieldsWithDefaultData, updateFormFieldsWithSavedData, formatPostDataUser, formatLanguages, appendAuthDataToUser,
    formatUserData, formatExchange, formatUsersData
 } from './forms/formatters'
import { exchangeFormFields, exchangeFormFieldsRN } from './forms/formFields'
import {  getFormFields } from './forms/utils'
import { isFirebaseId, checkForLanguageChange, getUserInitials, parseLocation, safeParse } from './utils'
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
    esGetCollection,
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
    getFormFields,
    isFirebaseId,
    checkForLanguageChange,
    getUserInitials, 
    parseLocation, 
    safeParse,
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