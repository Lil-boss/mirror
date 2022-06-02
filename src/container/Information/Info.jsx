import React from 'react';
import banner from "../../images/img2.png"
const Info = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={banner} className="max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Right people at the <br /> Right time.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                        <button className="btn bg-white text-black mx-4 border-[1px] hover:bg-primary hover:text-white">Sign up free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;