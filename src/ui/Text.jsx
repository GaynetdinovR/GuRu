import styles from '../styles/Ui.module.sass';

const Text = ({children, className}) => {
    const objectClassName = `${styles.text} ${className}`;

    return (
        <p className={objectClassName}>
            {children}
        </p>
    );
};

export default Text;