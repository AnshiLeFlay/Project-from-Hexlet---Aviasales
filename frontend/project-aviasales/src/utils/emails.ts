import { API_ENDPOINT } from "./api";

export const getDataRequest = async (email: string): Promise<any> => {
    try {
        const res: Response = await fetch(`${API_ENDPOINT}${email}`);

        console.log( res );

        if (res.ok) {
            return await res.json();
        }
        return Promise.reject(`Ошибка подключения к API ${res.status}`);
    } catch (error) {
        return Promise.reject(`Ошибка подключения к API ${error}`);
    }
};

export const saveEmailRequest = async (email: string): Promise<any> => {
    
    const settings: RequestInit = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify( { email: email } )
    };
    

    try {
        const res: Response = await fetch(`${API_ENDPOINT}`, settings);

        console.log( res );

        if (res.ok) {
            return await res.json();
        }
        return Promise.reject(`Ошибка подключения к API ${res.status}`);
    } catch (error) {
        return Promise.reject(`Ошибка подключения к API ${error}`);
    }
};

