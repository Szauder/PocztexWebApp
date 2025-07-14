import { Button, Checkbox, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import { getPayments } from "./PaymentsList";

export default function PaymentEdit() {
  const { id } = useParams()
  
  const x = getPayments().filter(e => e.key == id)[0]

  return <>
    
  </>
}