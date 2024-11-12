import { Helmet } from "react-helmet-async";


const Profile = () => {
    return (
        <div className="mt-[88px] ml-[300px]">
            <Helmet>
                <title>Profile | Auth Private Route</title>
            </Helmet>
            <h1>Update your profile</h1>
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
        </div>
    );
};

export default Profile;