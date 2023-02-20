import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:5001",
});

export const getAllStartups = () => backend.get("/startups");
export const getStartupById = (id) => backend.get("/startups/" + id);
export const createUser = (data) => backend.post("/users", data);
export const loginWithToken = (token) =>
  backend.post("/users", {
    Headers: {
      authorization: token,
    },
  });
