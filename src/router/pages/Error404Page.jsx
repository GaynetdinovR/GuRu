import H1 from "../../ui/H1";
import H4 from "../../ui/H4";

import styles from '../../styles/Ui.module.sass';

const Error404Page = () => {
    return (
        <main className={styles.error_container}>
            <H1>ERROR 404 :(</H1>
            <H4>Something went wrong</H4>
        </main>
    );
};

export default Error404Page;