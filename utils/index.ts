import { User, UserForm } from "../types";

export function isFirebaseId(str: string) {
  return typeof str === "string" && str.length === 20;
}

export function checkForLanguageChange(form: UserForm, user: User): Boolean {
  if (
    user.teachingLanguageId === form.teachingLanguage.id &&
    user.learningLanguageId === form.learningLanguage.id
  ) {
    return false;
  } else {
    return true;
  }
}

export function getUserInitials(user: object) {
  if (!user || !user.firstname || !user.lastname) {
    return "XX";
  }
  return (
    user.firstname.charAt(0).toUpperCase() +
    user.lastname.charAt(0).toUpperCase()
  );
}

export function parseLocation(location: object) {
  if (!location) {
    return "Parse fail (location)";
  }
  // One is web other is RN
  if (location.formatted_address) {
    return location.formatted_address;
  }
  if (location.structured_formatting) {
    return location.structured_formatting.main_text;
  }
  return "Parse fail (location)";
}

export function safeParse(property: string, value: object) {
  if (!property || !value) {
    return "Parse Fail";
  }
  if (typeof value === "string") {
    return value;
  }
  if (property === "organizerUnfolded") {
    if (value.username) {
      return value.username;
    }
    return "Parse Fail";
  }
  return "Parse Fail";
}

export function getIndexOfAvailableValues(
  formFields: Array,
  property: string,
  value: any
) {
  const field = formFields.find((field) => field.property === property);
  return field.availableValues.indexOf(value);
}
