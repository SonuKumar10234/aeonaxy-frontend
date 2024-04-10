import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { Loader } from '../components/Loader';

const SendEmailPage = () => {
    const { loading, currentUser, sendEmailHandler } = useAuth();
    const { username, email } = currentUser;


    useEffect(() => {
        const sendEmail = async (username, email) => {
            await sendEmailHandler(username, email);
        }
        sendEmail(username, email);
    }, [username, email]);

    return (
        <>
            {
                loading ? (
                    <Loader />
                )
                    :
                    (
                        <div className='max-w-2xl mx-auto px-6 lg:px-0 pt-16 text-center h-[calc(100vh_-_80px)]'>
                            <div className='mb-4'>
                                <h2 className='text-3xl font-bold mb-2'>Please verify your email...</h2 >
                                <FontAwesomeIcon icon={faEnvelope} size='6x' className='mb-2' />
                                <p className='text-sm text-gray-500 mb-4'>Please verify your email address. We've sent a confirmation email to:.</p>
                                <p className='text-sm text-gray-800 font-bold mb-4'>{currentUser.email}</p>
                                <p className='text-sm text-gray-500'>Click the information link in that email to begin using Dribbble.</p>
                            </div >

                            <p className='text-sm text-gray-500 mb-4'>Didn't receive the email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can <Link className='text-pink-500 font-medium'>resend the confirmation email</Link>. </p>
                            <p className='text-sm text-gray-500'>Wrong email address? <Link to='/' className='text-pink-500 font-medium'>Change it.</Link></p>
                        </div >
                    )
            }
        </>
    )
}

export default SendEmailPage;