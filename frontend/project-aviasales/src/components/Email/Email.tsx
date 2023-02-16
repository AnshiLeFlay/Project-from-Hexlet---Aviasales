import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_EMAIL } from "../../services/actions";

import styles from "./email.module.css";

const Email = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const emailRegex =
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email !== "") {
            if (email.match(emailRegex)) {
                setError("");
                dispatch({ type: CHANGE_EMAIL, email: email });
            } else {
                setError("Неверный формат почты");
            }
        } else setError("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    return (
        <div className={`${styles.wrapper}`}>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${styles.email}`}
                placeholder="Ввести email"
                type="text"
            />
            <div className={`${styles.error}`}>{error}</div>
        </div>
    );
};

export default Email;
