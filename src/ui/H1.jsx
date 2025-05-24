import styles from '../styles/Ui.module.sass';

const H1 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h1}`;
    return (
        <h1 className={objectClassName}>{children}</h1>
    );
};

export default H1;