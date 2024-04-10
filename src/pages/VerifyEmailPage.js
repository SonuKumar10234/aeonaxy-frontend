import React, { useEffect, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { useAuth } from '../contexts/auth-context';

const VerifyEmailPage = () => {

  const { loading, verifyEmailHandler } = useAuth();

  // const url = window.location.search;
  const location = useLocation();

  // Parse query parameters
  const urlParams = new URLSearchParams(location.search);

  // Get username and token from query parameters
  const username = urlParams.get('username');
  const token = urlParams.get('token');

  useEffect(() => {

    // Perform verification with username and token
    const verifyEmail = async (username, token) => {
      console.log(username)
      await verifyEmailHandler(username, token);

    }

    verifyEmail(username, token);


  }, [username, token, verifyEmailHandler]);

  return (
    <>
      {
        loading ? (
          <Loader />
        )
          :
          (
            <div className='max-w-2xl mx-auto px-6 lg:px-0 pt-16 text-center h-[calc(100vh_-_80px)] flex justify-center items-center'>
              <div className='flex flex-col gap-2'>

                < FontAwesomeIcon icon={faCircleCheck} size='2x' className='mb-2  text-green-600' />
                <p className='text-sm text-gray-500 mb-4'>Your email is successfully verified.</p>

              </div >
            </div >
          )
      }
    </>
  );
};

export default VerifyEmailPage;