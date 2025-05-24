import styles from '../../styles/components/Header.module.sass';
import BaseButton from "../../ui/BaseButton";
import {Link} from "react-router-dom";
import {beSoonNotif} from "../../scripts/notifications";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to={'/'}>GuRu | RuEGE</Link>
            </div>

            <div className={styles.header__right_container}>
                {
                    window.innerWidth > 768 ? (<div className={styles.header__phone_number}>
                        <div>По всем вопросам:</div>
                        <a href="tel:89907703322">+7 990 770-33-22</a>
                    </div>) : (<></>)
                }

                <BaseButton onclick={beSoonNotif} className={styles.header__button}>
                    Попробовать
                </BaseButton>
            </div>
        </header>
    );
};

export default Header;