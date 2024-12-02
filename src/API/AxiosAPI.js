import axios from 'axios';

//서버 연결 파일

const server = process.env.REACT_APP_SERVER;

export const getUsersAPI = async () => {
  try {
    const response = await axios.get(`${server}user`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postReviewAPI = async (id, data) => {
  try {
    const response = await axios.post(`${server}user/${id}/review`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export const postLoginAPI = async(data) =>{
  try{
    const response = await axios.post(`${server}user`, data);
    return response.data;
  }
  catch(error){
    console.error(error);
  }
}
