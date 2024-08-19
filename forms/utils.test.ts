import { getFormFields } from './utils'
import { forms } from './formFields'
import { envs } from '../business/constants'
var _ = require('lodash');
const formNames = Object.keys(forms)
const rnEnv = envs[1];
const webEnv = envs[0];
const testUserFormWeb = getFormFields(formNames[0], webEnv)
const testUserFormRN = getFormFields(formNames[0], rnEnv)

describe("getUserFormFields", () => {
  it('should throw an error if params are not valid', () => {
    expect(() => {
        getFormFields('userdfasd',  rnEnv)
    }).toThrow('Not a valid form name');
    expect(() => {
        getFormFields(formNames[0], 'webzz')
    }).toThrow('Not a valid env');
  })

  it("should return the user form with x objects", () => {
    expect(getFormFields(formNames[0], webEnv)).toHaveLength(9);
  });
  
  it("should return the web specific fields", () => {
    const genderItem = testUserFormWeb[6];
    const dobItem = testUserFormWeb[5];
    const teachingLanguageItem = testUserFormWeb[7];
    expect(getFormFields(formNames[0], webEnv)).toEqual(testUserFormWeb);
    expect(dobItem).toHaveProperty('maxDate', new Date('01-01-2004'))
    expect(dobItem).toHaveProperty('value', new Date('01-01-1994'))
    expect(teachingLanguageItem).toHaveProperty('name', 'teachingLanguage')
    expect(teachingLanguageItem).toHaveProperty('type', 'language_picker')
 
    expect(genderItem).toHaveProperty('options', [
      { value: 0, index: 0, matineValue: 'male', label: 'Male' },
      { value: 1, index: 1, matineValue: 'female', label: 'Female' }
    ]);
  });
  it("should return the RN specific fields", () => {
    const dobItem = testUserFormRN[5];
    const genderItem = testUserFormRN[6];
    const teachingLanguageItem = testUserFormRN[7];
    const item = testUserFormRN[7];
    console.log('genderItem', genderItem);
    // new Date('01-01-2004')   field.maxDate = new Date('01-01-2004')
    // expect(getFormFields(formNames[0], rnEnv)).toEqual(forms[formNames[0]]);
    expect(dobItem).toHaveProperty('maxDate', new Date('01-01-2004'))
    // expect(dobItem).toEqual( expect.not.objectContaining( { maxDate: new Date('01-01-2004') }) )
    expect(dobItem).toHaveProperty('value', new Date('01-01-1994'))
    expect(teachingLanguageItem).toHaveProperty('name', 'teachingLanguage')
    expect(teachingLanguageItem).toHaveProperty('type', 'radio2')
 
    expect(genderItem).toHaveProperty('options', ['male', 'female']);
  });

});


