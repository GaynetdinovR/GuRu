import styles from '../../styles/components/Footer.module.sass';
import { Link, useLocation } from 'react-router-dom';

import { beSoonNotif } from "../../scripts/notifications.js";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

const Footer = () => {
    const contacts = [
        {src: './icons/telegram_logo.png', alt: 'tg_logo', href: 'https://t.me/guru_ege'},
        {src: './icons/vk_logo.png', alt: 'vk_logo', onClick: beSoonNotif},
        {src: './icons/market_logo.png', alt: 'market_logo', onClick: beSoonNotif},
    ]

    const links = [
        {text: 'Политика конфеденциальности', to: '/privacy_policy'},
        {text: 'Соглашение пользователя', to: '/user_agreement'},
        {text: 'Главная', to: '/'},
    ]

    const path = useLocation().pathname;

    return (
        <footer className={styles.footer}>
            <ul className={styles.footer__contacts}>
                {contacts.map(obj => {
                    const link = obj.href ?
                        (<a href={obj.href} target='_blank' className={styles.footer__contacts_link}>
                            <img src={obj.src} alt={obj.alt}/>
                        </a>) : (<a onClick={beSoonNotif} className={styles.footer__contacts_link}>
                            <img src={obj.src} alt={obj.alt}/>
                        </a>);

                    return <li className={styles.footer__contacts_item}>
                        { link }
                    </li>
                })}
            </ul>

            <ul className={styles.footer__links}>
                {links.map(obj => {
                    if (obj.to === '/' && path === '/') return;

                    return <li className={styles.footer__links_item}>
                        <Link to={obj.to} className={styles.footer__links_link}>
                            {obj.text}
                        </Link>
                    </li>
                })}
            </ul>

            { (window.innerWidth <= 768) ? (<PhoneNumber/>) : null }

            <span className={styles.footer__copyright}>GuRu | RuEGE © 2025</span>
        </footer>
    );
};

export default Footer;