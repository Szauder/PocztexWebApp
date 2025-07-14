import { Button, Checkbox, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { getEmployes } from "./EmployesList";

export default function EmployeEdit() {
  const { id } = useParams()
  
  const x = getEmployes().filter(e => e.key == id)[0]

  return <>
    <Form initialValues={x} labelCol={{ span: 6 }} style={{ width: 600 }}>
      <Form.Item label="Imię" name="name">
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Naswisko" name="surname">
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Data urodzin" name="birth">
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Nr. dokumentu" name="documentNr">
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="PESEL" name="pesel">
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Obywatelstwo polskie" name="isPolishCitizen">
        <Checkbox />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Zapisz
      </Button>
    </Form>
  </>
}