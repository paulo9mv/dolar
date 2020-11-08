import { Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData, selectStatus } from "../../store/reducer";

import ExchangeForm from "../../components/exchangeForm/ExchangeForm";
import Content from "../../components/content/Content";
import DefaultInfo from "../../components/defaultInfo/DefaultInfo";

import 'antd/dist/antd.css';
import './MainPage.css'

export function MainPage() {
  const dispatch = useDispatch()
  const data = useSelector(selectData)
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div className='mainPage'>
      <Row>
        <Col span={8} offset={8}>Cotação do dia</Col>
      </Row>
      <div className='baseline'>
        <div>1</div>
        USD
        {`↔️`}
        <div>{data.dolarEmReal.toFixed(2)}</div>BRL
      </div>
      <div className='update-time'>
        Última atualização: {status.ultimaAtualizacao}
      </div>
      <Row>
        <Col md={{offset: 8, span: 8}} xs={{offset: 6, span: 12}} offset={6}>
          <Divider className='divider'/>
          <ExchangeForm />
          <Divider className='divider'/>
        </Col>
      </Row>
      <Row justify='center' gutter={[4, 36]}>
        <Col>
          {status.hasSubmittedData ?
            <Content data={data} isLoading={status.isLoading}/> :
            <DefaultInfo isLoading={status.isLoading} />}
        </Col>
      </Row>
    </div>
  );

}
