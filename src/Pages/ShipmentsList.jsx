import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Table } from "antd"
import { Link } from "react-router-dom"
import { ROUTES } from "../Routing"
import Column from "antd/es/table/Column"

function Edit(x) {
  return <Link to={`${ROUTES.EMPLOYES_EDIT_BASE_PATH}/${x}`}>
    <Button type="text" icon={<EditOutlined />}></Button>
  </Link>
}

export function getShipments() {
  return [
    {
      key: 1,
      number: 'P/2025/1',
      weight: 12.41,
      width: 10.3,
      height: 40.3,
      deep: 12.6,
      description: 'Paczka zawiera delikatne elementy',
      who: 'Jan Kowalski',
      to: 'ul. Komorowska 50A/1, Katowice 23-600',
      status: 'w dostarczeniu',
      editButton: Edit(1),
    },
    {
      key: 2,
      number: 'P/2025/1',
      weight: 12.41,
      width: 10.3,
      height: 40.3,
      deep: 12.6,
      description: 'Paczka zawiera delikatne elementy',
      who: 'Jan Kowalski',
      to: 'ul. Komorowska 50A/1, Katowice 23-600',
      status: 'w dostarczeniu',
      editButton: Edit(2),
    },
    {
      key: 3,
      number: 'P/2025/1',
      weight: 12.41,
      width: 10.3,
      height: 40.3,
      deep: 12.6,
      description: 'Paczka zawiera delikatne elementy',      
      who: 'Jan Kowalski',
      to: 'ul. Komorowska 50A/1, Katowice 23-600',
      status: 'przyjęta w oddziale',
      editButton: Edit(3)
    },
  ]
}

export default function ShipmentsList({ status }) {
  const shipments = getShipments().filter(s => status === undefined || s.status === status)

  return <>
    <Flex justify="flex-end" align="center" style={{ padding: '12px 0' }}>
      <Button type="primary" icon={<PlusOutlined />}>Nowa przesyłka</Button>
    </Flex>

    <Table dataSource={shipments}>
      <Column title="Numer" dataIndex="number" />
      <Column title="Status" dataIndex="status" />
      <Column title="Nadawca" dataIndex="who" />
      <Column title="Adres" dataIndex="to" />
      <Column title="Waga [kg]" dataIndex="weight" />
      <Column title="Wymiary - szerokość [cm]" dataIndex="width" />
      <Column title="Wymiary - wysokość [cm]" dataIndex="height" />
      <Column title="Wymiary - głębokość [cm]" dataIndex="deep" />
      <Column title="Dodatkowe informacje" dataIndex="description" />
      <Column title="" dataIndex="editButton" width="40px" />
    </Table>
  </>
}