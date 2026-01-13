import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import { users } from "../../commons/users";
import { deleteCookie, setCookie } from "../../commons/cookie";
import { cookieName } from "../../commons/consts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../commons/paths";

const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        deleteCookie(cookieName.login);
    }, []);

    const onFinish = (values: { username: string; password: string }) => {
        const user = users.find(x => x.password == values.password && x.username == values.username);
        if(user)
        {
            setCookie(cookieName.login, JSON.stringify(user));
            navigate(paths.home);
        }
    };

    return (
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #0f766e, #1e3a8a)",
            padding: 16,
        }}
        >
        <Card
            style={{
            width: "100%",
            maxWidth: 380,
            borderRadius: 12,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
        >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Title level={3} style={{ marginBottom: 4 }}>
                Đăng nhập hệ thống
            </Title>
            </div>

            <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            >
                <Form.Item
                    name="username"
                    label="Tài khoản"
                    rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
                >
                    <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="Nhập tài khoản"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
                >
                    <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Nhập mật khẩu"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    style={{
                        background: "linear-gradient(90deg, #0f766e, #1e3a8a)",
                        border: "none",
                        borderRadius: 8,
                    }}
                    >
                    Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </div>
    );
};

export default Login;
