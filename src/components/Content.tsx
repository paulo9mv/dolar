import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData } from "../store/reducer";
import { Row, Col, Input, Radio } from "antd";

import 'antd/dist/antd.css';
import { ExchangeForm } from "./ExchangeForm";

export function Content() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const [value, setValue] = useState('')
  const [tax, setTax] = useState('')
  const [dinheiro, setDinheiro] = useState(true)

  useEffect(() => {
    dispatch(fetchApi())
  }, [dispatch])

  useEffect(() => {
    const dolar = parseFloat(value)
    const taxa = parseFloat(tax)

    const iof = dinheiro ? 1.1 : 6.4

    console.log('Dolar' ,dolar, 'Tax' ,taxa, 'iof', iof, 'Real',data.value)
  }, [value, tax, dinheiro])

  return (
    <div>
      <ExchangeForm />
    <Row >
      <Col span={8}>
        Cotação do dia
      </Col>
      <Col span={8}>
        U$ 1
      </Col>
      <Col span={8}>
        R$ {data.value}
      </Col>
    </Row>
    <Row >
    <Col span={4}>
      <Input
        placeholder='Quantia desejada de dólares'
        onChange={e => setValue(e.target.value)}
        value={value}
        />
    </Col>
    <Col span={4}>
    <Input
        placeholder='Taxa do estado'
        onChange={e => setTax(e.target.value)}
        value={tax}
        />
    </Col>
    <Col span={4}>
    <Radio.Group onChange={e => setDinheiro(e.target.value)} value={dinheiro}>
        <Radio value={false}>Cartão</Radio>
        <Radio value={true}>Dinheiro</Radio>
      </Radio.Group>
    </Col>
    <Col span={8}>
    <Row>
        Cotação atual: {data.value}
      </Row>
      <Row>
        IOF: {(dinheiro ? (1.1/100) : (6.4/100))}
      </Row>
      <Row>
        Dólar sem imposto: {parseFloat(value)}
      </Row>
      <Row>
        Dolar com imposto: {parseFloat(value) + parseFloat(value) * parseFloat(tax)}
      </Row>
      <Row>
        Real sem imposto: {(parseFloat(value) + parseFloat(value) * parseFloat(tax)) * data.value}
      </Row>
      <Row>
        Real com imposto: {((parseFloat(value) + parseFloat(value) * parseFloat(tax)) * data.value) + ((parseFloat(value) + parseFloat(value) * parseFloat(tax)) * data.value) * (dinheiro ? (1.1/100) : (6.4/100))}
      </Row>
    </Col>
  </Row>
  </div>
  );
}