export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const SERVER_REQUEST = 'SERVER_REQUEST';
export const SERVER_FAILED = 'SERVER_FAILED';
export const SERVER_SUCCESS = 'SERVER_SUCCESS';

export interface IChangeEmail{
    type: typeof CHANGE_EMAIL,
    email: string
}

export type TActions = IChangeEmail;