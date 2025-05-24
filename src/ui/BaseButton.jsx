import styles from '../styles/Ui.module.sass';

const BaseButton = ({ children, className, onclick }) => {
    const objectClassName = `${styles.base_button} ${className}`;

    return (
        <button onClick={() => onclick()} className={objectClassName}>
            { children }
        </button>
    );
};

export default BaseButton;