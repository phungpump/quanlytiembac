import { Layout, Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        {/* SIDEBAR */}
        <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={240}
            breakpoint="lg"
            collapsedWidth={80}
            onBreakpoint={(broken) => setCollapsed(broken)}
            style={{background: "linear-gradient(180deg, #71d3cb 0%, #4362b9 100%)",}}
        >
            {/* LOGO */}
            <div
            style={{
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                paddingLeft: collapsed ? 0 : 24,
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                transition: "all 0.2s",
            }}
            >
            {collapsed ? "TB" : "Test"}
            </div>

            <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
                {
                key: "1",
                icon: <DashboardOutlined />,
                label: "Dashboard",
                },
                {
                key: "2",
                icon: <ShoppingCartOutlined />,
                label: "Order",
                },
                {
                key: "3",
                icon: <BarChartOutlined />,
                label: "Report",
                },
            ]}
            />
        </Sider>

        {/* MAIN */}
        <Layout>
            {/* HEADER */}
            <Header
            style={{
                background: "#fff",
                padding: "0 16px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #f0f0f0",
            }}
            >
            {/* COLLAPSE BUTTON */}
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: 18 }}
            />

            <div style={{ marginLeft: "auto", fontWeight: 500 }}>
                Admin
            </div>
            </Header>

            {/* CONTENT */}
            <Content
            style={{
                margin: 16,
                padding: 16,
                background: "#fff",
                borderRadius: 8,
            }}
            >
            <Outlet />
            </Content>
        </Layout>
        </Layout>
    );
}
