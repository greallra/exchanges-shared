import { object, string, email, number, date, InferType, array } from 'yup';
import _ from 'lodash';

const newUserSchema = object({
    // id provided by FB
    // id: string().required().min(3),
    firstname: string().required().min(3),
    lastname: string().required().min(3),
    username: string().required().min(3).matches(/^\S*$/, "No whitespace"),
    email: string().email().required(),
    password: string().required().min(6),
    // name: string().required(),
    dob: date().required(),
    gender: number().required(),
    teachingLanguageId: string().required(),
    learningLanguageId: string().required(),
  });
  

const editUserSchema = object({
    id: string(),
    firstname: string().min(3),
    lastname: string().min(3),
    username: string().min(3).matches(/^\S*$/, "No whitespace"),
    email: string().email(),
    // password: string().min(6),
    // name: string(),
    dob: date(),
    gender: string(),
    teachingLanguage: object(),
    learningLanguage: object(),
});

const newExchangeSchema = object({
    name: string().required('Name missing').min(3).max(23),
    location: object({
      geometry: object().required(),
      address_components: array().required(),
      formatted_address: string(),
    }).required('You must pick a location'),
    capacity: string().required('Number Of Participants missing'),
    time: date().required('You must pick a time'),
    duration: string().required('You must pick a duration'),
    gender: number().required(),
    age_range: array().required(),
    organizerId: string().required(),
    participantIds: array().required(),
    learningLanguageId: string().required(),
    teachingLanguageId: string().required(),
});

const editExchangeSchema = object({
    id: string().required(),
    name: string().min(3).max(23),
    location: object({
      geometry: object(),
      address_components: array(),
      formatted_address: string(),
    }),
    capacity: string(),
    time: date(),
    duration: string(),
    gender: number(),
    age_range: array(),
    organizerId: string(),
    participantIds: array(),
    learningLanguageId: string(),
    teachingLanguageId: string(),
});

  

export async function validateForm(formType: string, formData: object){
    if (formType === 'newUser') {
        try {
            // parse and assert validity
            const user = await newUserSchema.validate(formData)
            // custom validation
            if (user.teachingLanguageId === user.learningLanguageId) {
              return 'Teaching Language and Learning Language cannot be the same';
            }
            return user
        } catch (error) {
            return error.message
        }           
    }
    if (formType === 'editUser') {
        try {
            // parse and assert validity
            const user = await editUserSchema.validate(formData)
            // custom validation
            if (user.teachingLanguageId === user.learningLanguageId)  {
              return 'Teaching Language and Learning Language cannot be the same';
            }
            return user
        } catch (error) {
            return error.message
        }           
    }
    if (formType === 'newExchange') {
        try {
            // parse and assert validity
            const exchange = await newExchangeSchema.validate(formData)
            // custom validation
            return exchange
        } catch (error) {
            return error.message
        }           
    }
    if (formType === 'editExchange') {
        try {
            // parse and assert validity
            const exchange = await editExchangeSchema.validate(formData)
            // custom validation
            return exchange
        } catch (error) {
            return error.message
        }           
    }
}