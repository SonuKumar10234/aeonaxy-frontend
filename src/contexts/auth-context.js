import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/constants';
import { signupService, createProfileService, selectOptionService, sendEmailService, verifyEmailService, checkUsernameService } from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const localStorageLoggedInUser = JSON.parse(localStorage.getItem("loginDetails"));

  const [currentUser, setCurrentUser] = useState(localStorageLoggedInUser?.user);
  const [error, setError] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [inputLoading, setInputLoading] = useState(false);

  const checkUserNameHandler = async (username) => {
    setInputLoading(true);
    try {
      const response = await checkUsernameService(username);
      if(response.data.status === 202){
         setError(response.data.message);
      }else if(response.data.status === 500){
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setInputLoading(false);
    }
  };

  const signupHandler = async ({ name, username, email, password }) => {
    setIsLoading(true);
    try {
      const response = await signupService(name, username, email, password);
      const { data: { createdUser, status }, } = response;

      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser })
        );
        setCurrentUser(createdUser);
         toast.success(
          `Account Created Successfully,
           Welcome ${createdUser.name} `,
          TOAST_CONFIG
        );
      }
    } catch (error) {
      toast.error("Something went wrong", TOAST_CONFIG);
    } finally {
      setIsLoading(false);
    }
  };

  const createProfileHandler = async (formData) => {
    setIsLoading(true);
    try {
      const response = await createProfileService(formData);
      const { data: { user, status } } = response;
      
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: user })
        );
        setCurrentUser(user);
        toast.success('Image uploaded successfully', TOAST_CONFIG);
      }
      else if(status === 400){
        toast.success('No file uploaded', TOAST_CONFIG);
      }
    } catch (error) {
      toast.error("Something went wrong", TOAST_CONFIG);
    }
    finally {
      setIsLoading(false);
    }
  }

  const selectOptionHandler = async ({username, selectedOption}) => {
    setIsLoading(true);
    try {
      const response = await selectOptionService(username, selectedOption);
      const { data: { status } } = response;
      
      if (status === 200) {
         toast.success('Selected Options saved successfully', TOAST_CONFIG);
      }
    } catch (error) {
      toast.error("Something went wrong", TOAST_CONFIG);
    }
    finally {
      setIsLoading(false);
    }
  }

  const sendEmailHandler = async (username, email) => {

    console.log(username, email)
    setIsLoading(true);
    try {
      const response = await sendEmailService(username, email);
      const { data: { message, status } } = response;
      console.log(response);
      if (status === 200) {
        toast.success('Email sent successfully', TOAST_CONFIG);
      }
    } catch (error) {
     console.log(error);
      if(error?.response?.data?.error?.statusCode === 403){
        toast.error("You can only send testing emails to kmonu1666@gmail.com", TOAST_CONFIG);
      }
      else toast.error("Something went wrong", TOAST_CONFIG);
    }
    finally {
      setIsLoading(false);
    }

  }

  const verifyEmailHandler = async (username, token) => {
    setIsLoading(true);
    try {
      const response = await verifyEmailService(username, token);
      const { data: { status } } = response;
      if (status === 200) {
        toast.success('Email verified successfully', TOAST_CONFIG);
      }
    } catch (error) {
      toast.error("Something went wrong", TOAST_CONFIG);
    }
    finally {
      setIsLoading(false);
    }

  }




  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setCurrentUser(null);
    toast.success("Logged out successfully!", TOAST_CONFIG);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        inputLoading,
        error, 
        checkUserNameHandler,
        signupHandler,
        createProfileHandler,
        selectOptionHandler,
        sendEmailHandler,
        verifyEmailHandler,
        logoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);