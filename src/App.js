import "./App.css";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyStartups from "./pages/MyStartups";
import Investor from "./pages/Investor";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateInvestor from "./pages/CreateInvestor";

function App() {
  const navigate = useNavigate();

  return (
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
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background flex"
          style={{ padding: 0, height: "60px" }}
        >
          <div className="text-3xl my-auto text-white font-bold">
            Crowd Funding Application
          </div>
        </Header>
        <Content style={{ margin: "0px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          ></div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile/admin" element={<Profile></Profile>}></Route>
            <Route
              path="/profile/investor"
              element={<InvestorProfile></InvestorProfile>}
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
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route
              path="/createInvestorProfile"
              element={<CreateInvestor></CreateInvestor>}
            ></Route>
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Decentralized crowd funding and fraud prevention application using
          Blockchain
        </Footer>
      </Layout>
    </Layout>
  );
}

const navBar = [
  {
    label: "Home",
    key: "home",
    link: "/",
  },
  { label: "My Investments", key: "mystartups", link: "/mystartups" },
  { label: "Profile", key: "profile", link: "/profile" },
  {
    label: "Investor Profile",
    key: "investorProfile",
    link: "/investorprofile",
  },
  { label: "Login", key: "login", link: "/login" },
  { label: "Sign Up", key: "signUp", link: "/signup" },
  {
    label: "Create Investor Profile",
    key: "createInvestorProfile",
    link: "/createinvestorprofile",
  },
];

export default App;
