import axios from "axios";
import { getBaseUrl } from "utils/url";

async function Login(formInputs) {
  const result = await axios.post(getBaseUrl("auth/login"), formInputs, {
    withCredentials: true,
  });
  const user = result.data;
  if (user) {
    return { isAuthenticated: true, user };
  } else {
    return { isAuthenticated: false };
  }
}

async function checkIsAlreadyLoggedIn() {
  const result = await axios.get(getBaseUrl("auth/verify"), {
    withCredentials: true,
  });
  const { user } = result.data;
  if (user) {
    return { ...user };
  } else {
    return {};
  }
}

export default { Login, checkIsAlreadyLoggedIn };
