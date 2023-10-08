
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div className="relative w-full h-full ">

      {/* Move the text and input div inside the slider */}
      <AwesomeSlider className='h-[650px] '>
        <div className="w-full h-full relative  ">
          <img
            src="https://i.ibb.co/x1yfF3J/banner1.jpg"
            alt=""
            className="w-full h-full object-cover "
          />
          
          {/* Absolute positioning for the text and input */}
          <div className="absolute top-40 md:top-55 left-0 w-full text-center mt-4">
            <h2 className="text-2xl md:text-3xl font-bold" data-aos="zoom-in"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000" >
              Celebrate Your Love with a Perfect Wedding
            </h2>
            <div className="flex justify-center mt-4 ">
              <input className="border-2 p-2 mr-2 w-96 rounded-xl  " placeholder="Search..." />
              <button className="border-2 p-2 px-4 rounded-xl bg-black text-xl text-white">Search</button>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative  ">
          <img
            src="https://i.ibb.co/42JmLtQ/slider2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          
          {/* Absolute positioning for the text and input */}
          <div className="absolute top-40 md:top-60 left-0 w-full text-center mt-4">
            <h2 className="text-2xl md:text-3xl font-bold  text-teal-700 " data-aos="zoom-in"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
              Celebrate Your Love with a Perfect Wedding
            </h2>
            <div className="flex justify-center mt-4 ">
              <input className="border-2 p-2 mr-2 w-96 rounded-xl  " placeholder="Search..." />
              <button className="border-2 p-2 px-4 rounded-xl bg-green-500 text-xl text-white">Search</button>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative  ">
          <img
            src="https://i.ibb.co/jgwf359/slider3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          
          {/* Absolute positioning for the text and input */}
          <div className="absolute top-40 md:top-60 left-0 w-full text-center mt-4">
            <h2 className="text-2xl md:text-3xl font-bold  ">
              Celebrate Your Love with a Perfect Wedding
            </h2>
            <div className="flex justify-center mt-4 ">
              <input className="border-2 p-2 mr-2 w-96 rounded-xl  " placeholder="Search..." />
              <button className="border-2 p-2 px-4 rounded-xl bg-green-500 text-xl text-white">Search</button>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative  ">
          <img
            src="https://i.ibb.co/x1yfF3J/banner1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          
          {/* Absolute positioning for the text and input */}
          <div className="absolute top-40 md:top-55 left-0 w-full text-center mt-4">
            <h2 className="text-2xl md:text-3xl font-bold  ">
              Celebrate Your Love with a Perfect Wedding
            </h2>
            <div className="flex justify-center mt-4 ">
              <input className="border-2 p-2 mr-2 w-96 rounded-xl  " placeholder="Search..." />
              <button className="border-2 p-2 px-4 rounded-xl bg-green-500 text-xl text-white">Search</button>
            </div>
          </div>
        </div>
        
        {/* Add more slides as needed */}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
