import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData } from "../../store/reducer";
import { ExchangeForm } from "../../components/ExchangeForm";

import 'antd/dist/antd.css';
import './MainPage.css'

const styles = {
  rowBaseline: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  smallFont: {
    fontSize: 16,
  },
  bigFont: {
    fontSize: 40,
  },
};

export function MainPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  console.log(data)
  console.log(data.dolarSemImposto)

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div style={{ width: '40%', backgroundColor: '#F0F000' }}>
      <Row>
        <Col span={8} offset={8}>Cotação do dia</Col>
      </Row>
      <div className='baseline'>
        <div style={styles.bigFont}>1</div>
        USD
        {`↔️`}
        <div style={styles.bigFont}>{data.dolarEmReal.toFixed(2)}</div>BRL
      </div>
      <Row>
        <Col span={8} offset={8}>
          <ExchangeForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>IOF: {data.iof * 100}%</Row>
          <Row>Dólar sem imposto: {data.dolarSemImposto.toFixed(2)}</Row>
          <Row>Dolar com imposto: {data.dolarComImposto.toFixed(2)}</Row>
          <Row>Real sem imposto: {data.realSemImposto.toFixed(2)}</Row>
          <Row>Real com imposto: {data.realComImposto.toFixed(2)}</Row>
        </Col>
      </Row>
    </div>
  );

}
