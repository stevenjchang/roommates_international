import axios from "axios";
import { getBaseUrl } from "utils/url";

async function Login(formInputs) {
  const result = await axios.post(getBaseUrl("auth/login"), formInputs);
  const user = result.data;
  if (user) {
    return { isAuthenticated: true, user };
  } else {
    return { isAuthenticated: false };
  }
}

export default { Login };
