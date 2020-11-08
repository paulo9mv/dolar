import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData, selectStatus } from "../../store/reducer";
import { ExchangeForm } from "../../components/ExchangeForm";

import 'antd/dist/antd.css';
import './MainPage.css'
import Content from "../../components/Content";
import StandardInformation from "../../components/StandardInformation";

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
  const status = useSelector(selectStatus)

  console.log(data)
  console.log(data.dolarSemImposto)

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div className='mainPage' style={{ width: '60%', height: '700px'}}>
      <Row>
        <Col span={8} offset={8}>Cotação do dia</Col>
      </Row>
      <div className='baseline'>
        <div style={styles.bigFont}>1</div>
        USD
        {`↔️`}
        <div style={styles.bigFont}>{data.dolarEmReal.toFixed(2)}</div>BRL
      </div>
      <div style={styles.smallFont}>
        Última atualização: 10 Nov 2010
      </div>
      <Row>
        <Col span={8} offset={8}>
          <ExchangeForm />
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{backgroundColor: '#FF0000'}}>
          {
            status.hasSubmittedData ? <Content data={data}/> : <StandardInformation isWaiting={status.isWaiting} />
          }
        </Col>
      </Row>
    </div>
  );

}