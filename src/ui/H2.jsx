import styles from '../styles/Ui.module.sass';

const H2 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h2}`;
    return (
        <h2 className={objectClassName}>{children}</h2>
    );
};

export default H2;