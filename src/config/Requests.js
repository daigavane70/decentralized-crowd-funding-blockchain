import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:5001",
});

export const getAllStartups = () => backend.get("/startups");
export const getStartupById = (id) => backend.get("/startups/" + id);
export const getInvestmentsById = (id) => backend.get("/investments/" + id);
export const createUser = (data) => backend.post("/users", data);
export const getAllSpendingRequests = (id) => backend.get("/spendingrequest");
export const login = (data) => backend.post("/users/login", data);
export const loginWithToken = (token) =>
  backend.get("/users/profile", {
    headers: {
      Authorization: token,
    },
  });
