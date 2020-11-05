import React from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../store/reducer";
import { Row, Col } from "antd";

import 'antd/dist/antd.css';

export function Content() {
  const dispatch = useDispatch();

  dispatch(fetchApi())

  return (
    <Row >
      <Col span={8}>
        Cotação do dia
      </Col>
      <Col span={8}>
        U$ 1
      </Col>
      <Col span={8}>
        R$ 8.98
      </Col>
    </Row>
  );
}