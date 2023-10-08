import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";



const Galary = () => {
    return (
        <div>
             <Helmet>
                <title>Galary</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-center mt-4  font-semibold text-emerald-600 text-4xl border-2 bg-slate-300 rounded-xl p-4 mb-4">Wedding Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
                <div className="border-4"><img src="https://i.ibb.co/42JmLtQ/slider2.webp" alt="" /></div>
            </div>
        </div>
    );
};

export default Galary;