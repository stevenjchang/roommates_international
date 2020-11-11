import React from "react";
import axios from "axios";

const data = { username: "Joey", password: "123" };

const UserRegister = () => {
  const register = async () => {
    axios
      .post("http://localhost:8080/register", data, { withCredentials: true })
      .then((res) => console.log("res ==>", res))
      .catch((e) => console.log("e ==>", e));
  };
  const login = async () => {
    axios
      .post("http://localhost:8080/login", data, { withCredentials: true })
      .then((res) => console.log("res ==>", res))
      .catch((e) => console.log("e ==>", e));
  };
  const getUser = async () => {
    axios
      .get("http://localhost:8080/user", { withCredentials: true })
      .then((res) => console.log("res ==>", res))
      .catch((e) => console.log("e ==>", e));
  };
  return (
    <>
      <h1>hello</h1>
      <button className="" onClick={register}>
        Click Button to Register
      </button>
      <br />
      <button className="" onClick={login}>
        Click Button to Login
      </button>
      <br />
      <button className="" onClick={getUser}>
        Click Button to Get User
      </button>
    </>
  );
};

export { UserRegister };
