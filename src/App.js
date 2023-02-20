import "./App.css";
import { Button, Layout, Menu } from "antd";
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
import Vendor from "./pages/Vendor";

function App() {
  const navigate = useNavigate();

  const tokenKey = "auth-token-34";

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const setUserByToken = (token) => {
    loginWithToken(token).then((res) => {
      console.log(res.data);
    });
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
  };

  useEffect(() => {
    let token = localStorage.getItem("auth-token-34");

    async function login() {
      localStorage.setItem(tokenKey, token);

      if (token) {
        const res = await loginWithToken(token);
        setLoggedIn(true);
      }
    }

    // token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmM2MyZmI5ZjkzMTA3MjQ1ODczODk0In0sImlhdCI6MTY3NjkxOTU0N30.nl0mPoguEwPXuKR8i87rtPnD_1GX_FQZmdJig3Bjq3U";

    login();
  }, []);

  return loggedIn ? (
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
          <Button className=" bg-red-500 text-white" onClick={logout}>
            Logout
          </Button>
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
              element={<Investor></Investor>}
            ></Route>
            <Route
              path="/startups/:id"
              element={<StartupDetails></StartupDetails>}
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
          element={<Login setLoggedIn={setLoggedIn}></Login>}
        ></Route>
        <Route
          path="/createCampaignManagerProfile"
          element={<CreateCampaignManager></CreateCampaignManager>}
        ></Route>
        <Route
          path="/createInvestor"
          element={
            <CreateInvestor
              setLoggedIn={setLoggedIn}
              setUser={setUser}
              setUserByToken={setUserByToken}
            ></CreateInvestor>
          }
        ></Route>
        <Route path="/createVendor" element={<Vendor></Vendor>}></Route>
        <Route path="/*" element={<Welcome></Welcome>}></Route>
      </Routes>
    </div>
  );
}

const navBar = [
  {
    label: "Home",
    key: "home",
    link: "/",
  },
  { label: "My Investments", key: "mystartups", link: "/mystartups" },
  { label: "Manager profile", key: "managerProfile", link: "/managerProfile" },
  {
    label: "Investor Profile",
    key: "investorProfile",
    link: "/investorprofile",
  },
  // {
  //   label: "Create campaign manager",
  //   key: "createCampaignManager",
  //   link: "/createCampaignManagerProfile",
  // },
];

export default App;
