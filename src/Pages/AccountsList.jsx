import { Button, Flex, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import Column from "antd/es/table/Column";
import { Link } from "react-router-dom";
import { ROUTES } from "../Routing"

export default function AccountsList() {
  const accounts = [
    {
      key: '1',
      editButton: (
        <Link to={`${ROUTES.ACCOUNT_EDIT_BASE_PATH}/${1}`}>
          <Button type="text" icon={<EditOutlined />}></Button>
        </Link>
      ),
      login: 'root',
      locked: 'nie',
    },
    {
      key: '2',
      editButton: (
        <Link to={`${ROUTES.ACCOUNT_EDIT_BASE_PATH}/${2}`}>
          <Button type="text" icon={<EditOutlined />}></Button>
        </Link>
      ),
      login: 'user',
      locked: 'tak',
    }
  ]

  return <>
    <Flex justify="flex-end" align="center" style={{ padding: '12px 0' }}>
      <Button type="primary" icon={<PlusOutlined />}>Nowe konto</Button>
    </Flex>

    <Table dataSource={accounts}>
      <Column title="Login" dataIndex="login" />
      <Column title="Zablokowane" dataIndex="locked" />
      <Column title="" dataIndex="editButton" width="40px" />
    </Table>
  </>
}