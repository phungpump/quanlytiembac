import { useState } from "react";
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    InputNumber,
    Space,
    Typography,
    Popconfirm,
} from "antd";
import { DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import type { Iorder, Iorderdetail } from "../../interfaces/order.interface";

const { Title, Text } = Typography;

export default function Order() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<Iorderdetail[]>([]);
    const [form] = Form.useForm<Iorderdetail>();
    const today = new Date();

    const handleAdd = (values: Iorderdetail) => {
        const todayStr = `${today.getFullYear()}${today.getMonth()+1}${today.getDate()}`;
        const createkey = (!data || data.length == 0) ? `${todayStr}-1` : `${todayStr}-${data.length + 1}`;
        values.keydetail = createkey;
        setData((prev) => [...prev, values]);
        form.resetFields();
        setOpen(false);
    };

    const handleRemove = (keydetail: string) => {
        setData((prev) => prev.filter((item) => item.keydetail !== keydetail));
    };

    const handleSave = () => {
        const neworder = {
            createdDate: today,
            detail: data
        } as Iorder;
        console.log(neworder);        
    }

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "productname",
            key: "productname",
        },
        {
            title: "Số tiền",
            dataIndex: "amount",
            key: "amount",
            align: "right" as const,
            render: (value: number) =>
                value.toLocaleString("vi-VN") + " ₫",
        },
        {
            title: "Hành động",
            key: "action",
            align: "center" as const,
            render: (_: unknown, record: Iorderdetail) => (
                <Popconfirm
                title="Xóa đơn hàng?"
                description="Bạn có chắc chắn muốn xóa đơn này?"
                onConfirm={() => handleRemove(record.keydetail)}
                okText="Xóa"
                cancelText="Hủy"
                >
                <Button
                    danger
                    size="small"
                    icon={<DeleteOutlined />}
                >
                    Xóa
                </Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <Space
            align="center"
            style={{ width: "100%", justifyContent: "space-between" }}
        >
            <div>
            <Title level={3} style={{ marginBottom: 0 }}>
                Tạo đơn hàng
            </Title>
            <Text type="secondary">
                Thêm và theo dõi các đơn hàng bạc
            </Text>
            </div>

            <Button
            color="cyan" variant="solid"
            icon={<SaveOutlined />}
            onClick={handleSave}
            >
                Lưu đơn hàng
            </Button>
        </Space>

        <Space
            align="center"
            style={{ width: "100%", justifyContent: "space-between", marginTop: 10 }}
        >
            <Button
            color="primary" variant="outlined"
            icon={<PlusOutlined />}
            onClick={() => setOpen(true)}
            >
                Thêm sản phẩm
            </Button>
        </Space>

        {/* Table */}
        <Table
            style={{ marginTop: 24 }}
            columns={columns}
            dataSource={data}
            pagination={false}
            locale={{ emptyText: "Chưa có đơn hàng" }}
        />

        {/* Modal */}
        <Modal
            title="Thêm sản phẩm"
            open={open}
            onCancel={() => setOpen(false)}
            onOk={() => form.submit()}
            okText="Lưu"
            cancelText="Hủy"
            destroyOnClose
        >
            <Form
            form={form}
            layout="vertical"
            onFinish={handleAdd}
            >
            <Form.Item
                label="Tên sản phẩm"
                name="productname"
                rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
            >
                <Input placeholder="Ví dụ: Nhẫn bạc nữ" />
            </Form.Item>

            <Form.Item
                label="Số tiền"
                name="amount"
                rules={[{ required: true, message: "Nhập số tiền" }]}
            >
                <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="1,500,000"
                formatter={(value?: number | string) =>
                    value
                    ? value
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : ""
                }
                parser={(value?: string) =>
                    value ? Number(value.replace(/,/g, "")) : 0
                }
                />
            </Form.Item>
            </Form>
        </Modal>
        </div>
    );
}
