import { User, UserForm } from "../types";

export function isFirebaseId (str: string) {
    return typeof str === 'string' && str.length === 20;
}

export function checkForLanguageChange(form: UserForm, user: User): Boolean{
    if (user.teachingLanguageId === form.teachingLanguage.id && user.learningLanguageId === form.learningLanguage.id) {
      return false
    } else {
      return true
    }
  }