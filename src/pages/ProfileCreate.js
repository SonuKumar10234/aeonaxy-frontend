import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { Loader } from '../components/Loader';

const ProfileCreate = () => {
    const { loading, currentUser, createProfileHandler } = useAuth();
    const [userInfo, setUserInfo] = useState({
        image: '',
        address: ''
    });

    const navigate = useNavigate();

    const uploadImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setUserInfo(prev => ({ ...prev, image: file }));
        }

    }

    const inputHandler = e => {
        setUserInfo(prev => ({ ...prev, address: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (userInfo.image) {
            formData.append('image', userInfo.image);
        }

        formData.append('address', userInfo.address);
        formData.append('username', currentUser?.username);

        await createProfileHandler(formData);
        navigate('/select-options');

    }
    return (
        <>
            {!localStorage.getItem('loginDetails') && <Navigate to='/signup' />}
            {
                loading ? (
                    <Loader />
                )
                    :
                    (
                        <div className='max-w-lg mx-auto px-6 lg:px-0 pt-20'>
                            <div className='absolute top-[30px] left-[25px]'>
                                <p className='text-pink-500'>dribbble</p>
                            </div>
                            <h2 className='text-2xl font-bold mb-2'>Welcome! Let's create your profile</h2>
                            <span className='text-base text-gray-500 text-[15px]'>Let others get to know you better! You can do these later</span>


                            <form className='mt-10' onSubmit={handleSubmit}>
                                <h2 className='mb-4 font-bold'>Add an avatar</h2>
                                <div className='flex gap-4 sm:gap-10 flex-col sm:flex-row'>

                                    {/* image container */}
                                    <div className='w-32 h-32 rounded-full border-2 border-dashed border-gray-200 flex justify-center items-center'>
                                        {
                                            userInfo.image ?
                                                <img src={URL.createObjectURL(userInfo.image)} className='w-full h-full object-cover object-center rounded-full' alt='profile' />
                                                :
                                                <FontAwesomeIcon icon={faCamera} />
                                        }
                                    </div>

                                    {/* Choose image */}
                                    <div className='flex flex-col gap-2 mt-4'>
                                        <label htmlFor='image' className='border border-gray-200 py-2 text-center cursor-pointer font-medium rounded-md w-36 max-w-full block'>Choose image</label>
                                        <input type='file' id='image' hidden onChange={uploadImage} />
                                        <span className='text-gray-500 text-[15px] cursor-pointer'><FontAwesomeIcon icon={faAngleRight} /> Or choose one of our defaults</span>
                                    </div>

                                </div>

                                <div className='mt-12'>
                                    <label className='block text-start font-bold mb-6'>Add your location</label>
                                    <input type='text' placeholder='Enter a location' className='mb-2 font-semibold outline-none' value={userInfo.address} onChange={inputHandler} />
                                    <hr className='border-gray-200' />
                                </div>
                                <button
                                    type='submit'
                                    className='inline-flex justify-center items-center outline-none rounded-md text-base text-white h-10 min-w-52 bg-pink-400  mt-6 sm:mt-12  disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500'
                                    disabled={userInfo?.address?.trim().length === 0}
                                >
                                    Next
                                </button>
                            </form>

                        </div>
                    )
            }

        </>
    )
}

export default ProfileCreate;