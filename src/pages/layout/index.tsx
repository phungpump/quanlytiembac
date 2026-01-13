import { Layout, Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    BarChartOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { paths } from "../../commons/paths";
import { deleteCookie, getCookie } from "../../commons/cookie";
import { cookieName } from "../../commons/consts";

const { Header, Sider, Content } = Layout;

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getCookie(cookieName.login);
        if(!user)
        {
            navigate(paths.login);
        }
    }, []);

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
                {collapsed ? "TB" : "Tiệm Bạc Hiền"}
                </div>

                <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: "1",
                        icon: <DashboardOutlined />,
                        label: "Trang chủ",
                        onClick: () => {navigate(paths.home)}
                    },
                    {
                        key: "2",
                        icon: <ShoppingCartOutlined />,
                        label: "Đơn hàng",
                        onClick: () => {navigate(paths.order)}
                    },
                    {
                        key: "3",
                        icon: <BarChartOutlined />,
                        label: "Báo cáo",
                        onClick: () => {navigate(paths.report)}
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

                <div style={{ marginLeft: "auto", fontWeight: 500, cursor:"pointer" }} onClick={() => {
                    deleteCookie(cookieName.login);
                    navigate(paths.login);
                }}>
                    Thoát
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
