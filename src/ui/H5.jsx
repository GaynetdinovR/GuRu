import styles from '../styles/Ui.module.sass';

const H5 = ({children, className}) => {
    const objectClassName = `${className} ${styles.h5}`;
    return (
        <h5 className={objectClassName}>{children}</h5>
    );
};

export default H5;