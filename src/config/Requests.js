import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:5000",
});

const tokenKey = "auth-token-34";

export const getAllStartups = () => backend.get("/startups");
export const getStartupsForManager = () =>
  backend.get("/startups/me", {
    headers: {
      Authorization: localStorage.getItem(tokenKey),
    },
  });
export const getStartupById = (id) => backend.get("/startups/" + id);
export const getInvestmentsById = (id) => backend.get("/investments/" + id);
export const createUser = (data) => backend.post("/users", data);
export const createStartup = (data) =>
  backend.post("/startups", data, {
    headers: {
      Authorization: localStorage.getItem(tokenKey),
    },
  });
export const getAllSpendingRequests = () => backend.get("/spendingrequest");
export const getAllSpendingRequestsForManager = () =>
  backend.get("/spendingrequest/me", {
    headers: {
      Authorization: localStorage.getItem(tokenKey),
    },
  });
export const createSpendingRequest = (data) =>
  backend.post("/spendingrequest/" + data.startupId, data, {
    headers: {
      Authorization: localStorage.getItem(tokenKey),
    },
  });

export const getSpendingRequestForStartups = (startupId) =>
  backend.get("/spendingrequest/byStartup/" + startupId);
export const login = (data) => backend.post("/users/login", data);
export const loginWithToken = (token) =>
  backend.get("/users/profile", {
    headers: {
      Authorization: token,
    },
  });
