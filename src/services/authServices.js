import axios from "axios";
import { BASE_URL } from '../utils/constants';


const signupService = async (name, username, email, password) =>
  await axios.post(`${BASE_URL}/users/signup`, {
    name: name,
    username: username,
    email: email,
    password: password,
  });


const checkUsernameService = async (username) =>
  await axios.post(`${BASE_URL}/users/username`,
    {
      username
    });

const createProfileService = async (formData) =>
  await axios.post(`${BASE_URL}/users/profile`, formData);


const selectOptionService = async (username, selectedOption) =>
  await axios.post(`${BASE_URL}/users/selectoption`, {
    username,
    selectedOption
  });

const sendEmailService = async (username, email) =>
  await axios.post(`${BASE_URL}/users/verify`, {
    username,
    email
  });

const verifyEmailService = async (username, token) =>
  await axios.post(`${BASE_URL}/users/verifyAccount`, {
    username,
    token
  });

export { signupService, checkUsernameService, createProfileService, selectOptionService, sendEmailService, verifyEmailService };