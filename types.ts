export interface ExchangeServer {
    name: string,
    location: Object,
    capacity: String,
    time: Date,
    duration: string,
    gender: Number,
    age_range: Array<Number>,
    organizerId: string,
    participantIds: Array<String>,
    learningLanguageId: string,
    teachingLanguageId: string
}

export interface ExchangeForm {
    name: string,
    location: Object,
    capacity: String,
    time: Date,
    duration: string,
    gender: Number,
    age_range: Array<Number>,
    organizerId: string,
    participantIds: Array<String>,
    teachingLanguage: TeachingLanguage,
    learningLanguage: TeachingLanguage
}

interface TeachingLanguage {
    id: string,
    iso_alpha2: string,
    smallFlag: string,
    label: string,
    name: string,
}

export interface User {
    username: string
}
export interface UserForm {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    dob: Date,
    gender: number,
    teachingLanguage: TeachingLanguage,
    learningLanguage: TeachingLanguage
}

export interface ParticipantsTeachingLanguage {
    // username: string
}
export interface ParticipantsLearningLanguage {
    // username: string
}

export interface FormFields {
    type: string,
    name: string,
    label: string,
    property: string,
}

