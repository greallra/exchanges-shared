import { getUserFormFields, forms } from './formFields'
import { envs } from '../business/constants'
const formNames = Object.keys(forms)
const rnEnv = envs[1];
const webEnv = envs[0];

describe("getUserFormFields", () => {
  it('should throw an error if params are not valid', () => {
    expect(() => {
        getUserFormFields('userdfasd',  envs[0])
    }).toThrow('Not a valid form name');
    expect(() => {
        getUserFormFields(formNames[0], 'webzz')
    }).toThrow('Not a valid env');
  })
  it("should return the user form", () => {
    // console.log(getUserFormFields(formNames[0], webEnv)[6], forms[formNames[0]][6]);    
    expect(getUserFormFields(formNames[0], webEnv)).toEqual(forms[formNames[0]]);

  });
});


