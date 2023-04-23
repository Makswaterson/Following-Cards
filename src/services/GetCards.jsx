import axios from 'axios';

axios.defaults.baseURL = 'https://6445574ab80f57f581b7e6e9.mockapi.io';

export async function getAllCards() {
  try {
    const { data } = await axios.get(`/tweets`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getPage(page) {
  try {
    const { data } = await axios.get(`/tweets?page=${page}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateTweet(id, activeFollow) {
  try {
    const { data } = await axios.put(`/tweet/${id}`, {
      following: activeFollow,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
