import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData } from "../store/reducer";
import { Row, Col } from "antd";

import 'antd/dist/antd.css';
import { ExchangeForm } from "./ExchangeForm";

export function Content() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchApi())
  }, [dispatch])

  useEffect(() => {
    console.log(data)

  }, [data])

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
        R$ {data.dolarEmReal}
      </Col>
    </Row>
    <Row >
    <Col span={8}>
    <Row>
        Cotação atual: {data.dolarEmReal}
      </Row>
      <Row>
        IOF: {data.iof}
      </Row>
      <Row>
        Dólar sem imposto: {data.dolarSemImposto}
      </Row>
      <Row>
        Dolar com imposto: {data.dolarComImposto}
      </Row>
      <Row>
        Real sem imposto: {data.realSemImposto}
      </Row>
      <Row>
        Real com imposto: {data.realComImposto}
      </Row>
    </Col>
  </Row>
  </div>
  );
}