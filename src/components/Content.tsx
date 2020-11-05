import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectData } from "../store/reducer";
import { Row, Col } from "antd";

import 'antd/dist/antd.css';

export function Content() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchApi())
  }, [dispatch])

  return (
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
  );
}