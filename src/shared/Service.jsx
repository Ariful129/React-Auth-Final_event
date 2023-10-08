import {BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id,name, img, price, short_description } = service;
    //console.log(id)


    return (
        <div className="card card-compact bg-[#0052FF26] shadow-xl" 
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" >
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-orange-700">{name}</h2>
                <p className='text-xm font-thin'>{short_description}</p> 
                {/* <span className="border-b-2 border-blue-700 w-3/4 mx-auto mt-2"></span> */}

                <div className="flex justify-evenly">
                    <div className='flex items-center text-xl font-semibold text-orange-700' > 
                       <span><BsCurrencyDollar></BsCurrencyDollar></span>
                       <h1>{price}</h1>
                    </div>
                    
                    <Link to={`/details/${id}`}>
                       <button className=" py-2 rounded-xl bg-black text-white px-6" data-aos="flip-left" >Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;