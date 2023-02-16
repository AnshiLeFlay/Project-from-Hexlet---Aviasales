import React from "react";

//components
import Card from "./components/Card/Card";
import Email from "./components/Email/Email";

//styles & images
import styles from "./app.module.css";
import "inter-ui/inter.css";
import aviasalesLogo from "./images/logo.png";
import { useSelector } from "./services/hooks";

const App = () => {
    const email = useSelector((store) => store.email);
    const error = useSelector((store) => store.emailError);

    return (
        <div className="App">
            <div className={`${styles.wrapper_flex_center} ${styles.m_b_95}`}>
                <img src={aviasalesLogo} alt="aviasales-logo" />
                <span>авиасейлс</span>
            </div>
            <div>
                <div
                    className={`${styles.text} ${styles.text_large} ${styles.text_upper_case}`}
                >
                    Все круто! Теперь
                </div>
                <div
                    className={`${styles.text} ${styles.text_large} ${styles.text_gradient} ${styles.text_upper_case}`}
                >
                    Выигрывай путешествие
                </div>
                <div
                    className={`${styles.text} ${styles.text_medium} ${styles.m_t_45}`}
                >
                    Чтобы участвовать в розыгрыше
                    <br />
                    путешествия, оставь актуальную почту
                    <br />и поделись с друзьями
                </div>
            </div>
            <div className={`${styles.m_t_45} ${styles.wrapper_flex_24}`}>
                <div className={`${styles.wrapper_half}`}>
                    <Card
                        n="1"
                        active={true}
                        header="Оставь актуальный email"
                        btnText="Я оставил"
                        disabledBtn={ email !== '' && error === '' ? false : true }
                    >
                        <Email />
                    </Card>
                </div>
                <div className={`${styles.wrapper_half}`}>
                    <Card
                        n="2"
                        active={false}
                        header="Поделись с друзьями"
                        btnText="Я поделился"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
