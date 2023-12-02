import axios from 'axios';
const baseURL = import.meta.env.VITE_BACKEND_API + '/auth';

const url = {
  login: `${baseURL}/sign-in`,
  register: `${baseURL}/sign-up`,
};

export const registerUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(url.register, userData);
    console.log(response.data);
  } catch (error) {
    const customError = new Error();
    customError.message = error.response.data.message;
    console.log(customError.message);
    // Phải có dòng throw error, không có dòng này
    // thì Tanstack không bắt được sự kiện error
    throw customError;
  }
};

export const loginUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(url.login, userData);
    return response.data;
  } catch (error) {
    const customError = new Error();
    customError.message = error.response.data.message;
    console.log(customError.message);
    // Phải có dòng throw error, không có dòng này
    // thì Tanstack không bắt được sự kiện error
    throw customError;
  }
};
