import styles from '../../styles/components/Banner.module.sass';

import H2 from "../../ui/H2.jsx";
import Text from "../../ui/Text.jsx";
import BasedButton from "../../ui/BasedButton.jsx";

import { beSoonNotif } from "../../scripts/notifications.js";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__banner}>
                <img src="./content/banner_1.jpg" alt="banner"/>
            </div>
            <div className={styles.banner__content}>
                <H2 className={styles.banner__title}>Твой помощник в подготовке к ЕГЭ</H2>
                <Text className={styles.banner__text}>Теория, тесты, задания и многое другое</Text>
                <BasedButton onclick={beSoonNotif} className={styles.banner__button}>Начать подготовку</BasedButton>
            </div>
        </section>
    );
};

export default Banner;