import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Banner";
import Navbar from "../shared/Navbar";
import Service from "../shared/Service";
import Footer from "../shared/Footer";
import { useEffect, useState } from "react";
import Section1 from "../shared/Section1";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const services = useLoaderData()
    //console.log(services)
    const [data, setData] = useState([])

    //for Insprintion
    useEffect(() => {
        fetch('latest.json')
            .then(res => res.json())
            .then(da => setData(da))
    }, [])

    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className=" mt-24 mb-1 text-center font-semibold bg-slate-300 p-4 rounded-xl">
                <h1 className="text-3xl">Services <span className="text-orange-700">Featured</span></h1>
                <p className="md:text-xm  font-thin">We make your events smart & impactful by personalised event management services.</p>
                {/* <div className="border-b-2 border-blue-700 w-3/5 mx-auto mt-2"></div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {
                    services.map(serve => <Service key={serve.id} service={serve}></Service>)
                }
            </div>

            <div className=" mt-14 mb-1 text-center font-semibold  bg-slate-200 p-4 rounded-2xl">
                <h1 className="text-3xl">THE LATEST <span className="text-orange-700">INSPIRATION</span></h1>
                <p className="md:text-xm font-thin">Descover the best Ideas, Tips and Articals to Inspring your Wedding</p>
                {/* <div className="border-b-2 border-blue-700 w-3/5 mx-auto mt-2"></div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {
                data.map(x => <Section1 key={x.id} data={x} />)
                }
            </div>

            <div className=" mt-14 mb-6 text-center font-semibold" >
                <h1 className="text-2xl italic  bg-gray-300 p-6 rounded-xl mb-1"><span className="text-green-400">Recent</span> <span className="text-orange-700">Wedding</span> Update</h1>
                <span><img className="w-full h-[550px] rounded-xl"  
            data-aos="zoom-in"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000" src="https://i.ibb.co/x1yfF3J/banner1.jpg" alt="" /></span>
            </div>

            <Footer ></Footer>
        </div>
    );
};

export default Home;