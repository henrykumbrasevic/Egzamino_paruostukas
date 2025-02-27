import axios from "axios";
import { URL } from "../helpers/localhostURL"

export const deleteItemById = async (id) => {
  await axios.delete(`${URL}/api/items/${id}`);
};
