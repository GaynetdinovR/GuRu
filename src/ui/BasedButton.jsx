import styles from '../styles/Ui.module.sass';

const BasedButton = ({ children, className, onclick }) => {
    const objectClassName = `${styles.based_button} ${className}`;

    return (
        <button onClick={() => onclick()} className={objectClassName}>
            { children }
        </button>
    );
};

export default BasedButton;