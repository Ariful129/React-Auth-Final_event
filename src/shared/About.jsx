import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";


const About = () => {
    return (
        <div>
             <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-center mt-20  font-semibold text-emerald-600 text-4xl border-2 bg-slate-300 rounded-xl p-4 mb-4">About Page</h1>
            <div className="text-center mt-4 bg-black text-white">
                <p className="text-2xl ">Name: </p><br></br>
                <p className="text-2xl">Location: </p><br></br>
                <p className="text-2xl">Contact: </p><br></br>
            </div>
        </div>
    );
};

export default About;