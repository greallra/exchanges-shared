import { ExchangeFormatted, User, Participants } from '../types'
import { esUpdateDoc } from '../api/calls';

export function userLanguagesMatchesExchange(exchange: ExchangeFormatted, user: User) {
    const learningLanguageValues = Object.values(exchange.learningLanguageUnfolded);
    const teachingLanguageValues = Object.values(exchange.teachingLanguageUnfolded);
    const combinedValues = [...learningLanguageValues, ...teachingLanguageValues];
    combinedValues.includes(user.learningLanguageId);
    combinedValues.includes(user.teachingLanguageId);
    return combinedValues.includes(user.learningLanguageId) && combinedValues.includes(user.teachingLanguageId)
}

export function checkUserHasJoined(user: User, exchange: ExchangeFormatted){
    if (!user || !user.id || !exchange) {
        throw "checkUserHasJoined invalid args"
    }
    
    let hasJoined = false
    if (exchange && exchange.participantIds) {
        hasJoined = exchange.participantIds.includes(user.id);
    }
    return hasJoined;
}
// NOT VALID +  disabled action
// 1. Incorrect target languages - msg = doesnt match ur language
// 2. Already Joined + is orangiser
// 5. Exchange full for users TL
// NOT VALID + enabled action
// 3. Already Joined + is not orangiser (remove me action)
// 4.
// VALID
// Exchange not full for users TL + is my target languages
// Joined + is not oraniser (remove me action)
export function checkUserIsValidToJoin(
    exchange: ExchangeFormatted,
    participantsTeachingLanguage,
    participantsLearningLanguage,
    userPerforming, 
    userAdded
    ) {
    let isValid = false;
    let message = '';
    let joiningUser;
    let joiningUserIsMe = false;


    if (!exchange || !userPerforming) {
        message = 'exchange and user Performing are required'
        return {
            isValid,
            message
        }
    }
    if (!userAdded) {
        joiningUser = userPerforming
        joiningUserIsMe = true
    } else {
        joiningUser = userAdded 
    }
    console.log('participantsTeachingLanguage', participantsTeachingLanguage);
    console.log('participantsTeachingLanguage', participantsTeachingLanguage);
   
    // Not the right target languages
    if (!userLanguagesMatchesExchange(exchange, joiningUser)) {
        message = 'Incorrect target languages';
    }
    // Already Joined
    else if (checkUserHasJoined(joiningUser, exchange)) {
        message = joiningUserIsMe ? 'You have already joined this exchange': `User ${joiningUser.username} has already joined this exchange`;
    }
    // // Is organizer
    // else if (isExchangeOrganizer(exchange, joiningUser)) {
    //     message = 'Organisers cannot abandon the exchange'
    // }
    // exchange full TL
    else if (participantsTeachingLanguage.length >= exchange.capacity / 2 && participantsTeachingLanguage[0].teachingLanguageId === joiningUser.teachingLanguageId ) {
        message = `The Exchange is full for ${exchange.teachingLanguageUnfolded.name} speakers`;
    }
    // exchange full LL
    else if (participantsLearningLanguage.length >= exchange.capacity / 2 && participantsLearningLanguage[0].learningLanguageId === joiningUser.learningLanguageId) {
        message = `The Exchange is full for ${exchange.learningLanguageUnfolded.name} speakers`;
    } 
    else {
    // success 
        return {
            isValid: true,
            message: null,
            joiningUser
        }
    }
    return {
        isValid, message
    }
}

export async function removeMyselfFromExchange(FIREBASE_DB, me, exchange) {
    let success = false;
    let message = '';
    if (me.id === exchange.organizerId) {
        message = 'Organizers cannot remove themselves from the exchange'
        return {
            success,
            message
        }
    }
    let participantsMeRemoved = [...exchange.participantIds]
    participantsMeRemoved.splice(participantsMeRemoved.indexOf(me.id), 1)
    await esUpdateDoc(FIREBASE_DB, 'exchanges', exchange.id, { participantIds: participantsMeRemoved});
    return {
        success: true,
        message: 'You were removed from the exchange'
    }
   
}

export function getPartipantsOfLanguages(users, exchange) {
    if (!users || !exchange) {
         throw "getPartipantsOfLanguages invalid args"
    }
    const participantsTeachingLanguage = users.filter((user) => exchange.participantIds.includes(user.id) && user.teachingLanguageId === exchange.teachingLanguageId)
    const participantsLearningLanguage = users.filter((user) => exchange.participantIds.includes(user.id) && user.learningLanguageId === exchange.teachingLanguageId)
    return { participantsTeachingLanguage, participantsLearningLanguage }
}
 
export async function addParticipantToExchange(FIREBASE_DB, exchange, user) {
    if (!user || !exchange || !FIREBASE_DB) {
        throw "addParticipantToExchange invalid args"
   }
    let participantsUserAdded = [...exchange.participantIds, user.id || user.uid]
    const { error, response } = await esUpdateDoc(FIREBASE_DB, 'exchanges', exchange.id, { participantIds: participantsUserAdded });
    return { error, response }
}

export function isExchangeOrganizer(exchange, user) {
    if (!user || !exchange) {
        throw "isExchangeOrganizer invalid args"
   }
   return exchange.participantIds.includes(user.id)
}

