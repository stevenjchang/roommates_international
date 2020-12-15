import axios from "axios";
import { getServerUrl } from "utils/url";

async function Login(formInputs) {
  const result = await axios.post(getServerUrl("auth/login"), formInputs, {
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
  const result = await axios.get(getServerUrl("auth/verify"), {
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
