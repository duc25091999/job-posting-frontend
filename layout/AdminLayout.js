import React from "react";
import { Layout, Menu, Button } from "antd";
import Link from "next/link";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
import { clearLocalStorage } from "../api/auth";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const logout = () => {
    clearLocalStorage();
    router.push("/admin/login")
  }
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu defaultSelectedKeys={[router.pathname]} theme="dark" style={{ marginTop: "60px" }}>
          <Menu.Item key={"/admin/candidate"}>
            <Link  href="/admin/candidate">Candidate</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/jobs"}>
            <Link  href="/admin/jobs">Job</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/mpcandidate"}>
            <Link  href="/admin/mpcandidate">MP Candidate</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, display:"flex",justifyContent:"end",alignItems:"center" }}>
          <Button onClick={logout}>Log out</Button>
        </Header>
        <Content style={{ margin: "48px 48px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, background: "#FFFFFF" }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
