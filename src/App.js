import "./App.css";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import ManagerProfile from "./pages/ManagerProfile";
import MyStartups from "./pages/MyStartups";
import Investor from "./pages/Investor";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateCampaignManager from "./pages/CreateCampaignManager";
import Welcome from "./pages/Welcome";

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

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
          className="site-layout-background flex"
          style={{ padding: 0, height: "60px" }}
        >
          <div className="text-3xl my-auto text-white font-bold">
            Crowd Funding Application
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
              element={<Investor></Investor>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
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
          path="/"
          element={<Welcome setLoggedIn={setLoggedIn}></Welcome>}
        ></Route>
        <Route
          path="/createCampaignManagerProfile"
          element={<CreateCampaignManager></CreateCampaignManager>}
        ></Route>
        <Route path="/createInvestor" element={<SignUp></SignUp>}></Route>
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
  { label: "Login", key: "login", link: "/login" },
  {
    label: "Create campaign manager",
    key: "createCampaignManager",
    link: "/createCampaignManagerProfile",
  },
];

export default App;
