import React from 'react';
import banner from "../../images/img.png"
import "./banner.css"
const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-100 app__banner text-white">
                <div className="hero-content flex-col lg:flex-row-reverse w-4/5 mx-auto ">
                    <img alt='' src={banner} className="max-w-sm rounded" />
                    <div>
                        <h1 className="text-5xl font-bold">Drive More Customers Through Digital</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                        <button className="btn bg-[#27CEBE] text-white mx-4 border-[1px] hover:bg-primary">Sign up for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;