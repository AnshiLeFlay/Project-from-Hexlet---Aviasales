import React, { useEffect, useState } from "react";

//components & functions
import Card from "./components/Card/Card";
import Email from "./components/Email/Email";
import ShareButton from "./components/Button/ShareButton";
import { useDispatch, useSelector } from "./services/hooks";
import { checkEmail } from "./services/actions";

//styles & images
import styles from "./app.module.css";
import "inter-ui/inter.css";
import aviasalesLogo from "./images/logo.png";

const App = () => {
    const email = useSelector((store) => store.email);
    const error = useSelector((store) => store.emailError);
    const successEmail = useSelector((store) => store.saveSuccess);

    const dispatch = useDispatch();

    const [cardOne, setCardOne] = useState<boolean>(true);
    const [cardSecond, setCardSecond] = useState<boolean>(false);

    const btnHandle = () => {
        dispatch(checkEmail(email));
    };

    useEffect(() => {
        if (successEmail === true) {
            setCardOne(false);
            setCardSecond(true);
        }
    }, [successEmail]);

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
                        active={cardOne}
                        header="Оставь актуальный email"
                        btnText="Я оставил"
                        disabledBtn={
                            email !== "" && error === "" ? false : true
                        }
                        onClickHandle={btnHandle}
                    >
                        <Email />
                    </Card>
                </div>
                <div className={`${styles.wrapper_half}`}>
                    <Card
                        n="2"
                        active={cardSecond}
                        header="Поделись с друзьями"
                        btnText="Я поделился"
                    >
                        <div className={`${styles.wrapper_flex_center} ${styles.wrapper_for_flex_space}`}>
                            <ShareButton type="facebook" />
                            <ShareButton type="vk" />
                            <ShareButton type="twitter" />
                            <ShareButton type="instagram" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default App;
