


const Section1 = ({data}) => {
       const {img,Mr_Mrs_name,type,Location}=data;
    return (
        <div>
             <div className="card card-compact bg-[#0052FF26] shadow-2xl " 
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">

            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-xl text-orange-700">MR & Mrs:{Mr_Mrs_name}</h2>
                <p className='text-xm text-center font-semibold'>{type}</p>
                <p className='text-xm text-center text-green-700  font-thin'>{Location}</p> 
               
            </div>
        </div>
        </div>
    );
};

export default Section1;