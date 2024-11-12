import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="px-[136px] mt-[88px]">
            <Helmet>
                <title>Home | Auth Private Route</title>
            </Helmet>
            <h1>Home</h1>
        </div>
    );
};

export default Home;