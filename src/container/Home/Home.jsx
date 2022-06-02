import React from 'react';
import Banner from "../Banner/Banner"
import Featured from "../featured/Featured"
import Footer from '../Footer/Footer';
import Info from "../Information/Info"
import image from "../../images/img3.png"
const Home = () => {

    return (
        <div className="w-4/5 mx-auto">
            <Banner />
            <Featured />
            <Info />
            {/* /who can use */}
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl'>Who can use Mirror?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, omnis?</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-20'>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <i class="fa-solid fa-briefcase text-4xl text-center"></i>
                                <h2 className="text-center text-3xl">Social Business</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <i class="fa-solid fa-industry text-4xl text-center"></i>
                                <h2 className="text-center text-3xl">Industries</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <i class="fa-solid fa-ranking-star text-4xl text-center"></i>
                                <h2 className="text-center text-3xl">StartUp</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* easy to use mobile */}
            <div>
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                        <img alt='' src={image} className="max-w-lg h-96 rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* /pricing */}
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl'>Simple pricing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, omnis?</p>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-20'>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;