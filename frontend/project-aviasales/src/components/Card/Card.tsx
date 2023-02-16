import React from "react";

import Button from "../Button/Button";

import styles from "./card.module.css";

interface ICard {
    n: string;
    header: string;
    active?: boolean;
    children?: any;
    btnText: string;
    disabledBtn?: boolean;
}

const Card = (props: ICard) => {
    return (
        <div
            className={`${styles.card} ${
                props.active ? styles.card_active : styles.card_disabled
            } `}
        >
            <div className={`${styles.wrapper_flex} ${styles.text}`}>
                <span className={`${styles.card_number}`}>{props.n}</span>
                <span>{props.header}</span>
            </div>
            <div className={`${styles.wrapper100}`}>{props.children}</div>

            <Button
                onClick={() => console.log("clicked")}
                disabled={props?.disabledBtn}
            >
                {props.btnText}
            </Button>
        </div>
    );
};

export default Card;
