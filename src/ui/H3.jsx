import styles from '../styles/Ui.module.sass';

const H3 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h3}`;
    return (
        <h3 className={objectClassName}>{children}</h3>
    );
};

export default H3;