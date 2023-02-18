import React, { useEffect, useState } from "react";
import { IButton } from "./Button";

import styles from "./button.module.css";
import fbLogo from "../../images/fb.svg";
import vkLogo from "../../images/vk.svg";
import igLogo from "../../images/ig.svg";
import twLogo from "../../images/tw.svg";

type socials = "facebook" | "vk" | "instagram" | "twitter";

interface IShareButton {
    type?: socials;
}

const ShareButton = (props: IShareButton & IButton) => {
    const [btnStyle, setButtonStyle] = useState<string>("");
    const [imgSrc, setImgSrc] = useState<string>("");
    const [altText, setAltText] = useState<string>("");

    useEffect(() => {
        switch (props?.type) {
            case "facebook": {
                setButtonStyle(styles.fb);
                setImgSrc(fbLogo);
                setAltText("facebook share button");
                break;
            }
            case "vk": {
                setButtonStyle(styles.vk);
                setImgSrc(vkLogo);
                setAltText("vk share button");
                break;
            }
            case "instagram": {
                setButtonStyle(styles.ig);
                setImgSrc(igLogo);
                setAltText("instagram share button");
                break;
            }
            case "twitter": {
                setButtonStyle(styles.tw);
                setImgSrc(twLogo);
                setAltText("twitter share button");
                break;
            }
            default: {
                return;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <button
            className={`${styles.share_button} ${btnStyle}`}
            onClick={props.onClick}
            disabled={props?.disabled}
        >
            <img src={imgSrc} alt={altText} />
        </button>
    );
};

export default ShareButton;
