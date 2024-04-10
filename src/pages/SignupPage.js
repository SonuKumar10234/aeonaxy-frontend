import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../components/Loader';

const SignupPage = () => {

  const navigate = useNavigate();
  const { loading, inputLoading, error, checkUserNameHandler, signupHandler } = useAuth();

  const [userConfig, setUserConfig] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const inputHandler = (e, inputName) => {
    setUserConfig(prev => ({
      ...prev,
      [inputName]: e.target.value,
    }));

  };

  const handleUsernameBlur = () => {
    if (userConfig.username.trim() !== '') {
      checkUserNameHandler(userConfig.username);
    }
  };


  const formSubmitHandler = async e => {
    e.preventDefault();

    await signupHandler(userConfig);
    navigate('/create-profile');
    setUserConfig({
      name: '',
      username: '',
      email: '',
      password: '',
    });


  };


  return (
    <>
      {
        loading ? (
          <Loader />
        )
          :
          (
            <div className="flex overflow-hidden h-full">
              <div className='hidden md:block md:relative w-[680px] bg-[#f2d184] text-[#866118]'>
                <div className="flex flex-col justify-between h-full">
                  <a className='absolute top-[40px] left-[25px]'>dribbble</a>
                  <div className='mt-20 ml-6'>
                    <p className='text-xl font-semibold'>Discover the world's top </p>
                    <p className='text-xl font-semibold'>Designers & Creatives.</p>
                  </div>
                  <img src='https://res.cloudinary.com/dhzhqw1dy/image/upload/v1712728625/auth_s8ysvl.png' alt="auth" className='w-full' />
                  <a className='mb-6 ml-6'>Art by Peter Tarka</a>
                </div>
              </div>
              <div className='flex flex-col justify-center w-full pt-4'>

                <div className='flex items-center gap-2 ml-auto mr-6 text-sm'>
                  Already a member?
                  <Link to={'/'} className='text-blue-600'>
                    Sign In
                  </Link>
                </div>


                <form className='w-full max-w-2xl mx-auto py-[30px] px-[60px]' onSubmit={formSubmitHandler}>
                  <h2 className='text-2xl font-bold text-stone-700 mb-4'>Sign up to Dribbble</h2>
                  {
                    error && <p className={`text-sm ${error !== 'Username available' && error !== '' ? 'text-red-500' : 'text-green-500'}`}>{error}</p>
                  }
                  <div className='flex flex-col md:flex-row md:gap-4 mt-8'>
                    <div className='w-full relative'>
                      <label className='block text-start font-medium mb-2'>Name</label>
                      <input
                        type='text'
                        value={userConfig.name}
                        placeholder="Enter name"
                        onChange={e => inputHandler(e, 'name')}
                        className='w-full px-4 h-10 rounded-md border bg-gray-100 outline-none'
                      />
                    </div>

                    <div className='w-full relative mt-8 md:mt-0'>
                      <label className={`block text-start font-medium mb-2`}>
                        {error !== 'Username available' && error !== '' && <FontAwesomeIcon icon={faTriangleExclamation} className='text-red-500 mr-1' />}
                        Username
                      </label>
                      <input
                        type='text'
                        value={userConfig.username}
                        placeholder="Enter username"
                        onChange={e => inputHandler(e, 'username')}
                        onBlur={handleUsernameBlur}
                        className={`w-full px-4 h-10 rounded-md border ${error !== 'Username available' && error !== '' ? 'bg-red-100' : 'bg-gray-100'} outline-none`}
                      />
                      {
                        inputLoading && <Loader style='absolute top-[37px] right-[7px]' />
                      }
                    </div>

                  </div>

                  <div className='w-full relative mt-8'>
                    <label className='block text-start font-medium mb-2'>Email</label>
                    <input
                      type='email'
                      value={userConfig.email}
                      placeholder='Enter Email'
                      onChange={e => inputHandler(e, 'email')}
                      className='w-full px-4 h-10 rounded-md border border-gray-50 bg-gray-100 outline-none'
                    />
                  </div>
                  <div className='w-full relative mt-8'>
                    <label className='block text-start font-medium mb-2'>Password</label>
                    <input
                      type='password'
                      value={userConfig.password}
                      placeholder='6+ characters'
                      onChange={e => inputHandler(e, 'password')}
                      className='w-full px-4 h-10 rounded-md border border-gray-50 bg-gray-100 outline-none'
                    />
                  </div>

                  <div className='flex gap-2 mt-8'>
                    <input type='checkbox' className='w-8 h-8 text-base' />
                    <span>Creating an account means you're okay with our <Link className='text-blue-600'>Terms of service, Privacy Policy,</Link> and our default <Link className='text-blue-600'>Notification Settings.</Link></span>
                  </div>

                  <button className='inline-flex justify-center items-center outline-none rounded-md text-base text-white h-10 min-w-52 bg-pink-400 mt-8'>Create Account</button>
                  <p className='text-sm text-gray-400 mt-6'>This site is protected by reCAPTCHA and the Google <Link className='text-blue-600'>Privacy Policy</Link> and <Link className='text-blue-600'>Terms of Service</Link> apply.</p>
                </form>
              </div>
            </div>
          )
      }
    </>
  );
}

export default SignupPage;
