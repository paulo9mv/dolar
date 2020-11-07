import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData } from "../store/reducer";
import { ExchangeForm } from "./ExchangeForm";

import 'antd/dist/antd.css';

export function MainPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div style={{ width: '40%', backgroundColor: '#FF0000' }}>
      <Row>
        <Col span={8}>Cotação do dia</Col>
        <Col span={8}>U$ 1</Col>
        <Col span={8}>R$ {data.dolarEmReal}</Col>
      </Row>
      <ExchangeForm />
      <Row>
        <Col>
          <Row>Cotação atual: {data.dolarEmReal}</Row>
          <Row>IOF: {data.iof}</Row>
          <Row>Dólar sem imposto: {data.dolarSemImposto}</Row>
          <Row>Dolar com imposto: {data.dolarComImposto}</Row>
          <Row>Real sem imposto: {data.realSemImposto}</Row>
          <Row>Real com imposto: {data.realComImposto}</Row>
        </Col>
      </Row>
    </div>
  );
}
