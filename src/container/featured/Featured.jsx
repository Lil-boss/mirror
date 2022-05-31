import React from 'react';

const Featured = () => {
    return (
        <div >
            <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center'>
                        <div className="card max-w-lg bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="card max-w-lg bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card max-w-lg bg-primary text-primary-content mt-4">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='ml-8'>
                        <h1 className='text-5xl'>Featured</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam consequatur fugit voluptatum nihil vitae. Accusantium eligendi nihil, deserunt repellendus nostrum esse deleniti similique unde, aspernatur expedita, voluptatibus magni eveniet.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Total Page Views</div>
                                <div className="stat-value">89,400</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                        </div>
                        <div className="stats shadow ml-4">
                            <div className="stat">
                                <div className="stat-title">Total Page Views</div>
                                <div className="stat-value">89,400</div>
                                <div className="stat-desc">21% more than last month</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;