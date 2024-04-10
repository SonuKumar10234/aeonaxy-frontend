import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faSquareFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='max-w-7xl mx-auto text-white px-4 sm:px-6'>

                <div className='py-16'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-y-12 lg:gap-x-8 lg:auto-rows-min lg:grid-flow-col '>
                        {/* logo */}
                        <div className='col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-1'>
                            <p className='text-2xl text-pink-800 font-medium'>Dribbble</p>
                            <p className='text-sm text-gray-500 my-4'>Dribbble is the world's leading community for creative to share, grow, and get hired.</p>
                            <div className='flex items-center gap-4 text-gray-600'>
                                <div className='hover:text-gray-400 cursor-pointer'>
                                    <FontAwesomeIcon icon={faDribbble} />
                                </div>
                                <div className='hover:text-gray-400 cursor-pointer'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div className='hover:text-gray-400 cursor-pointer'>
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                </div>
                                <div className='hover:text-gray-400 cursor-pointer'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className='hover:text-gray-400 cursor-pointer'>
                                    <FontAwesomeIcon icon={faPinterest} />
                                </div>
                            </div>
                        </div>

                        {/* main content */}
                        <div className='mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 col-span-6 lg:col-span-12 lg:col-span-10 gap-8 lg:col-start-3 lg:row-start-1 lg:col-start-3'>
                            <div className='gap-y-12 sm:gap-x-8 grid grid-cols-1 sm:grid-cols-2 sm:col-span-2'>
                                <div>
                                    <h3 className="text-sm text-gray-900 font-semibold">For Designers</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Go Pro!</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Explore design work</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design blog</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Overtime podcast</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Playoffs</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Weekly Warm-Up</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Refer a Friend</Link>to={'/'}                                 </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Code of conduct</Link>to={'/'}                                 </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm text-gray-900 font-semibold">Hire Designers</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Post a job opening</Link>
                                        </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Post a freelance project</Link>
                                        </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Search for designers</Link>
                                        </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Brand</Link>
                                        </li>
                                        <li className="text-sm">
                                            <Link to={'/'} className="text-gray-500 hover:text-gray-400">Advertise with us</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div>
                                <h3 className='text-sm text-gray-900 font-semibold'>Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">About</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Careers</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Support</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Media kit</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Testimonials</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">API</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Terms of service</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Privacy policy</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Cookie policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm text-gray-900 font-semibold">Directories</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design jobs</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Designers for hire</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Freelance designers for hire</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Tags</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Places</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design assets</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Dribbble Marketplace</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Creative Market</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Fontspring</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Font Squirrel</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='text-sm text-gray-900 font-semibold'>Design Resources</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Freelancing</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design Hiring</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design Portfolio</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design Education</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Creative Process</Link>
                                    </li>
                                    <li className="text-sm">
                                        <Link to={'/'} className="text-gray-500 hover:text-gray-400">Design Industry Trends</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='py-10 text-center border-t border-gray-500 flex justify-between items-center w-full'>
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dribbble. All rights reserved.</p>
                    <p className='text-sm text-gray-600'><span className='font-bold'>20,501,853</span> shots dribbble <FontAwesomeIcon icon={faBasketball} className='text-pink-800'/></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;