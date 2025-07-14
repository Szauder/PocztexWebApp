import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Flex, Table } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTES } from "../Routing"
import Column from "antd/es/table/Column"

export function getEmployes() {
  return [
    {
      key: 3,
      name: 'Wasilij',
      surname: 'Iłanowicz',
      birth: '20.04.2001',
      pesel: '-',
      documentNr: 'PASP 12872',
      isPolishCitizen: 'nie',
      editButton: Edit(1)
    },
    {
      key: 2,
      name: 'Anna',
      surname: 'Szulc',
      birth: '12.04.1989',
      pesel: '76543210987',
      documentNr: 'DBT 12090',
      isPolishCitizen: 'tak',
      editButton: Edit(2)
    },
    {
      key: 1,
      name: 'Jan',
      surname: 'Kowalski',
      birth: '06.12.1999',
      pesel: '98765432101',
      documentNr: 'DBT 902821',
      isPolishCitizen: 'tak',
      editButton: Edit(3)
    },
  ]
}

function Edit(x) {
  return <Link to={`${ROUTES.EMPLOYES_EDIT_BASE_PATH}/${x}`}>
    <Button type="text" icon={<EditOutlined />}></Button>
  </Link>
}

export default function EmployesList() {
  const [ employes ] = useState(getEmployes())
  return <>
    <Flex justify="flex-end" align="center" style={{ padding: '12px 0' }}>
      <Button type="primary" icon={<PlusOutlined />}>Nowy pracownik</Button>
    </Flex>

    <Table dataSource={employes}>
      <Column title="Imię" dataIndex="name" />
      <Column title="Data urodzin" dataIndex="birth" />
      <Column title="Nazwisko" dataIndex="surname" />
      <Column title="Nr. dokumentu" dataIndex="documentNr" />
      <Column title="PESEL" dataIndex="pesel" />
      <Column title="Obywatelstwo polskie" dataIndex="isPolishCitizen" />
      <Column title="" dataIndex="editButton" width="40px" />
    </Table>
  </>
}