import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, SolutionOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Doctors",
    key: "doctors",
    icon: <UserOutlined />,
  },
  {
    label: "Nurses",
    key: "nurses",
    icon: <SolutionOutlined />,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  return (
    <header>
      <h1>Med Staff Management</h1>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </header>
  );
};

export default Header;
