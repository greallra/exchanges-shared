import { object, string, email, number, date, InferType, array } from 'yup';
import _ from 'lodash';

const newUserSchema = object({
    firstname: string().required().min(3),
    lastname: string().required().min(3),
    username: string().required().min(3).matches(/^\S*$/, "No whitespace"),
    email: string().email().required(),
    password: string().required().min(6),
    // name: string().required(),
    dob: date().required(),
    gender: string().required(),
    teachingLanguage: string().required(),
    learningLanguage: object().required(),
  });
  

const editUserSchema = object({
    firstname: string().required().min(3),
    lastname: string().required().min(3),
    username: string().required().min(3).matches(/^\S*$/, "No whitespace"),
    // email: string().email().required(),
    // password: string().required().min(6),
    // name: string().required(),
    dob: date().required(),
    gender: string().required(),
    teachingLanguage: object().required(),
    learningLanguage: object().required(),
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

  

export async function validateForm(formType: string, formData: object){
    if (formType === 'newUser') {
        try {
            // parse and assert validity
            const user = await newUserSchema.validate(formData)
            // custom validation
            if (_.isEqual(user.teachingLanguage, user.learningLanguage)) {
              return 'Teaching Language and Learning Language cannot be the same';
            }
            return user
        } catch (error) {
            return error.message
        }           
    }
    // if (formType === 'editUser') {
    //     try {
    //         // parse and assert validity
    //         const user = await editUserSchema.validate(formData)
    //         // custom validation
    //         if (_.isEqual(user.teachingLanguage, user.learningLanguage)) {
    //           return 'Teaching Language and Learning Language cannot be the same';
    //         }
    //         return user
    //     } catch (error) {
    //         return error.message
    //     }           
    // }
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
    // if (formType === 'editExchange') {
    //     try {
    //         // parse and assert validity
    //         const exchange = await exchangeSchemaClient.validate(formData)
    //         // custom validation
    //         return exchange
    //     } catch (error) {
    //         return error.message
    //     }           
    // }
}