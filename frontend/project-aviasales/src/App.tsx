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
import rocketAviasales from "./images/rocket.svg";
import Button from "./components/Button/Button";

const App = () => {
    const email = useSelector((store) => store.email);
    const error = useSelector((store) => store.emailError);
    const successEmail = useSelector((store) => store.saveSuccess);

    const dispatch = useDispatch();

    const [cardOne, setCardOne] = useState<boolean>(true);
    const [cardSecond, setCardSecond] = useState<boolean>(false);
    const [shareCount, setShareCount] = useState<number>(0);
    const [secondStep, setSecondStep] = useState<boolean>(false);
    const [shareError, setShareError] = useState<string>("");

    const btnHandle = () => {
        dispatch(checkEmail(email));
    };

    const handleTestShare = () => {
        //для теста - если пользователь нажал на кнопку,
        //считаем, что он поделился
        setShareCount(shareCount + 1);
    };

    const handleShared = () => {
        if (shareCount > 0) {
            setSecondStep(true);
            setShareError("");
        } else setShareError("Надо поделиться");
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
            <div className={`${styles.wrapper_flex}`}>
                <div>
                    <div>
                        <div
                            className={`${styles.text} ${styles.text_large} ${styles.text_upper_case}`}
                        >
                            {secondStep
                                ? "Класс! Теперь ты"
                                : "Все круто! Теперь"}
                        </div>
                        <div
                            className={`${styles.text} ${styles.text_large} ${styles.text_gradient} ${styles.text_upper_case}`}
                        >
                            {secondStep
                                ? "Участвуешь в конкурсе"
                                : "Выигрывай путешествие"}
                        </div>
                        <div
                            className={`${styles.text} ${styles.text_medium} ${styles.m_t_45}`}
                        >
                            {secondStep ? (
                                <>
                                    Ты прошел все наши карты, но ты всегда
                                    <br />
                                    можешь вызвать inDriver по-настоящему, для
                                    <br />
                                    этого переходи по ссылке!
                                </>
                            ) : (
                                <>
                                    Чтобы участвовать в розыгрыше
                                    <br />
                                    путешествия, оставь актуальную почту
                                    <br />и поделись с друзьями
                                </>
                            )}
                        </div>
                    </div>
                    {secondStep ? (
                        <div className={`${styles.wrapper_half} ${styles.m_t_45}`}>
                            <Button>Пройти игру заново</Button>
                        </div>
                    ) : (
                        <div
                            className={`${styles.m_t_45} ${styles.wrapper_flex_24}`}
                        >
                            <div className={`${styles.wrapper_half}`}>
                                <Card
                                    n="1"
                                    active={cardOne}
                                    header="Оставь актуальный email"
                                    btnText="Я оставил"
                                    disabledBtn={
                                        email !== "" && error === ""
                                            ? false
                                            : true
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
                                    onClickHandle={handleShared}
                                >
                                    <div
                                        className={`${styles.wrapper_flex_center} ${styles.wrapper_for_flex_space}`}
                                    >
                                        <ShareButton
                                            onClick={handleTestShare}
                                            type="facebook"
                                        />
                                        <ShareButton
                                            onClick={handleTestShare}
                                            type="vk"
                                        />
                                        <ShareButton
                                            onClick={handleTestShare}
                                            type="twitter"
                                        />
                                        <ShareButton
                                            onClick={handleTestShare}
                                            type="instagram"
                                        />
                                    </div>
                                    <div className={`${styles.error_box}`}>
                                        &nbsp;{shareError}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <img src={rocketAviasales} alt="rocket" />
                </div>
            </div>
        </div>
    );
};

export default App;
