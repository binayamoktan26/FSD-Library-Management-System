import axios from "axios";
import { toast } from "react-toastify";
export const apiProcessor = async ({ method, url, payload, showToast }) => {
  try {
    const responsePending = axios({
      url,
      method,
      data: payload,
      //   headers
    });
    //show toast message
    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait...",
      });
    }
    const { data } = await responsePending;

    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    const msg = error.response.data.message || error.message;
    toast.error(msg);
  }
};
