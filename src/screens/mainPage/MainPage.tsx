import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData, selectStatus } from "../../store/reducer";

import ExchangeForm from "../../components/exchangeForm/ExchangeForm";
import Content from "../../components/content/Content";
import StandardInformation from "../../components/standardInformation/StandardInformation";

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
  const dispatch = useDispatch()
  const data = useSelector(selectData)
  const status = useSelector(selectStatus)

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
        Última atualização: {status.ultimaAtualizacao}
      </div>
      <Row>
        <Col span={8} offset={8}>
          <ExchangeForm />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          {status.hasSubmittedData ?
            <Content data={data} isWaiting={status.isWaiting}/> :
            <StandardInformation isWaiting={status.isWaiting} />}
        </Col>
      </Row>
    </div>
  );

}
