import React from 'react';
import banner from "../../images/web-design-3411373__340.webp"
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={banner} className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Drive More Customers Through Digital</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                        <button className="btn bg-white text-black mx-4 border-[1px] hover:bg-primary hover:text-white">Sign up for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;