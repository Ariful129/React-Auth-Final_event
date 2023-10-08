import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContex } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const { user} = useContext(AuthContex);
    return (
        <div>
             <Helmet>
                <title>Profile</title>
            </Helmet>
        <Navbar></Navbar>
        <h1 className="text-center mt-20  font-semibold text-emerald-600 text-4xl border-2 bg-slate-300 rounded-xl p-4 mb-4">User Profile</h1>
        <div className="text-center mt-10 bg-black text-white rounded-full ">
            <p className="text-2xl ">Name: {user.displayName} </p><br></br>
            <p className="text-2xl">Email: {user.email}  </p><br></br>
        </div>
    </div>
    );
};

export default Profile;