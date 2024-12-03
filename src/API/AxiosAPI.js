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

export const getMyUserAPI = async (id) => {
  try {
    const response = await axios.get(`${server}user/${id}`);
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

export const getAllReviewDataAPI = async (userId) => {
  try {
    const response = await axios.get(`${server}user/${userId}/review`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getReviewDataAPI = async (userId, reviewId) => {
  try {
    const response = await axios.get(`${server}user/${userId}/review/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


//리뷰 삭제
export const deleteReviewAPI = async (userId, reviewId) => {
  try {
    const response = await axios.delete(`${server}user/${userId}/review/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//리뷰 수정
export const putReviewAPI = async (userId, reviewId, reviewData) => {
  try {
    const response = await axios.put(`${server}user/${userId}/review/${reviewId}`, reviewData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
