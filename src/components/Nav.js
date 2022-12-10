import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const Nav = () => {
  const items = [
    {
      key: 1,
      label: <Link to={"/listing"}>Listing</Link>,
    },
    {
      key: 2,
      label: <Link to={"/signup"}>Signup</Link>,
    },
    {
      key: 3,
      label: <Link to={"/login"}>Login</Link>,
    },
  ];

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
      />
    </Header>
  );
};

export default Nav;