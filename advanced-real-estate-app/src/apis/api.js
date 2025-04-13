import handleApiRequest from "./apiRequest";
import handleAPI from "./handlAPI";
import { removeAuth } from "../redux/reducers/authReducer";
import { message } from "antd";

export const handleApiBuilding = async (url, data, method, token) => {
  return await handleApiRequest(url, data, method, token);
};
export const fetchUser = async (
  url,
  data,
  method,
  token,
  dispatch,
) => {
  try {
    return await handleAPI(url, {}, "get", token);
  } catch (error) {
    dispatch(removeAuth());
    console.error(error);
    message.error("Đã có lỗi xảy ra!");
  }
};
