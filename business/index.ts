import { Exchange, User, ParticipantsTeachingLanguage, ParticipantsLearningLanguage } from '../types'

export function checkUserIsValidToJoin(
        exchange: Exchange,
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

    // Already Joined
    if (exchange.participantIds.includes(joiningUser.id) || exchange.participantIds.includes(joiningUser.uid)) {
        message = joiningUserIsMe ? 'You have already joined this exchange': `User ${joiningUser.username} has already joined this exchange`;
    }
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
