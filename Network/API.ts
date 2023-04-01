import axios from "axios";
const BASE_URL = `https://api.github.com`;

export const searchUser = async (userName: string) => {
  const response = await axios(`${BASE_URL}/search/users?q=${userName}`);
  return response.data.items;
};

export const fetchUserData = async (userName: string) => {
  const response = await axios(`${BASE_URL}/users/${userName}`);
  return response.data;
};
