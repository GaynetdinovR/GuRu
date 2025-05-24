import styles from '../../styles/components/Benefits.module.sass';
import H2 from "../../ui/H2";
import H4 from "../../ui/H4";
import Text from "../../ui/Text";
import H6 from "../../ui/H6";

const Benefits = () => {
    const benefits = [
        {title: 'Без подписки', text: 'Полный доступ ко всем материалам без необходимости подписки.', icon: './icons/subscribe.png'},
        {title: 'Оффлайн-доступ', text: 'Учитесь в любое время и в любом месте благодаря оффлайн-доступу.', icon: './icons/offline.png'},
        {title: 'Актуальные задания', text: 'Только актуальные задания и тесты для подготовки к ЕГЭ 2025.', icon: './icons/adaptation.png'},
        {title: 'Персональная статистика', text: 'Следите за своим прогрессом с помощью персональной статистики.', icon: './icons/statistic.png'},
    ];

    return (
        <section className={styles.benefits}>
            <H4 className={styles.benefits__subtitle}>Почему стоит выбрать нас</H4>
            <H2 className={styles.benefits__title}>Наши преимущества</H2>
            <Text className={styles.benefits__text}>GuRu EGE – ваш надежный помощник в подготовке к ЕГЭ с множеством бесплатных функций.</Text>
            <ul className={styles.benefits__list}>
                {benefits.map(item => {
                    return (
                        <li className={styles.benefits__item}>
                            <div className={styles.benefits__item_img}>
                                <img src={item.icon} alt="icon"/>
                            </div>
                            <H6 className={styles.benefits__item_title}>{item.title}</H6>
                            <Text className={styles.benefits__item_text}>{item.text}</Text>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default Benefits;