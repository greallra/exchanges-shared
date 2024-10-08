import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  formatISO,
} from "date-fns";

import {
  ExchangeForm,
  ExchangeServerFormat,
  FormFields,
  UserForm,
  Language,
  User,
  ExchangeFormatted,
} from "../types";
import { isFirebaseId } from "../utils";

function extractDeepValueIfNecessary(
  value: any,
  objectPropertyToDig: string,
  shouldBeType: string
) {
  if (typeof value === shouldBeType) {
    return value;
  }
  return value[objectPropertyToDig];
}

export function formatExchange(exchange, languages, users) {
  if (typeof exchange.time === "object") {
    exchange.timeUnix = format(formatISO(exchange.time.seconds * 1000), "Pp");
    exchange.timeHour = format(formatISO(exchange.time.seconds * 1000), "p");
  }
  if (typeof exchange.name !== "string") {
    exchange.name = "not string";
  }

  exchange.teachingLanguageUnfolded = getObjectById(
    exchange.teachingLanguageId,
    languages
  );
  exchange.learningLanguageUnfolded = getObjectById(
    exchange.learningLanguageId,
    languages
  );
  exchange.organizerUnfolded = getObjectById(exchange.organizerId, users);

  return {
    ...exchange,
  };
}

export function formatPostDataExchange(data) {
  let formattedData = {
    ...data,
    learningLanguageId: extractDeepValueIfNecessary(
      data.learningLanguage,
      "id",
      "string"
    ),
    teachingLanguageId: extractDeepValueIfNecessary(
      data.teachingLanguage,
      "id",
      "string"
    ),
    duration: extractDeepValueIfNecessary(data.duration, "value", "string"),
    capacity: extractDeepValueIfNecessary(data.capacity, "value", "string"),
  };
  delete formattedData.learningLanguage;
  delete formattedData.teachingLanguage;
  return formattedData;
}

export function formatPostDataUser(data: object) {
  let formattedData = {
    ...data,
    learningLanguageId: extractDeepValueIfNecessary(
      data.learningLanguage,
      "id",
      "string"
    ),
    teachingLanguageId: extractDeepValueIfNecessary(
      data.teachingLanguage,
      "id",
      "string"
    ),
  };
  delete formattedData.learningLanguage;
  delete formattedData.teachingLanguage;
  return formattedData;
}

export function updateFormFieldsWithSavedData(formFields, savedData) {
  return formFields.map((field) => {
    // if data given to alter field contains field property and has a value, assign it to the field value
    const value = savedData[field.property];
    if (value) {
      field.value = value;
    }
    return field;
  });
}

export function updateFormFieldsWithDefaultData(formFields, defaultData) {
  return formFields.map((field) => {
    // if data given to alter field contains field property and has a value, assign it to the field value
    const value = defaultData[field.property];
    if (value) {
      field.value = value;
    }
    return field;
  });
}

export function formatLanguages(languages) {
  return languages.map((lang) => {
    return {
      ...lang,
      label: lang.name,
    };
  });
}

// WOuld need type from FIrebase
export function appendAuthDataToUser(user) {
  return {
    uid: user.uid,
    accessToken: user.accessToken,
    email: user.email,
    // metadata: user.metadata,
    phoneNumber: user.phoneNumber,
    displayName: user.displayName,
  };
}

export function formatUserData(user, languages) {
  let result = { ...user };
  if (user.dob) {
    result.dob = new Date(formatISO(user.dob.seconds * 1000));
  }
  return {
    ...result,
    teachingLanguageUnfolded: getObjectById(user.teachingLanguageId, languages),
    learningLanguageUnfolded: getObjectById(user.learningLanguageId, languages),
  };
}

export function formatUsersData(users, languages) {
  return users.map((user) => formatUserData(user, languages));
}

export function getObjectById(id, items) {
  if (!id || !items || items.length === 0) {
    return "";
  }

  return items.find((item) => item.id === id) || "";
}
