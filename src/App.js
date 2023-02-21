import "./App.css";
import { Button, Layout, Menu, Spin } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import ManagerProfile from "./pages/ManagerProfile";
import MyStartups from "./pages/MyStartups";
import Investor from "./pages/Investor";
import Login from "./pages/Login";
import CreateInvestor from "./pages/CreateInvestorProfile";
import CreateCampaignManager from "./pages/CreateCampaignManager";
import Welcome from "./pages/Welcome";
import StartupDetails from "./pages/StartupDetails";
import { loginWithToken } from "./config/Requests";
import Vendor from "./pages/CreateVendor";
import CreateStartup from "./pages/CreateStartup";
import CreateSpendingRequest from "./pages/CreateSpendingRequest";
import VendorProfile from "./pages/VendorProfile";

function App() {
  const navigate = useNavigate();

  const tokenKey = "auth-token-34";

  const navBar = [
    {
      label: "Home",
      key: "home",
      link: "/",
    },
    { label: "My Investments", key: "mystartups", link: "/mystartups" },
    {
      label: "Manager profile",
      key: "managerProfile",
      link: "/managerProfile",
    },
    {
      label: "Investor Profile",
      key: "investorProfile",
      link: "/investorprofile",
    },
    {
      label: "Vendor Profile",
      key: "vendorProfile",
      link: "/vendorProfile",
    },
  ];

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const setUserByToken = async (token) => {
    setLoading(true);
    try {
      const res = await loginWithToken(token);
      setUser(res.data);
      setLoggedIn(true);
      localStorage.setItem(tokenKey, token);
      navigate("/");
    } catch (e) {
      alert("Unable to login");
    }
    setLoading(false);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem(tokenKey);
    setUser({});
  };

  useEffect(() => {
    let token = localStorage.getItem(tokenKey);
    if (token) setUserByToken(token);
  }, []);

  return (
    <Spin spinning={loading}>
      {loggedIn ? (
        <Layout hasSider>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="text-white d-flex justify-center w-full h-[60px] p-2">
              <img
                className="h-full mx-auto"
                src={"https://www.svgrepo.com/download/195318/investment.svg"}
              ></img>
            </div>

            {loggedIn && (
              <div className="p-2 space-y-1 text-gray-200 m-2">
                <div className="text-sm border-b border-gray-600">
                  User details
                </div>
                <div className=" font-bold text-blue-300 text-xl">
                  {user.user.name}
                </div>
                <div>
                  Logged in as{" "}
                  <span className=" text-green-500">{user.userType}</span>
                </div>
              </div>
            )}

            <div className="p-2 space-y-1 text-gray-200 mx-2">
              <div className="text-sm border-b border-gray-600">Navigation</div>
            </div>
            <Menu
              mode="inline"
              theme="dark"
              items={navBar.map((nav) => {
                return {
                  label: nav.label,
                  key: nav.key,
                  onClick: () => {
                    navigate(nav.link);
                  },
                };
              })}
            ></Menu>
          </Sider>
          <Layout className="site-layout bg-white" style={{ marginLeft: 200 }}>
            <Header
              className="site-layout-background flex items-center justify-between"
              style={{ padding: 0, height: "60px" }}
            >
              <div className="text-3xl my-auto text-white font-bold">
                Crowd Funding Application
              </div>
              <div className="px-2">
                <div></div>
                <Button className=" bg-red-500 text-white" onClick={logout}>
                  Logout
                </Button>
              </div>
            </Header>
            <Content
              style={{ margin: "0px 16px 0", overflow: "initial" }}
              className="pb-12 h-screen"
            >
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center" }}
              ></div>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                  path="/managerProfile"
                  element={<ManagerProfile></ManagerProfile>}
                ></Route>
                <Route
                  path="/mystartups"
                  element={<MyStartups></MyStartups>}
                ></Route>
                <Route
                  path="/investorprofile"
                  element={<Investor user={user}></Investor>}
                ></Route>
                <Route
                  path="/startups/:id"
                  element={<StartupDetails></StartupDetails>}
                ></Route>
                <Route
                  path="/createSpendingRequest"
                  element={<CreateSpendingRequest></CreateSpendingRequest>}
                ></Route>
                <Route
                  path="/createSpendingRequest"
                  element={<CreateSpendingRequest></CreateSpendingRequest>}
                ></Route>
                <Route
                  path="/createStartup"
                  element={<CreateStartup></CreateStartup>}
                ></Route>
                <Route
                  path="/vendorProfile"
                  element={<VendorProfile></VendorProfile>}
                ></Route>
              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Decentralized crowd funding and fraud prevention application using
              Blockchain
            </Footer>
          </Layout>
        </Layout>
      ) : (
        <div className="d-flex justify-center text-center h-screen w-full">
          <Routes>
            <Route
              path="/login"
              element={<Login loginWithToken={setUserByToken}></Login>}
            ></Route>
            <Route
              path="/createCampaignManagerProfile"
              element={
                <CreateCampaignManager
                  setUserByToken={setUserByToken}
                ></CreateCampaignManager>
              }
            ></Route>
            <Route
              path="/createInvestor"
              element={
                <CreateInvestor
                  setUserByToken={setUserByToken}
                ></CreateInvestor>
              }
            ></Route>
            <Route path="/createVendor" element={<Vendor></Vendor>}></Route>
            <Route path="/*" element={<Welcome></Welcome>}></Route>
          </Routes>
        </div>
      )}
    </Spin>
  );
}

export default App;
