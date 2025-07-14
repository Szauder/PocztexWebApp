import { Button, Checkbox, Form, Input } from "antd";
import { useParams } from "react-router-dom";

export default function AccountEdit() {
  const { id } = useParams()
  
  return <>
    <Form initialValues={{ id: id }} labelCol={{ span: 4 }} style={{ width: 600 }}>
      <Form.Item label="Login" name="id" rules={[{ required: true, message: "Pole wymagane" }]}>
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Zablokowane" name="locked">
        <Checkbox />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Zapisz
      </Button>
    </Form>
  </>
}