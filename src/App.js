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
        <div className="p-4 text-white">Logo</div>
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
        <Header className="site-layout-background flex" style={{ padding: 0 }}>
          <div className="text-3xl my-auto text-cyan-400">
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
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route
              path="/mystartups"
              element={<MyStartups></MyStartups>}
            ></Route>
            <Route path="/investorprofile" element={<Investor></Investor>}></Route>
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
  { label: "Investor Profile", key: "investorProfile", link: "/investorprofile" },
];

export default App;
