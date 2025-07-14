import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Table } from "antd"
import { Link } from "react-router-dom"
import { ROUTES } from "../Routing"
import Column from "antd/es/table/Column"

export function getPayments() {
  return [
    {
      key: 1,
      numer: 'PAY/2025/1',
      amount: 29.99,
      who: 'Jan Kowalski',
      status: 'oczekuje na zapłatę',
      editButton: Edit(1)
    },
    {
      key: 2,
      numer: 'PAY/2025/2',
      amount: 19.99,
      who: 'Jan Bytnar',
      status: 'oczekuje na zapłatę',
      editButton: Edit(2)
    },
    {
      key: 3,
      numer: 'PAY/2025/3',
      amount: 14.99,
      who: 'Adam Nowak',
      status: 'zapłacone',
      editButton: Edit(3)
    },
    {
      key: 4,
      numer: 'PAY/2025/4',
      amount: 32.87,
      who: 'Wiktoria Kowalska',
      status: 'oczekuje na zapłatę',
      editButton: Edit(4)
    },
  ]
}

function Edit(x) {
  return <Link to={`${ROUTES.EMPLOYES_EDIT_BASE_PATH}/${x}`}>
    <Button type="text" icon={<EditOutlined />}></Button>
  </Link>
}

export default function PaymentsList({ status }) {
  const payments = getPayments().filter(p => status === undefined || p.status === status)

  return <>
    <Flex justify="flex-end" align="center" style={{ padding: '12px 0' }}>
      <Button type="primary" icon={<PlusOutlined />}>Nowa płatność</Button>
    </Flex>

    <Table dataSource={payments}>
      <Column title="Numer" dataIndex="numer" />
      <Column title="Status" dataIndex="status" />
      <Column title="Wartość (PLN)" dataIndex="amount" />
      <Column title="Klient" dataIndex="who" />
      <Column title="" dataIndex="editButton" width="40px" />
    </Table>
  </>
}