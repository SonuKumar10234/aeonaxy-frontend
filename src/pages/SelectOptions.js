import React, { useState } from 'react';
import OptionCard from '../components/OptionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { Loader } from '../components/Loader';
import { options } from '../utils/constants';


const SelectOptions = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const navigate = useNavigate();
    const { loading, currentUser, selectOptionHandler } = useAuth();

    const optionHandler = (checked, id) => {

        let options = [...selectedOption];

        if (checked) {
            options = [...selectedOption, id];
        }
        else {
            options = selectedOption.filter(option => option !== id);
        }

        setSelectedOption(options);
    }

    const submitHandler = async () => {
        await selectOptionHandler({ username: currentUser.username, selectedOption });
        navigate('/verify-email');
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
                        <div className='px-6 lg:px-0 pt-20 text-center'>
                            <div className='absolute top-[30px] left-[25px] flex items-center gap-4'>
                               <p className='text-pink-500'>dribbble</p>
                               <button className='bg-gray-100 hover:bg-gray-200 min-w-10 min-h-10 rounded-md'><Link to={'/create-profile'}><FontAwesomeIcon icon={faAngleLeft} size='xs'/></Link></button>
                            </div>
                            <div className='mb-20'>
                                <h2 className='text-2xl font-bold mb-2'>What brings you to Dribbble?</h2>
                                <span className='text-sm text-gray-500'>Select the options that best describe you. Don't worry, you can explore other options later.</span>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'>
                                {
                                    options.map(data => (
                                        <div className='col-span-1 md:col-span-1' key={data.id}>
                                            <OptionCard option={data} optionHandler={optionHandler} cardId={data.id} />
                                        </div>
                                    ))
                                }


                            </div>
                            <p className='text-base font-semibold mt-4'>Anything else? You can select multiple</p>
                            <button
                                type='submit'
                                className='inline-flex justify-center items-center outline-none rounded-md text-base text-white h-10 min-w-52 bg-pink-400 mt-4 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500'
                                disabled={!selectedOption.length}
                                onClick={submitHandler}
                            >
                                Finish
                            </button>
                            <Link to={'/create-profile'} className='block text-sm text-gray-400 font-medium mt-2 link'>Or Press RETURN</Link>
                        </div>
                    )
            }
        </>
    )
}

export default SelectOptions