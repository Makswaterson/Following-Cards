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
    const { data } = await axios.get(`/tweets?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateTweet(id, activeFollow, followers) {
  try {
    const { data } = await axios.put(`/tweets/${id}`, {
      following: activeFollow,
      followers,
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
