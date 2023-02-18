import {
    CHANGE_EMAIL,
    SERVER_FAILED,
    SERVER_REQUEST,
    SERVER_SUCCESS,
    API_SAVE_EMAIL_FAILED,
    API_SAVE_EMAIL_REQUEST,
    API_SAVE_EMAIL_SUCCESS,
    TActions,
} from "../actions";

type TInitialState = {
    email: string;
    emailError: '';
    exist: string;
    serverRequest: boolean;
    serverFailed: boolean;
    serverSuccess: boolean;
    saveRequest: boolean;
    saveFailed: boolean;
    saveSuccess: boolean;
};

const initialState: TInitialState = {
    email: "",
    emailError: "",
    exist: "",
    serverRequest: false,
    serverFailed: false,
    serverSuccess: false,
    saveRequest: false,
    saveFailed: false,
    saveSuccess: false,
};

export const appReducer = (
    state = initialState,
    action: TActions
): TInitialState => {
    switch (action.type) {
        case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.email,
            };
        }
        case SERVER_REQUEST: {
            return {
                ...state,
                serverRequest: true,
            };
        }
        case SERVER_SUCCESS: {
            return {
                ...state,
                serverRequest: false,
                serverSuccess: true,
                exist: action.message
            };
        }
        case SERVER_FAILED: {
            return {
                ...state,
                serverRequest: false,
                serverSuccess: false,
                serverFailed: true,
            };
        }
        case API_SAVE_EMAIL_REQUEST: {
            return {
                ...state,
                saveRequest: true,
            };
        }
        case API_SAVE_EMAIL_SUCCESS: {
            return {
                ...state,
                saveRequest: false,
                saveSuccess: true,
            };
        }
        case API_SAVE_EMAIL_FAILED: {
            return {
                ...state,
                saveRequest: false,
                saveSuccess: false,
                saveFailed: true,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
