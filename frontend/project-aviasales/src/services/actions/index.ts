import { getDataRequest, saveEmailRequest } from "../../utils/emails";
import { AppDispatch } from "../store";

export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const SERVER_REQUEST = "SERVER_REQUEST";
export const SERVER_FAILED = "SERVER_FAILED";
export const SERVER_SUCCESS = "SERVER_SUCCESS";
export const API_SAVE_EMAIL_REQUEST = "API_SAVE_EMAIL_REQUEST";
export const API_SAVE_EMAIL_FAILED = "API_SAVE_EMAIL_FAILED";
export const API_SAVE_EMAIL_SUCCESS = "API_SAVE_EMAIL_SUCCESS";

export interface IChangeEmail {
    readonly type: typeof CHANGE_EMAIL;
    email: string;
}

export interface IServerRequest {
    readonly type: typeof SERVER_REQUEST;
}

export interface IServerFailed {
    readonly type: typeof SERVER_FAILED;
}

export interface IServerSuccess {
    readonly type: typeof SERVER_SUCCESS;
    message: string;
}

export interface IAPISaveEmailRequest {
    readonly type: typeof API_SAVE_EMAIL_REQUEST;
}

export interface IAPISaveEmailFailed {
    readonly type: typeof API_SAVE_EMAIL_FAILED;
}

export interface IAPISaveEmailSuccess {
    readonly type: typeof API_SAVE_EMAIL_SUCCESS;
}

export type TActions =
    | IChangeEmail
    | IServerRequest
    | IServerFailed
    | IServerSuccess
    | IAPISaveEmailRequest
    | IAPISaveEmailFailed
    | IAPISaveEmailSuccess;

export const saveEmail = (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: API_SAVE_EMAIL_REQUEST,
        });
        saveEmailRequest(email).then((res) => {
            console.log("save email", res);
            if (res && res.success) {
                dispatch({
                    type: API_SAVE_EMAIL_SUCCESS,
                    message: res.message,
                });
            } else {
                dispatch({
                    type: API_SAVE_EMAIL_FAILED,
                });
            }
        });
    };
};

export const checkEmail = (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: SERVER_REQUEST,
        });
        getDataRequest(email).then((res) => {
            console.log(res);
            if (res && res.success) {
                dispatch({
                    type: SERVER_SUCCESS,
                    message: res.message,
                });

                console.log("data req", res.message);

                if (res.message === "none") {
                    console.log("dis test");
                    dispatch({
                        type: API_SAVE_EMAIL_REQUEST,
                    });
                    saveEmailRequest(email).then((res) => {
                        console.log("save email", res);
                        if (res && res.success) {
                            dispatch({
                                type: API_SAVE_EMAIL_SUCCESS,
                                message: res.message,
                            });
                        } else {
                            dispatch({
                                type: API_SAVE_EMAIL_FAILED,
                            });
                        }
                    });
                }
            } else {
                dispatch({
                    type: SERVER_FAILED,
                });
            }
        });
    };
};
