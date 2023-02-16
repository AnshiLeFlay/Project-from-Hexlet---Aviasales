import { CHANGE_EMAIL, TActions } from "../actions";

type TInitialState = {
    email: string;
    emailError: string;
    serverRequest: boolean;
    serverFailed: boolean;
    serverSuccess: boolean;
};

const initialState: TInitialState = {
    email: "",
    emailError: "",
    serverRequest: false,
    serverFailed: false,
    serverSuccess: false,
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
        default: {
            return {
                ...state,
            };
        }
    }
};
