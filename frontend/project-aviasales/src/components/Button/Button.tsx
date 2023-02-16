import React, { MouseEventHandler } from "react";

import styles from "./button.module.css";

interface IButton {
    children: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
}

const Button = (props: IButton) => {
    return (
        <button className={`${styles.button_default}`} onClick={props.onClick} disabled={props?.disabled}>
            {props.children}
        </button>
    );
};

export default Button;
