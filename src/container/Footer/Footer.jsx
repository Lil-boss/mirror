import React from 'react';
import mirror from "../../images/mirror.png"
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-100 text-base-content mt-32">
                <div className='w-32'>
                    <span className="text-2xl mb-8">About US</span>
                    <p className='text-xl font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className='w-34'>
                    <span className="text-2xl mb-8">Contact Info</span>
                    <p className='text-xl font-thin'>Address: Dhaka Bangladesh</p>
                    <p className='text-xl font-thin'>Email: Mirror@gmail.com</p>
                    <p className='text-xl font-thin'>phone: (+880) 1860854364</p>
                </div>
                <div>
                    <span className="text-2xl mb-8">Important Link</span>
                    <a href='/' className="text-xl font-thin underline">Terms of use</a>
                    <a href='/' className="text-xl font-thin underline">Privacy policy</a>
                    <a href='/' className="text-xl font-thin underline">Cookie policy</a>
                </div>
                <div className='w-32'>
                    <span className="text-2xl mb-8">Newsletter</span>
                    <p className='text-xl font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, minima.</p>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={mirror} className="w-10" alt="" />
                    <p className='text-2xl'>Mirror App</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <i class="fab fa-linkedin text-4xl text-blue-400"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <i class="fab fa-facebook-square text-4xl text-blue-600"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <i class="fab fa-instagram-square text-4xl text-red-400"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;