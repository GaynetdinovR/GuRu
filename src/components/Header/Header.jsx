import { Link } from "react-router-dom";

import BasedButton from "../../ui/BasedButton";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

import styles from '../../styles/components/Header.module.sass';

import {beSoonNotif} from "../../scripts/notifications";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to={'/'}>GuRu | RuEGE</Link>
            </div>

            <div className={styles.header__right_container}>
                { (window.innerWidth > 768) ? (<PhoneNumber/>) : null }

                <BasedButton onclick={beSoonNotif} className={styles.header__button}>
                    Попробовать
                </BasedButton>
            </div>
        </header>
    );
};

export default Header;