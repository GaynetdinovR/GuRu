import styles from '../../styles/components/Banner.module.sass';

import H2 from "../../ui/H2";
import Text from "../../ui/Text";
import BaseButton from "../../ui/BaseButton";
import {beSoonNotif} from "../../scripts/notifications";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__banner}>
                <img src="./content/banner_7.jpg" alt="banner"/>
            </div>
            <div className={styles.banner__content}>
                <H2 className={styles.banner__title}>Твой помощник в подготовке к ЕГЭ</H2>
                <Text className={styles.banner__text}>Теория, тесты, задания и многое другое</Text>
                <BaseButton onclick={beSoonNotif} className={styles.banner__button}>Начать подготовку</BaseButton>
            </div>
        </section>
    );
};

export default Banner;