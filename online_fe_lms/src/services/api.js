import axios from "axios";

export const apiProcessor = async ({ method, url, payload }) => {
  try {
    const response = await axios({
      url,
      method,
      data: payload,
      //   headers
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
