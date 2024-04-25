import logo from "./logo.svg";
import "./App.css";
import {
  Avatar,
  Table,
  Typography,
  Flex,
  Tag,
  AutoComplete,
  Button,
  Select,
  Input,
} from "antd";
import Item from "antd/es/list/Item";
import { FilterFilled, SortAscendingOutlined } from "@ant-design/icons";

const { Text } = Typography;

const data = [
  {
    key:1,
    name: "John Doe",
    user: "johndoe123",
    empId: "#JD123",
    role: "Manager",
    email: "john.doe@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    key:2,
    name: "Alice Smith",
    user: "alicesmith456",
    empId: "#AS456",
    role: "Developer",
    email: "alice.smith@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    key:3,
    name: "Bob Johnson",
    user: "bobjohnson789",
    empId: "#BJ789",
    role: "Designer",
    email: "bob.johnson@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    key:4,
    name: "John Doe",
    user: "johndoe123",
    empId: "#JD123",
    role: "Manager",
    email: "john.doe@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    key:5,
    name: "Alice Smith",
    user: "alicesmith456",
    empId: "#AS456",
    role: "Developer",
    email: "alice.smith@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    key:6,
    name: "Bob Johnson",
    user: "bobjohnson789",
    empId: "#BJ789",
    role: "Designer",
    email: "bob.johnson@example.com",
    pick_url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

function App() {
  const columns = [
    {
      title: "Name",
      render: (item) => {
        return (
          <Flex gap={"middle"} align="center">
            <Avatar size={64} src={item.pick_url} alt={"pick_url"} />
            <Text strong>{item.name}</Text>
          </Flex>
        );
      },
    },
    {
      title: "User",
      dataIndex: "user",
      render: (item) => <Text strong>{item}</Text>,
    },
    {
      title: "Employee Id",
      dataIndex: "empId",
      render: (item) => <Text strong>{item}</Text>,
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (item) => <Text>{item}</Text>,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (item) => <Text type="secondary">{item}</Text>,
    },
    {
      title: "Group",
      render: () => (
        <Flex gap={"small"}>
          <Tag color="green" size="large">
            Group 1
          </Tag>
          <Tag color="blue">Group 3</Tag>
          <Tag color="purple">Group 5</Tag>
        </Flex>
      ),
    },
  ];
  return (
    <div className="App">
      <Flex gap={"middle"} vertical>
        <Flex justify="space-between" align="center">
          <Flex gap={"small"} align="center">
            <AutoComplete>
              <Input.Search
                placeholder="Search by user name , user id ,email"
              />
            </AutoComplete>
            <Button type="primary">Create User</Button>
            <Button type="default">Add to group</Button>
          </Flex>
          <Flex gap={"small"}>
            <Button type="text" icon={<SortAscendingOutlined />}>
              Sort By
            </Button>
            <Button type="text" icon={<FilterFilled />}>
              Filter
            </Button>
            <Select placeholder="Actions"></Select>
          </Flex>
        </Flex>
        <Table
          columns={columns}
          dataSource={data}
          rowSelection={{
            onChange: (e) => {
              console.log("selection change", e);
            },
          }}
        />
      </Flex>
    </div>
  );
}

export default App;
