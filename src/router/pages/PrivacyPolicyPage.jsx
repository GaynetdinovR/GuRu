import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import {useEffect} from "react";

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <PrivacyPolicy/>
        </main>
    );
};

export default PrivacyPolicyPage;