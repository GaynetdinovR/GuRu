import { createBrowserRouter } from "react-router-dom";
import Template from "../ui/Template.jsx";

import HomePage from "./pages/HomePage.jsx";
import UserAgreementPage from "./pages/UserAgreementPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Template>
                <HomePage />
            </Template>
        )
    },
    {
        path: "/user_agreement",
        element: (
            <Template>
                <UserAgreementPage />
            </Template>
        )
    },
    {
        path: "/privacy_policy",
        element: (
            <Template>
                <PrivacyPolicyPage />
            </Template>
        )
    },
]);

export default router;
