import axios from "axios";
import { URL } from "../helpers/localhostURL"

export const post = async (data) => {
    const response = await axios.post(`${URL}/api/ads_platform`, data);
    
    return response.data;
  };

  export const postRegistration = async (tripDateId, user) => {
    const response = await axios.post(
      `${URL}/api/items/${tripDateId}/register`,
      {},
      {
        auth: {
          username: user.username,
          password: user.password,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }


  export const putData = async (id, data) => {
    const response = await axios.put(`${URL}/api/ads_platform/${id}`, data, {
      auth: {
        username: user.username,
        password: user.password,
      },
    });
    return response.data;
  };