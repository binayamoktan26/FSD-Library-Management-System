import axios from "axios";

export const apiProcessor = async ({ method, url, payload }) => {
  try {
    const response = await axios({
      url,
      method,
      data: payload,
      //   headers
    });
    console.log(response.data);
    return response;
  } catch (error) {
    return error.response.data;
  }
};
