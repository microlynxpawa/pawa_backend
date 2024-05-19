import { AuthErrorCodes } from '../error/auth/auth.errorcode';

export const getTokenDataFromHeader = async (headers: {
    [key: string]: string,
}): Promise<any> => {
    try {
        // extract the token information
        if(!headers['authentication-id'] || !headers['authentication-key']) {
            return AuthErrorCodes.authHeaderError;
        }
        const authenticationID = headers['authentication-id'];
        const authenticationKey = headers['authentication-key'];
        const authPayload = { authenticationID, authenticationKey };
        // NOTE: The payload contains authentications that can be encrypted and stored authenticated user 
        // details like bankid, email, brnachid...
        return authPayload;
    } catch (error) {
        console.log(error);
    }
}