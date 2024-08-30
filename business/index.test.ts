import { userLanguagesMatchesExchange, checkUserHasJoined, isExchangeOrganizer, getUserType } from '.';
import { usersFormatted, usersUnFormatted } from '../mockData/users';
import { formatExchange } from '../forms/formatters';
import exchanges from '../mockData/exchanges';
import languages from '../mockData/languages';

var _ = require('lodash');
// French zYoQI0GUYeKJrXpjzKEW
// Spanish 2DPZDFazWCvRWlUB5FqP
// English Q8zq9oyScyD2N5gPf62J
const formattedExchangeSpanEng = formatExchange(exchanges[0], languages, usersUnFormatted)
const userEnglishSpanish = usersUnFormatted[0];
const userEnglishFrench = usersUnFormatted[1];
const userSpanishFrench = usersUnFormatted[2];
const user0 = usersUnFormatted[0];
const userParticipantamzCmRWAK9aFvpUnxXE1ZAJ9kZp2 = usersUnFormatted.find( user => user.id === 'amzCmRWAK9aFvpUnxXE1ZAJ9kZp2');
const exchange0 = formatExchange(exchanges[0], languages, usersUnFormatted)
const userOrganiserOf0 = usersUnFormatted.find( user => user.id === 'amzCmRWAK9aFvpUnxXE1ZAJ9kZp2');


describe("userLanguagesMatchesExchange", () => {
  it('should return whether user/s languages matches up with the exchange', () => {
    expect(userLanguagesMatchesExchange(formattedExchangeSpanEng, userEnglishSpanish)).toBe(true);
    expect(userLanguagesMatchesExchange(formattedExchangeSpanEng, userEnglishFrench)).toBe(false);
    expect(userLanguagesMatchesExchange(formattedExchangeSpanEng, userSpanishFrench)).toBe(false);
  })
  it('testooo', () => {
    expect('test').toHaveLength(4);
  })


});

describe("checkUserHasJoined", () => {
  it('should check if user has joined the exchange', () => {
    expect(checkUserHasJoined(user0, exchange0)).toBe(false);
    expect(checkUserHasJoined(userParticipantamzCmRWAK9aFvpUnxXE1ZAJ9kZp2, exchange0)).toBe(true);
  })
});

describe("isExchangeOrganizer", () => {
  it('should check if user is the organizer', () => {
    expect(() => {
        isExchangeOrganizer()
    }).toThrow('isExchangeOrganizer invalid args');
    expect(isExchangeOrganizer(exchange0, user0)).toBe(false);
    expect(isExchangeOrganizer(exchange0, userOrganiserOf0)).toBe(true);
  })

});
