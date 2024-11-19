export interface Language {
  id: string;
  iso_alpha2: string;
  smallFlag: string;
  label: string;
  name: string;
}

export interface ExchangeServerFormat {
  name: string;
  location: Object;
  capacity: String;
  time: Object;
  duration: string;
  gender: Number;
  age_range: Array<Number>;
  organizerId: string;
  participantIds: Array<String>;
  learningLanguageId: string;
  teachingLanguageId: string;
}
/*
ExchangeFormatted: add fields
timeUnix
timeHour
teachingLanguageUnfolded
learningLanguageUnfolded
organizerUnfolded */

export interface ExchangeForm {
  name: string;
  // location: Object,
  // capacity: String,
  // time: Object,
  // duration: string,
  // gender: Number,
  // age_range: Array<Number>,
  // organizerId: string,
  // participantIds: Array<String>,
  // teachingLanguage: Language,
  // learningLanguage: Language
}
/*
ExchangeFormatted: add fields
timeUnix
timeHour
teachingLanguageUnfolded
learningLanguageUnfolded
organizerUnfolded */
export type ExchangeFormatted = {
  name: string;
  location: Object;
  capacity: String;
  time: Object;
  duration: string;
  gender: Number;
  age_range: Array<Number>;
  organizerId: string;
  organizerUnfolded: User;
  participantIds: Array<String>;
  teachingLanguageUnfolded: Language;
  learningLanguageUnfolded: Language;
  learningLanguageId: string;
  teachingLanguageId: string;
  timeUnix: string;
  timeHour: string;
};

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  dob: Object;
  gender: number;
  teachingLanguageId: string;
  learningLanguageId: string;
  avatarUrl: string;
}

export interface UserForm {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dob: Date;
  gender: number;
  teachingLanguage: string;
  learningLanguage: string;
}

export interface Participants extends Array<User> {}

export type FormFields = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  property: string;
  value: string;
  required: boolean;
};

export type SelectField = Partial<FormFields> & {
  options: Array<number>;
};
