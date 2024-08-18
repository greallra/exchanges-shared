
export function isFirebaseId (str: string) {
    return typeof str === 'string' && str.length === 20;
}