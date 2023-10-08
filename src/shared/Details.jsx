import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";


const Details = () => {
    const details=useLoaderData();

    const {id}=useParams();
    const idInt=parseInt(id);
   
    const single_det=details.find(job =>job.id===idInt)
    //console.log(single_det.name) 
   
    return (
        <div>
             <Helmet>
                <title>Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className=" mt-4  text-center space-y-4 shadow-2xl p-4 shadow-cyan-500/50">
                 <img  className="w-3/4 mx-auto h-[400px]" src={single_det.img} alt=""  />
                 <p className="md:text-4xl text-lime-600 font-semibold">{single_det.name}</p>
                 <div className="border-b-2 border-blue-700 w-1/2 mx-auto mt-4"></div>

                 <p className="text-2xl">{single_det.full_description}</p>
            </div>
        </div>
    );
};

export default Details;