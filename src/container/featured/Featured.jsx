import React from 'react';

const Featured = () => {
    return (
        <div >
            <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center'>
                        <div className="card max-w-lg border-2 text-primary-content">
                            <div className="card-body">
                                <i className="fa-solid fa-signs-post text-4xl text-center"></i>
                                <h2 className="font-bold text-center text-2xl">Easy Post</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="card max-w-lg border-2 text-primary-content">
                            <div className="card-body">
                                <i class="fa-solid fa-globe text-4xl text-center"></i>
                                <h2 className="font-bold text-center text-2xl">Easy Connect</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                        <div className="card max-w-lg border-2 text-primary-content mt-4">
                            <div className="card-body">
                                <i class="fa-solid fa-box-archive text-4xl text-center"></i>
                                <h2 className="font-bold text-center text-2xl">Easy order receive</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
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
                    <div className='flex justify-center items-center mt-8'>
                        <div className="p-4 border-2 mr-4 rounded-l-3xl rounded-b-3xl hover:border-primary">
                            <div className="stat-title text-center text-4xl">50k</div>
                            <div className="stat-desc text-center text-3xl">Total Customer</div>
                        </div>
                        <div className="p-4 border-2 mr-4 rounded-l-3xl rounded-b-3xl hover:border-primary">
                            <div className="stat-title text-center text-4xl">50k</div>
                            <div className="stat-desc text-center text-3xl">Total Customer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Featured;