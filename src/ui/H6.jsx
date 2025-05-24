import styles from '../styles/Ui.module.sass';

const H6 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h6}`;
    return (
        <h6 className={objectClassName}>{children}</h6>
    );
};

export default H6;