import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faUpload, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [userMoadl, setUserModal] = useState(false);
    const { currentUser , logoutHandler} = useAuth();
  
    return (
        <div className='sticky top-0 flex justify-between items-center py-5 px-4 border-b border-gray-200 w-full bg-[white]'>



            <div className='flex gap-4 items-center'>
                <button className={` ${openMenu ? 'menu-open' : ''} nav-mob-burger lg:hidden`} onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className='mx-2 hidden sm:block'>
                    <Link to="/" className="flex items-center gap-4">
                        <span className="text-lg font-semibold">
                            Dribbble
                        </span>
                    </Link>
                </div>

                {/* Nav Items */}
                <nav className={`whitespace-nowrap fixed ${openMenu ? 'translate-x-0' : 'translate-x-full hidden'} !translate-x-0 transition-all bg-gray-50 lg:bg-white lg:sticky top-[80px] lg:top-0 right-0 w-full h-full  lg:block`}>
                    <ul className='flex gap-4 flex-col lg:flex-row p-5 lg:p-0'>
                        <li className='text-gray-500 hover:text-gray-400'><Link>Inspiration</Link></li>
                        <li className='text-gray-500 hover:text-gray-400'><Link>Find Work</Link></li>
                        <li className='text-gray-500 hover:text-gray-400'><Link>Learn Design</Link></li>
                        <li className='text-gray-500 hover:text-gray-400'><Link>Go Pro</Link></li>
                        <li className='text-gray-500 hover:text-gray-400'><Link>Hire Designers</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Search Bar */}
            <div className='flex items-center justify-end gap-4 relative'>
                <div className='w-full flex relative basis-36 '>
                    <input type='text' placeholder='Search' className='w-full border border-inherit rounded-md outline-none pl-10 pr-10 h-10 bg-gray-100' />
                    <FontAwesomeIcon icon={faSearch} className='absolute top-3 left-0 text-gray-400 mx-4' />
                </div>
                <div className='min-w-8 cursor-pointer flex justify-center'>
                    <FontAwesomeIcon icon={faShoppingBag} size='lg' className='text-gray-400' />
                </div>
                <div className='min-w-8'>
                    <span className="user-avatar cursor-pointer select-none" onClick={()=> setUserModal(!userMoadl)}>
                        {
                            currentUser && currentUser.image !== 'Not Available' ?
                            <img src={currentUser.image} alt="user" className="h-8 w-8 rounded-full object-cover" />
                            :
                            <img src="https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg" alt="user" className="h-8 w-8 rounded-full object-cover" />
                        }
                    </span>
                   <div className={` absolute whitespace-nowrap overflow-hidden top-[60px] right-0 lg:right-[15%] bg-[white] z-10 min-w-32 rounded-md`}>
                        <ul className={` ${userMoadl ? 'h-fit' : 'h-0'} transition-[height]`}>
                            <li className='border-b border-gray-200'><button className='text-sm text-gray-600 text-left font-medium pl-3 py-2 bg-gray-100 hover:bg-gray-200 w-full'><FontAwesomeIcon icon={faUser} className='mr-1'/> Profile </button></li>
                            <li className='block lg:hidden border-b border-gray-200'><button className='text-sm text-gray-600 text-left font-medium pl-3 py-2 bg-gray-100 hover:bg-gray-200 w-full'><FontAwesomeIcon icon={faUpload} className='mr-1'/> Upload</button></li>
                            <li className=''><button className='text-sm text-gray-600 text-left font-medium pl-3 py-2 bg-gray-100 hover:bg-gray-200 w-full' onClick={()=>logoutHandler()}><FontAwesomeIcon icon={faRightFromBracket} className='mr-1'/> Logout</button></li>
                        </ul>
                    </div>
                </div>
                <button
                    className="hidden py-2 px-4 text-white cursor-pointer rounded-md hover:bg-lightPrimary bg-pink-400 lg:flex items-center justify-center"
                >
                    Upload
                </button>
            </div>
        </div>
    )
}

export default Navbar;