import {
    Card,
    Col,
    Row,
    Statistic,
    Typography,
    Divider,
    List,
    Tag,
} from "antd";
import {
    ShoppingCartOutlined,
    DollarOutlined,
    UserOutlined,
    RiseOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Home() {
    return (
        <div style={{ padding: 24 }}>
        {/* HEADER */}
        <Title level={3}>Tiệm Bạc Hiền</Title>
        <Text type="secondary">
            Tổng quan hoạt động kinh doanh hôm nay
        </Text>

        <Divider />

        {/* STATISTICS */}
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
            <Card>
                <Statistic
                title="Đơn hàng hôm nay"
                value={9999}
                prefix={<ShoppingCartOutlined />}
                />
            </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
            <Card>
                <Statistic
                title="Doanh thu"
                value={1000000000}
                suffix="₫"
                prefix={<DollarOutlined />}
                />
            </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
            <Card>
                <Statistic
                title="Khách hàng"
                value={200}
                prefix={<UserOutlined />}
                />
            </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
            <Card>
                <Statistic
                title="Tăng trưởng"
                value={12.5}
                precision={1}
                suffix="%"
                prefix={<RiseOutlined />}
                />
            </Card>
            </Col>
        </Row>

        <Divider />

        {/* CONTENT */}
        <Row gutter={[16, 16]}>
            {/* ĐƠN GẦN ĐÂY */}
            <Col xs={24} md={14}>
            <Card title="Đơn hàng gần đây">
                <List
                itemLayout="horizontal"
                dataSource={[
                    {
                    code: "DH001",
                    product: "Nhẫn bạc nữ",
                    status: "Đã hoàn tất",
                    },
                    {
                    code: "DH002",
                    product: "Dây chuyền bạc",
                    status: "Đang xử lý",
                    },
                    {
                    code: "DH003",
                    product: "Lắc tay bạc",
                    status: "Chờ xác nhận",
                    },
                ]}
                renderItem={(item) => (
                    <List.Item>
                    <List.Item.Meta
                        title={`${item.code} – ${item.product}`}
                    />
                    <Tag
                        color={
                        item.status === "Đã hoàn tất"
                            ? "green"
                            : item.status === "Đang xử lý"
                            ? "blue"
                            : "orange"
                        }
                    >
                        {item.status}
                    </Tag>
                    </List.Item>
                )}
                />
            </Card>
            </Col>

            {/* THÔNG TIN TIỆM */}
            <Col xs={24} md={10}>
            <Card title="Thông tin tiệm">
                <p>
                <b>Tên:</b> Tiệm Bạc Hiền
                </p>
                <p>
                <b>Hotline:</b> 0909 000 000
                </p>
                <p>
                <b>Địa chỉ:</b> Chợ Vĩnh Long
                </p>
                <p>
                <b>Giờ mở cửa:</b> 8:00 – 18:00
                </p>
            </Card>
            </Col>
        </Row>
        </div>
    );
}
