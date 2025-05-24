import styles from '../styles/Ui.module.sass';

const H4 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h4}`;
    return (
        <h4 className={objectClassName}>{children}</h4>
    );
};

export default H4;