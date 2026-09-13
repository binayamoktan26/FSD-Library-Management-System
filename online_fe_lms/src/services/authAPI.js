// all API call related to signUP ,signIN , token

import { apiProcessor } from "../services/api.js";
const apiBaseUrl = "http://localhost:8000";
const authApiEP = apiBaseUrl + "/api/v1/auth";
export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "POST",
    payload,
  };
  const result = await apiProcessor(obj);
  console.log(result);
};
