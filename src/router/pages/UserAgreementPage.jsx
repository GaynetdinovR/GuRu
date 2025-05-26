import UserAgreement from "../../components/UserAgreement/UserAgreement";
import {useEffect} from "react";

const UserAgreementPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <UserAgreement/>
        </main>
    );
};

export default UserAgreementPage;