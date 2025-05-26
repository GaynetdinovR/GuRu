import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";

import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <Banner/>
            <Benefits/>
        </main>
    );
};
export default Home;
